import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      className="mb-20"
      size="small"
      label={label}
      name={name}
      type={type}
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      variant="outlined"
      fullWidth
    />
  );
};
