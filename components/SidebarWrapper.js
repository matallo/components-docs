import styled from 'styled-components';
import { darken } from 'polished'

const SidebarWrapper = styled.div`
  .Sidebar__Fixed {
    display: flex;
    flex-direction: column;
    border-right: ${p => `1px solid ${p.theme.colors.ui.grey[7]}`};
    width: 256px;
    height: 100vh;
    position: fixed;
  }
  .Sidebar__Header{
    padding: ${p => `20px ${p.theme.space[4]}px`};
  }
  .Sidebar__Inner {
    overflow-y: scroll;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`

export default SidebarWrapper;
