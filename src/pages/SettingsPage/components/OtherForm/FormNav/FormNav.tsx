import React from 'react';
import FormEditButtonNav from './FormEditButtonNav/FormEditButtonNav';
import FormEditLogo from './FormEditLogo/FormEditLogo';
import FormEditNavLink from './FormEditNavLink/FormEditNavLink';

const FormNav = () => {
  return (
    <div className="FormNav" style={{ maxWidth: 500, width: '100%' }}>
      <FormEditLogo />
      <FormEditNavLink />
      <FormEditButtonNav />
    </div>
  );
};

export default FormNav;
