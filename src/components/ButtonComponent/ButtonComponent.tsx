import React, { ChangeEvent, FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface ButtonComponentProps {
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: 'submit' | 'reset' | 'button';
  icon?: ReactNode;
  text: string;
  loading?: boolean | { delay: number };
  shape?: 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  type?: 'primary' | 'ghost' | 'dash' | 'link' | 'default';
  block?: boolean;
  danger?: boolean;
  onClick?: (event?: ChangeEvent<HTMLButtonElement>) => void;
}

const ButtonComponent: FC<ButtonComponentProps> = ({ icon, href, text }) => {

  const _renderLink = (href: string) => {
    return (
      <Link to={href}>
        <span>{text}</span>
        {icon}
      </Link>
    );
  };

  const _renderButton = () => {
    return (
      <button>
        {text}
        {icon}
      </button>
    );
  };

  const _renderSwitch = () => {
    if (href) {
      return _renderLink(href);
    }
    return _renderButton();


  };

  return (
    <>
      {_renderSwitch}
    </>
  );
};

export default ButtonComponent;
