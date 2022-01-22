import React, { useRef } from 'react';
// import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styles from './ApiForm.module.sass';

interface Props {
  lang: string;
  onSetApiKey: (apikey: string) => void;
}

const ApiForm = ({ lang, onSetApiKey }: Props) => {
  const apiInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const apiKey = apiInputRef.current.value;
    onSetApiKey(apiKey);
    apiInputRef.current.value = '';
  };

  return (
    <form className={styles.apiform} onSubmit={submitFormHandler}>
      <div className={styles.input}>
        <label htmlFor='apiKey'>{lang === 'en' ? 'Api Key' : 'Api klíč'}</label>
        <input
          ref={apiInputRef}
          placeholder={
            lang === 'en' ? 'Insert your Api Key' : 'Vložte svůj Api klíč'
          }
          // label={label}
          type='text'
          id='apiKey'
        />
      </div>
      <Button type='submit' style={styles.button}>
        {lang === 'en' ? 'Submit' : 'Použít'}
      </Button>
    </form>
  );
};

export default ApiForm;
