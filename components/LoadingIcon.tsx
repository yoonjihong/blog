import * as React from 'react';
import cs from 'classnames';
import styles from './styles.module.css';
import styled from 'styled-components';

export const LoadingIcon = props => {
  const { className, ...rest } = props;
  return <StyledWrapper>로딩중</StyledWrapper>;
};

const StyledWrapper = styled.div``;
