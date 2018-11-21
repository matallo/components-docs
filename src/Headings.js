import styled, {css} from 'styled-components';

const HeadingStyles = (...args) => css`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.brand.primary.navy};
`;

const H1Styles = (...args) => css`
  ${HeadingStyles(...args)};
  font-size: 42px;
  line-height: 48px;
`

const H1 = styled.h1`
  ${H1Styles}
`

const H2Styles = (...args) => css`
  ${HeadingStyles(...args)};
  font-size: 28px;
  line-height: 32px;
`

const H2 = styled.h2`
  ${H2Styles}
`

const H3Styles = (...args) => css`
  ${HeadingStyles(...args)};
  font-size: 22px;
  line-height: 30px;
`

const H3 = styled.h3`
  ${H3Styles}
`

const H4Styles = (...args) => css`
  ${HeadingStyles(...args)};
  font-size: 18px;
  line-height: 24px;
`

const H4 = styled.h4`
  ${H4Styles}
`

const H5Styles = (...args) => css`
  ${HeadingStyles(...args)};
  font-size: 16px;
  line-height: 24px;
`

const H5 = styled.h5`
  ${H5Styles}
`

const H6Styles = (...args) => css`
  ${HeadingStyles(...args)};
  font-size: 14px;
  line-height: 24px;
  color: ${p => p.theme.colors.brand.primary.navy};
`

const H6 = styled.h6`
  ${H5Styles}
`

export {
  H1,
  H2Styles,
  H2,
  H3Styles,
  H3,
  H4Styles,
  H4,
  H5,
  H6
};
