import { FC } from 'react';

import styles from './AuthForm.module.scss';

type AuthFormProps = {
  children: React.ReactNode;
};

const AuthForm: FC<AuthFormProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default AuthForm;
