import styled from 'styled-components';
import { darken } from 'polished'

const Nav = styled.ul`
  font-size: 14px;
  padding: 0;
  list-style: none;
  border-top: ${p => {
    return  p.dark ? `1px solid #4c638a` : `1px solid ${p.theme.colors.ui.grey[7]}`
  }};
  overflow-y: scroll;

  .Nav__Link {
    display: block;
    padding: ${p => p.dark ? `9px 24px 7px` : `18px 24px 16px`};
    border-bottom: ${p => p.dark ? null : `1px solid ${p.theme.colors.ui.grey[7]}`};
    color: ${p => p.dark ? '#FFF' : p.theme.colors.brand.primary.navy};
    text-decoration: none;

    &:hover,
    &.active {
      color: ${p => p.theme.colors.brand.primary.lightBlue};
    }

    &.active {
      font-weight: bold;
      background: ${p => {
        return  p.dark ? p.theme.colors.ui.navy[1] : '#FFF'
      }};
    }
  }
`

export default Nav;
