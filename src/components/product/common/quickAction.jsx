import styled from 'styled-components';
import React from 'react';

const StyledQuickActions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  display: none;
  z-index: 1;
`;

export const QuickAction = (props) => (
  <StyledQuickActions {...props} className="quick-action">
    {props.children}
  </StyledQuickActions>
);
