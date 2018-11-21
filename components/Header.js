import styled from 'styled-components';

const Header = styled.div`
  background: ${p => p.theme.colors.brand.primary.navy};

  .Header__Fixed {
    width: 256px;
    height: 100vh;
    position: fixed;
  }
`

export default Header;
