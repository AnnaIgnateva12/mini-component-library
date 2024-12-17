import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const StyledSelect = styled.select`
  height: 43px;
  padding: 12px 16px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &:hover {
    color: ${COLORS.black}
  }
`

const SelectWrapper = styled.div`
  position: relative;
  padding: 12px 16px;
  width: max-content;
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  &:focus {
    outline: auto;
  }
  &:hover {
    color: ${COLORS.black}
  }
`
const DisplayedValue = styled.span`
  margin-right: 16px;
  position: relative;
  top: -7px;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <SelectWrapper>
        <StyledSelect value={value} onChange={onChange}>
          {children}
        </StyledSelect>
        <DisplayedValue>{displayedValue}</DisplayedValue>
        <Icon id='chevron-down' size={24} strokeWidth={2} display={'inline-block'}/>
      </SelectWrapper>    
  );
};

export default Select;
