import { useMount } from 'hooks/useMount';
import thunkInitialize from 'pages/LoginPage/thunks/thunkInitialize';
import React from 'react';
import { useSelector } from 'react-redux';
import { statusInitialize } from 'selectors';
import RenderAfterInitializeApp from './RenderAfterInitializeApp/RenderAfterInitializeApp';
import RenderBeforeInitializeApp from './RenderBeforeInitializeApp/RenderBeforeInitializeApp';

const Routes = () => {
  const statusInitializeApp = useSelector(statusInitialize);

  // Dispatch
  const initializeApp = thunkInitialize();

  useMount(() => {
    initializeApp();
  });

  const _renderSwitch = () => {
    switch (statusInitializeApp) {
      case 'initializedFailure':
      case 'initializing':
        return <RenderBeforeInitializeApp />;
      case 'initialized':
        return <RenderAfterInitializeApp />
      default:
        return null;
    }
  }

  return _renderSwitch();

};

export default Routes;
