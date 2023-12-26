import styled from 'styled-components/macro'

export const ToggleWrapper = styled.button<{ width?: string }>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width ?? '100%'};
  padding: 1px;
  background: ${({ theme }) => theme.deprecated_bg1};
  border-radius: 8px;
  border: ${({ theme }) => '1px solid ' + theme.backgroundInteractive};
  cursor: pointer;
  outline: none;
`

export const ToggleElement = styled.span<{ isActive?: boolean; fontSize?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({ isActive }) => (isActive ? '#d28a1e' : '#FAFAFA')};
  color: ${({ isActive }) => (isActive ? 'black' : '#0c1d31')};
  font-size: ${({ fontSize }) => fontSize ?? '1rem'};
  font-weight: 500;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({ isActive }) => (isActive ? 'black' : '#d28a1e')};
  }
`
