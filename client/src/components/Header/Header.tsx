import Link from 'next/link';
import cl from 'classnames';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getIsUserAuth } from '@/redux/selectors/signinSelectors';
import { logOut } from '@/redux/slices/userSlice';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const isUserAuth = useAppSelector(getIsUserAuth);

  const hanleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className={styles.root}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <span className={styles.field}>Cloud storage</span>
          </Link>
        </div>
        <div className={styles.auth}>
          {!isUserAuth && (
            <Link href='/signin'>
              <span className={styles.field}>Войти</span>
            </Link>
          )}
          {!isUserAuth && (
            <Link href='/signup'>
              <span className={styles.field}>Регистрация</span>
            </Link>
          )}
          {isUserAuth && (
            <span className={cl(styles.field, styles.field__exit)} onClick={hanleLogOut}>
              Выход
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
