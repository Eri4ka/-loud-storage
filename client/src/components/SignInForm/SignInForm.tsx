import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '@/views/Button';

import AuthForm from '../AuthForm';
import FormField from '../FormField';

import styles from './SignInForm.module.scss';

import { fetchSignIn } from '@/redux/actions/userActions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSignInLoading, getIsUserAuth } from '@/redux/selectors/signinSelectors';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(getSignInLoading);
  const isUserAuth = useAppSelector(getIsUserAuth);

  const isLoading = loadingStatus === 'loading';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchSignIn({ email, password }));
  };

  useEffect(() => {
    if (isUserAuth) {
      router.push('/');
    }
  }, [isUserAuth, router]);

  return (
    <AuthForm>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.form__heaading}>Вход в аккаунт</h1>
        <FormField name='email' label='E-mail' type='email' setValue={setEmail} />
        <FormField name='password' label='Password' type='password' setValue={setPassword} />
        <Button type='submit' isLoading={isLoading}>
          Продолжить
        </Button>
      </form>
    </AuthForm>
  );
};

export default SignInForm;
