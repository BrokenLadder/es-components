import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const StripedContainerWrapper = styled.div`
  > * {
    display: block;
    padding: 20px;

    &:nth-child(even) {
      background-color: ${props => props.evenColor};
    }

    &:nth-child(odd) {
      background-color: ${props => props.oddColor};
    }
  }
`;

function StripedContainer(props) {
  const { theme } = props;

  return (
    <StripedContainerWrapper
      oddColor={theme.colors.gray2}
      evenColor={theme.colors.gray4}
    >
      {React.Children.map(props.children, child => React.cloneElement(child))}
    </StripedContainerWrapper>
  );
}

StripedContainer.propTypes = {
  /**
   * Theme object used by the ThemeProvider,
   * automatically passed by any parent component using a ThemeProvider
   */
  theme: PropTypes.object.isRequired,
  children: PropTypes.node
};

StripedContainer.defaultProps = {
  children: undefined
};

export default withTheme(StripedContainer);
