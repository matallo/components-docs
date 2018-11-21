import PropTypes from 'prop-types'
import styled from 'styled-components';
import { darken } from 'polished'
import { space } from 'styled-system'

const Button = styled.button`
  ${space}

  transition: all .15s ease-in-out;
  border: ${p => {
    const { brand, state } = p.theme.colors;
    return (p.disabled && `1px solid ${state.disabled}`)
    || (p.success && `1px solid ${brand.success}`)
    || (p.info && `1px solid ${brand.info}`)
    || (p.warning && `1px solid ${brand.warning}`)
    || (p.danger && `1px solid ${brand.danger}`)
    || '#fff'
  }};
  border-radius: ${p => {
    const { radii } = p.theme;
    return (p.size === 'xs' && `${radii[1]}px`)
      || (p.size === 'sm' && `${radii[1]}px`)
      || `${radii[2]}px`;
  }};
  cursor: ${p => p.disabled ? 'not-allowed !important' : 'pointer'};
  display: inline-block;
  font-size: ${p => {
    const { fontSizes } = p.theme;
    return (p.size === 'xs' && `${fontSizes[0]}px`)
      || (p.size === 'sm' && `${fontSizes[1]}px`)
      || (p.size === 'lg' && `${fontSizes[3]}px`)
      || `${fontSizes[2]}px`;
  }};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => {
    return (p.size === 'xs' && '18px')
      || (p.size === 'lg' && '32px')
      || '24px';
  }};
  padding: ${p => {
    return (p.size === 'xs' && `2px 8px 0`)
      || (p.size === 'sm' && `4px 16px 2px`)
      || (p.size === 'lg' && `20px 24px 18px`)
      || `12px 24px 10px`;
  }};
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${p => {
    const { brand } = p.theme.colors;
    return (p.disabled && brand.disabled)
    || (p.outline && p.success && brand.success)
    || (p.outline && p.info && brand.info)
    || (p.outline && p.warning && brand.warning)
    || (p.outline && p.danger && brand.danger)
    || '#fff'
  }};
  background-color: ${p => {
    const { brand, state } = p.theme.colors;
    return (p.disabled && state.disabled)
    || (p.outline && '#fff')
    || (p.success && brand.success)
    || (p.info && brand.info)
    || (p.warning && brand.warning)
    || (p.danger && brand.danger)
  }};
  
  &:hover {
    border: ${p => {
      const { brand, state } = p.theme.colors;
      return (p.disabled && `1px solid ${state.disabled}`)
      || (p.outline && p.disabled && `1px solid ${brand.disabled}`)
      || (p.outline && p.success && `1px solid ${brand.success}`)
      || (p.outline && p.info && `1px solid ${brand.info}`)
      || (p.outline && p.warning && `1px solid ${brand.warning}`)
      || (p.outline && p.danger && `1px solid ${brand.danger}`)
      || (p.success && `1px solid ${darken(0.1, brand.success)}`)
      || (p.info && `1px solid ${darken(0.1, brand.info)}`)
      || (p.warning && `1px solid ${darken(0.1, brand.warning)}`)
      || (p.danger && `1px solid ${darken(0.1, brand.danger)}`)
      || (p.disabled && `1px solid ${darken(0.1, brand.disabled)}`)
      || '#fff'
    }};
    color: ${p => {
      const { brand } = p.theme.colors;
      return (p.disabled && brand.disabled)
      || '#fff'
    }};
    background-color: ${p => {
      const { brand, state } = p.theme.colors;
      return (p.disabled && state.disabled)
      || (p.outline && p.disabled && brand.disabled)
      || (p.outline && p.success && brand.success)
      || (p.outline && p.info && brand.info)
      || (p.outline && p.warning && brand.warning)
      || (p.outline && p.danger && brand.danger)
      || (p.success && darken(0.1, brand.success))
      || (p.info && darken(0.1, brand.info))
      || (p.warning && darken(0.1, brand.warning))
      || (p.danger && darken(0.1, brand.danger))
    }};
  }
`;

Button.defaultProps = {
  size: 'md'
};

Button.propTypes = {
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs'])
};

export default Button;
