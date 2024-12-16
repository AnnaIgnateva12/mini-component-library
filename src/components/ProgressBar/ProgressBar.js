/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    "--barHeight": '24px',
    "--barPadding": '4px'
  },
  medium: {
    "--barHeight": '12px',
    "--barPadding": '0px'
  },
  small: {
    "--barHeight": '8px',
    "--barPadding": '0px'
  }
}

const Wrapper = styled.div`
  width: 370px;
  height: var(--barHeight);
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 inset ${COLORS.transparentGray15};
  overflow: hidden;
  padding: var(--barPadding);
`
const Progress = styled.div`
  height: 100%;
  width: ${props => `${props.value}%`};
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <Wrapper style={styles}><Progress value={value}/></Wrapper>;
};

export default ProgressBar;
