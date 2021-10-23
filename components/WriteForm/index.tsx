import React from 'react';
import dynamic from 'next/dynamic';
import { Button, Input } from '@material-ui/core';
import { TextsmsOutlined as MessageIcon } from '@material-ui/icons';
import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), {
  ssr: false,
});

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
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        <MessageIcon className="mr-10" />
        Опубликовать
      </Button>
    </div>
  );
};
