import { FC } from 'react';
import cl from 'classnames';

import Loader from '../Loader';

import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <button className={cl(styles.wrapper, isLoading && styles.load)} {...props}>
      {isLoading && <Loader />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
