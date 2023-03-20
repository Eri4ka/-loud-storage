import { FC, useState } from 'react';

import Button from '@/views/Button';

import AuthForm from '../AuthForm';
import FormField from '../FormField';

import styles from './SignUpForm.module.scss';
import signupFetch from '@/api/signup';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupFetch(email, password);
  };

  return (
    <AuthForm>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.form__heaading}>Регистрация</h1>
        {/* <FormField name='name' label='Имя' type='text' />
        <FormField name='surname' label='Фамилия' type='text' /> */}
        <FormField name='email' label='E-mail' type='email' setValue={setEmail} />
        <FormField name='password' label='Password' type='password' setValue={setPassword} />
        <Button type='submit'>Продолжить</Button>
      </form>
    </AuthForm>
  );
};

export default SignUpForm;
