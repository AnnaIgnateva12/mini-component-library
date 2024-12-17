import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
 position: relative;
 border-bottom: 1px solid ${COLORS.black};
 overflow: hidden;
 width: fit-content;
 color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`
const StyledInput = styled.input`
  position: relative;
  bottom: 6px;
  margin-left: 8px;
  border: none;
  outline: none;
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  width: var(--width);
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`
const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 24
  },
  large: {
    fontSize: 18,
    iconSize: 36
  }
}
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  return (
      <Wrapper style={{'--width': `${width}px`, '--fontSize': `${styles.fontSize}px`}}>
        <label htmlFor={label}>
          <Icon id={icon} display='inline' size={styles.iconSize}/>      
          <StyledInput width={width} placeholder={placeholder} id={label}/>
        </label>
      </Wrapper>
    
)};

export default IconInput;
