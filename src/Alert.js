import PropTypes from 'prop-types'
import styled, {css} from 'styled-components';
import { darken } from 'polished'

const AlertColor = p => css`
  color: ${p => {
    const { ui } = p.theme.colors;
    return (p.success && ui.grey[2])
    || (p.warning && ui.orange[2])
    || (p.danger && ui.red[2])
    || ui.grey[1];
  }};
`

const AlertStyles = p => css`
  position: relative;
  padding: ${p => `${p.theme.space[5]}px`};
  margin-bottom: 16px;
  border-radius: 4px;
  ${AlertColor}
  background-color: ${p => {
    const { state } = p.theme.colors;
    return (p.success && state.success)
    || (p.warning && state.warning)
    || (p.danger && state.danger)
    || state.info
  }};

  a,
  strong {
    ${AlertColor}
  }
  a {
    &:hover {
      color: ${p => {
        const { brand, ui } = p.theme.colors;
        return (p.success && darken(0.1, ui.grey[2]))
        || (p.warning &&  darken(0.1, ui.orange[2]))
        || (p.danger && darken(0.1, ui.red[2]))
        || ui.grey[0];
      }};
    }
  }
`

const Alert = styled.div`
  ${AlertStyles}
`;

Alert.defaultProps = {
  type: 'info'
};

Alert.propTypes = {
  type: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'danger'
  ])
};

export {AlertStyles};
export default Alert;
