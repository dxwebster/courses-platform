/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function RouteWrapper({ component: Component, configs, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) => {
        <Component {...props} configs={configs} />;
      }}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  location: PropTypes.objectOf(PropTypes.any),
  configs: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  location: {},
  exact: false,
  path: null,
};
