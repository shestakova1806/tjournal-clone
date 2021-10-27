import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import styles from '../AuthDialog.module.scss';
import { FormField } from '../../FormField';

interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onOpenRegister,
  onOpenLogin,
}) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" type="password" />
        <div className="d-flex align-center justify-between">
          <Button
            disabled={!form.formState.isValid}
            onClick={onOpenRegister}
            type="submit"
            color="primary"
            variant="contained"
          >
            Зарегистрироваться
          </Button>
          <Button color="primary" variant="text" onClick={onOpenLogin}>
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
