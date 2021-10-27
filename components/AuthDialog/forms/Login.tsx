import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import styles from '../AuthDialog.module.scss';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" type="password" />
        <div className="d-flex align-center justify-between">
          <Button
            disabled={!form.formState.isValid}
            type="submit"
            color="primary"
            variant="contained"
          >
            Войти
          </Button>
          <Button color="primary" variant="text" onClick={onOpenRegister}>
            Регистрация
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
