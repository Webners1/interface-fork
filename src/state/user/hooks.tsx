import { defaultAbiCoder } from '@ethersproject/abi'
import { getCreate2Address } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { keccak256, pack } from '@ethersproject/solidity'
import {
  BENTOBOX_ADDRESS,
  CHAINLINK_ORACLE_ADDRESS,
  Currency,
  FACTORY_ADDRESS,
  KASHI_ADDRESS,
  Token,
} from '@sushiswap/core-sdk'
import { CHAINLINK_PRICE_FEED_MAP } from 'app/config/oracles/chainlink'
import { BASES_TO_TRACK_LIQUIDITY_FOR, PINNED_PAIRS } from 'app/config/routing'
import { e10 } from 'app/functions'
import { useAllTokens } from 'app/hooks/Tokens'
import { useActiveWeb3React } from 'app/services/web3'
import { AppState } from 'app/state'
import { useAppDispatch, useAppSelector } from 'app/state/hooks'
import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'

import {
  addSerializedPair,
  addSerializedToken,
  removeSerializedToken,
  SerializedPair,
  SerializedToken,
  toggleURLWarning,
  updateUserDeadline,
  updateUserExpertMode,
  updateUserSingleHopOnly,
  updateUserUseSushiGuard,
} from './actions'
import ChainId from 'pages/api/analytics/bentobox/[chainId]'
import { Pair } from 'app/hooks/Pair'

function serializeToken(token: Token): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
  }
}

function deserializeToken(serializedToken: SerializedToken): Token {
  return new Token(
    serializedToken.chainId,
    serializedToken.address,
    serializedToken.decimals,
    serializedToken.symbol,
    serializedToken.name
  )
}

export function useIsExpertMode(): boolean {
  return useAppSelector((state) => state.user.userExpertMode)
}

export function useExpertModeManager(): [boolean, () => void] {
  const dispatch = useAppDispatch()
  const expertMode = useIsExpertMode()

  const toggleSetExpertMode = useCallback(() => {
    dispatch(updateUserExpertMode({ userExpertMode: !expertMode }))
  }, [expertMode, dispatch])

  return [expertMode, toggleSetExpertMode]
}

export function useUserSingleHopOnly(): [boolean, (newSingleHopOnly: boolean) => void] {
  const dispatch = useAppDispatch()

  const singleHopOnly = useAppSelector((state) => state.user.userSingleHopOnly)

  const setSingleHopOnly = useCallback(
    (newSingleHopOnly: boolean) => {
      gtag('event', newSingleHopOnly ? 'Enabled Single Hop' : 'Disabled Single Hop', {
        event_category: 'Routing',
      })

      dispatch(updateUserSingleHopOnly({ userSingleHopOnly: newSingleHopOnly }))
    },
    [dispatch]
  )

  return [singleHopOnly, setSingleHopOnly]
}

export function useUserTransactionTTL(): [number, (userDeadline: number) => void] {
  const dispatch = useAppDispatch()
  const userDeadline = useSelector<AppState, AppState['user']['userDeadline']>((state) => {
    return state.user.userDeadline
  })

  const setUserDeadline = useCallback(
    (userDeadline: number) => {
      dispatch(updateUserDeadline({ userDeadline }))
    },
    [dispatch]
  )

  return [userDeadline, setUserDeadline]
}

export function useAddUserToken(): (token: Token) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (token: Token) => {
      dispatch(addSerializedToken({ serializedToken: serializeToken(token) }))
    },
    [dispatch]
  )
}

export function useRemoveUserAddedToken(): (chainId: number, address: string) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (chainId: number, address: string) => {
      dispatch(removeSerializedToken({ chainId, address }))
    },
    [dispatch]
  )
}

export function useUserAddedTokens(): Token[] {
  const { chainId } = useActiveWeb3React()
  const serializedTokensMap = useAppSelector(({ user: { tokens } }) => tokens)

  return useMemo(() => {
    if (!chainId) return []
    // @ts-ignore TYPE NEEDS FIXING
    return Object.values(serializedTokensMap?.[chainId] ?? {}).map(deserializeToken)
  }, [serializedTokensMap, chainId])
}

function serializePair(pair: Pair): SerializedPair {
  return {
    token0: serializeToken(pair.token0),
    token1: serializeToken(pair.token1),
  }
}

export function usePairAdder(): (pair: Pair) => void {
  const dispatch = useAppDispatch()

  return useCallback(
    (pair: Pair) => {
      dispatch(addSerializedPair({ serializedPair: serializePair(pair) }))
    },
    [dispatch]
  )
}

export function useURLWarningVisible(): boolean {
  return useAppSelector((state: AppState) => state.user.URLWarningVisible)
}

export function useURLWarningToggle(): () => void {
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(toggleURLWarning()), [dispatch])
}

/**
 * Given two tokens return the liquidity token that represents its liquidity shares
 * @param tokenA one of the two tokens
 * @param tokenB the other token
 */
export function computePairAddress({
  factoryAddress,
  tokenA,
  tokenB,
}: {
  factoryAddress: string
  tokenA: Token
  tokenB: Token
}): string {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
  return getCreate2Address(
    factoryAddress,
    keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
    token0.chainId == 1 ? "0x284105c50b630ba152d66c7cc0721c3729f56026a8d71617578311e869c253bf" : token0.chainId == 56 ? "0x75df2c56877e32c6cf5b6bae86b4df78f14dcc4566ead8468f91d83b7838b279" : tokenA.chainId == 137 ? "0x75df2c56877e32c6cf5b6bae86b4df78f14dcc4566ead8468f91d83b7838b279" : token0.chainId == 6278 ? "0x68621122d5a2d88173b4685b8a130c8edf6af1711c629d20fc360e4512b3a347" : token0.chainId == 24116 ? "0x362eb84d228e4a995a27aa4ff1f7def659c8c7acb13d1fa2e9d059d4151b65a4" : "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303"
  )
}
export function toV2LiquidityToken([tokenA, tokenB]: [Token, Token]): Token {
  if (tokenA.chainId !== tokenB.chainId) throw new Error('Not matching chain IDs')
  if (tokenA.equals(tokenB)) throw new Error('Tokens cannot be equal')
  if (!FACTORY_ADDRESS[tokenA.chainId]) throw new Error('No V2 factory address on this chain')
  console.log("pairs ", tokenA.chainId, tokenB.name, tokenA.name, computePairAddress({
    factoryAddress:
      tokenA.chainId == 1
        ? '0x7cf1d51C25E9bcD023ebF318B99824121941eBcf'
        : tokenA.chainId == 137
          ? '0xc844820201334B8bbfc42aCA8e0f79C6BaAF916E'
          : tokenA.chainId == 24116
            ? '0x3Be077BBCaF5a518C6E12E5bCa6fdF8d7A36dc27'
            : tokenA.chainId == 6278
              ? '0xc844820201334B8bbfc42aCA8e0f79C6BaAF916E'
              : tokenA.chainId == 56
                ? '0x20522019a3c2F35537561E75C519F19bd5Ae0d4A'
                : FACTORY_ADDRESS[tokenA.chainId],
    tokenA,
    tokenB,
  }))
  return new Token(
    tokenA.chainId,
    computePairAddress({
      factoryAddress:
        tokenA.chainId == 1
          ? '0x7cf1d51C25E9bcD023ebF318B99824121941eBcf'
          : tokenA.chainId == 137
            ? '0xc844820201334B8bbfc42aCA8e0f79C6BaAF916E'
            : tokenA.chainId == 24116
              ? '0x3Be077BBCaF5a518C6E12E5bCa6fdF8d7A36dc27'
              : tokenA.chainId == 6278
                ? '0xc844820201334B8bbfc42aCA8e0f79C6BaAF916E'
                : tokenA.chainId == 56
                  ? '0x20522019a3c2F35537561E75C519F19bd5Ae0d4A'
                  : FACTORY_ADDRESS[tokenA.chainId],
      tokenA,
      tokenB,
    }),
    18,
    'STEAMXLP',
    'Steamx LP Token'
  )
}

const computeOracleData = (collateral: Currency, asset: Currency) => {
  const oracleData = ''

  // @ts-ignore TYPE NEEDS FIXING
  const mapping = CHAINLINK_PRICE_FEED_MAP[asset.chainId]

  for (const address in mapping) {
    mapping[address].address = address
  }

  let multiply = AddressZero
  let divide = AddressZero

  const multiplyMatches: any = Object.values(mapping).filter(
    (m: any) => m.from === asset.wrapped.address && m.to === collateral.wrapped.address
  )

  let decimals = 0

  if (multiplyMatches.length) {
    const match = multiplyMatches[0]
    multiply = match.address!
    decimals = 18 + match.decimals - match.toDecimals + match.fromDecimals
  } else {
    const divideMatches: any = Object.values(mapping).filter(
      (m: any) => m.from === collateral.wrapped.address && m.to === asset.wrapped.address
    )
    if (divideMatches.length) {
      const match = divideMatches[0]
      divide = match.address!
      decimals = 36 - match.decimals - match.toDecimals + match.fromDecimals
    } else {
      const mapFrom = Object.values(mapping).filter((m: any) => m.from === asset.wrapped.address)
      const mapTo = Object.values(mapping).filter((m: any) => m.from === collateral.wrapped.address)
      const match: any = mapFrom
        .map((mfrom: any) => ({
          mfrom: mfrom,
          mto: mapTo.filter((mto: any) => mfrom.to === mto.to),
        }))
        .filter((path) => path.mto.length)
      if (match.length) {
        multiply = match[0].mfrom.address!
        divide = match[0].mto[0].address!
        decimals = 18 + match[0].mfrom.decimals - match[0].mto[0].decimals - collateral.decimals + asset.decimals
      } else {
        return ''
      }
    }
  }

  return defaultAbiCoder.encode(['address', 'address', 'uint256'], [multiply, divide, e10(decimals)])
}

export const computeKashiPairAddress = ({
  collateral,
  asset,
  oracle,
  oracleData,
}: {
  collateral: Token
  asset: Token
  oracle: string
  oracleData: string
}): string => {
  return getCreate2Address(
    BENTOBOX_ADDRESS[collateral.chainId],
    keccak256(
      ['bytes'],
      [
        defaultAbiCoder.encode(
          ['address', 'address', 'address', 'bytes'],
          [collateral.address, asset.address, oracle, oracleData]
        ),
      ]
    ),
    keccak256(
      ['bytes'],
      [
        '0x3d602d80600a3d3981f3363d3d373d3d3d363d73' +
        KASHI_ADDRESS[collateral.chainId].substring(2) +
        '5af43d82803e903d91602b57fd5bf3',
      ]
    )
  )
}

/**
 * Given two tokens return the liquidity token that represents its liquidity shares
 * @param tokenA one of the two tokens
 * @param tokenB the other token
 */
export function toKashiLiquidityToken([collateral, asset]: [Token, Token]): Token {
  if (collateral.chainId !== asset.chainId) throw new Error('Not matching chain IDs')
  if (collateral.equals(asset)) throw new Error('Tokens cannot be equal')
  if (!BENTOBOX_ADDRESS[collateral.chainId]) throw new Error('No BentoBox factory address on this chain')
  if (!KASHI_ADDRESS[collateral.chainId]) throw new Error('No Kashi address on this chain')
  // console.log({
  //   collateral,
  //   asset,
  //   oracle: CHAINLINK_ORACLE_ADDRESS[collateral.chainId],
  //   oracleData: computeOracleData(collateral, asset),
  // })
  const oracleData = computeOracleData(collateral, asset)
  // @ts-ignore TYPE NEEDS FIXING
  if (!oracleData) return
  return new Token(
    collateral.chainId,
    computeKashiPairAddress({
      collateral,
      asset,
      oracle: CHAINLINK_ORACLE_ADDRESS[collateral.chainId],
      oracleData: computeOracleData(collateral, asset),
    }),
    18,
    'KM',
    'Kashi Medium Risk'
  )
}

/**
 * Returns all the pairs of tokens that are tracked by the user for the current chain ID.
 */
export function useTrackedTokenPairs(): [Token, Token][] {
  const { chainId } = useActiveWeb3React()
  const tokens = useAllTokens()

  // pinned pairs
  const pinnedPairs = useMemo(() => (chainId ? PINNED_PAIRS[chainId] ?? [] : []), [chainId])
  // pairs for every token against every base
  const generatedPairs: [Token, Token][] = useMemo(
    () =>
      chainId
        ? Object.keys(tokens).flatMap((tokenAddress) => {
          const token = tokens[tokenAddress]
          // for each token on the current chain,
          return (
            // loop though all bases on the current chain
            (BASES_TO_TRACK_LIQUIDITY_FOR[chainId] ?? [])
              // to construct pairs of the given token with each base
              .map((base) => {
                if (base.address === token.address) {
                  return null
                } else {
                  return [base, token]
                }
              })
              .filter((p): p is [Token, Token] => p !== null)
          )
        })
        : [],
    [tokens, chainId]
  )

  // pairs saved by users
  const savedSerializedPairs = useAppSelector(({ user: { pairs } }) => pairs)

  const userPairs: [Token, Token][] = useMemo(() => {
    if (!chainId || !savedSerializedPairs) return []
    const forChain = savedSerializedPairs[chainId]
    if (!forChain) return []

    return Object.keys(forChain).map((pairId) => {
      return [deserializeToken(forChain[pairId].token0), deserializeToken(forChain[pairId].token1)]
    })
  }, [savedSerializedPairs, chainId])

  const combinedList = useMemo(
    () => userPairs.concat(generatedPairs).concat(pinnedPairs),
    [generatedPairs, pinnedPairs, userPairs]
  )

  return useMemo(() => {
    // dedupes pairs of tokens in the combined list
    const keyed = combinedList.reduce<{ [key: string]: [Token, Token] }>((memo, [tokenA, tokenB]) => {
      const sorted = tokenA.sortsBefore(tokenB)
      const key = sorted ? `${tokenA.address}:${tokenB.address}` : `${tokenB.address}:${tokenA.address}`
      if (memo[key]) return memo
      memo[key] = sorted ? [tokenA, tokenB] : [tokenB, tokenA]
      return memo
    }, {})

    return Object.keys(keyed).map((key) => keyed[key])
  }, [combinedList])
}

/**
 * Returns a boolean indicating if the user has enabled SushiGuard protection.
 */
export function useUserSushiGuard(): [boolean, (newUseSushiGuard: boolean) => void] {
  const dispatch = useAppDispatch()

  // @ts-ignore TYPE NEEDS FIXING
  const useSushiGuard = useSelector<AppState, AppState['user']['useSushiGuard']>(
    (state) => state.user.userUseSushiGuard
  )

  const setUseSushiGuard = useCallback(
    (newUseSushiGuard: boolean) => dispatch(updateUserUseSushiGuard({ userUseSushiGuard: newUseSushiGuard })),
    [dispatch]
  )

  return [useSushiGuard, setUseSushiGuard]
}
