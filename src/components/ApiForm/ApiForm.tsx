import React, { FC, useRef } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styles from './ApiForm.module.sass';

import { AllProps } from '../../App';
interface Props extends AllProps {
  onSetApiKey: (apikey: string) => void;
}

const ApiForm: FC<Props> = ({ lang, onSetApiKey }): JSX.Element => {
  const apiInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const apiKey = apiInputRef.current.value;
    onSetApiKey(apiKey);
    apiInputRef.current.value = '';
  };

  return (
    <form className={styles.apiform} onSubmit={submitFormHandler}>
      <Input
        ref={apiInputRef}
        style={styles.input}
        label={lang === 'en' ? 'Api Key' : 'Api klíč'}
        input={{
          placeholder: `${
            lang === 'en' ? 'Insert your Api Key' : 'Vložte svůj Api klíč'
          }`,
          type: 'text',
          id: 'apiKey',
        }}
      />
      <Button type='submit' style={styles.button}>
        {lang === 'en' ? 'Submit' : 'Použít'}
      </Button>
    </form>
  );
};

export default ApiForm;
