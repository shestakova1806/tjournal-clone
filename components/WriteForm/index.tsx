import React from 'react';
import { Input } from '@material-ui/core';
import styles from './WriteForm.module.scss';

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div style={{ background: '#fff' }}>
      <Input
        classes={{ root: styles.textField }}
        placeholder="Заголовок"
        defaultValue={title}
      />
    </div>
  );
};
