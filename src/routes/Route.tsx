/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';

import Container from '../components/Container';
import Header from '../components/Header';

export default function RouteWrapper({ component: Component, configs, ...rest }: any) {
  const { logged } = useSelector((state: RootStateOrAny) => state.auth);

  if (logged) {
    return (
      <>
        <Header />
        <Container>
          <Route render={(props) => <Component {...props} configs={configs} />} {...rest} />
        </Container>
      </>
    );
  }

  return <Route render={(props) => <Component {...props} configs={configs} />} {...rest} />;
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
