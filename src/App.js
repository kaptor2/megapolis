import React from 'react';
import { Provider } from 'react-redux';

import { TestComponent } from 'components';
import { store } from 'redux/store';

export const App = () => {

  return (
    <Provider store = {store} >
      <TestComponent />
    </Provider>
  );
}