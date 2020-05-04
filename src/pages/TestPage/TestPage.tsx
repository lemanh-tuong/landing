
import { useMount } from 'hooks/useMount';
import { logoImg, navItems, statusRequestNav } from 'pages/SettingsPage/selectors';
import thunkGetDataNav from 'pages/SettingsPage/thunks/thunksNav/thunkGetDataNav/thunkGetDataNav';
import React from 'react';
import { useSelector } from 'react-redux';

const TestPage = () => {

  const getData = thunkGetDataNav();
  const status = useSelector(statusRequestNav);
  const data = useSelector(navItems);
  const logo = useSelector(logoImg);

  useMount(() => {
    getData()
  })

  return (
    <>
      <div>asdasd</div>
    </>
  )
}


export default TestPage;
