import { FC } from 'react';
import cl from 'classnames';

import Loader from '../Loader';

import styles from './Button.module.scss';

export enum ButtonType {
  simple = 'simple',
  primary = 'primary',
}

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  classame?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, isLoading, className, ...props }) => {
  return (
    <button
      className={cl(styles.wrapper, isLoading && styles.load, className && styles[className])}
      {...props}>
      {isLoading && <Loader />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
