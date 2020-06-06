import PopUp from 'components/PopUp/PopUp';
import React from 'react';
import FormEditLogo from './FormEditLogo/FormEditLogo';
import FormEditNavLink from './FormEditNavLink/FormEditNavLink';

const FormNav = () => {
  return (
    <div className="FormNav">
      <PopUp id="form-nav" type='antd' title={<h3>Form Nav</h3>}>
        <FormEditLogo />
        <FormEditNavLink />
      </PopUp>
    </div>
  );
};

export default FormNav;
