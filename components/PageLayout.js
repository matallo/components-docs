import styled from 'styled-components';

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 256px auto;
  min-height: 100vh;

  .PageLayout__Inner {
    display: grid;
    grid-template-columns: 256px auto;
    background: ${p => p.theme.colors.ui.grey[9]};
  }
  .PageLayout__Inner--nosidebar {
    grid-template-columns: auto;
  }
`

export default PageLayout;
