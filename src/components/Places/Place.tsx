import React from 'react';
import Button from '../UI/Button/Button';

import styles from './Place.module.sass';

interface Props {
  name: string;
  addr: string;
  index: number;
  lang: string;
  onShowModal: (index: number) => void;
}

const Place = ({ name, addr, index, lang, onShowModal }: Props) => {
  return (
    <div className={styles.place}>
      <h3>{name}</h3>
      <p>{addr}</p>
      <Button
        type='button'
        style={styles.button}
        onClick={onShowModal.bind(null, index)}
      >
        {lang === 'en' ? 'more info...' : 'více...'}
      </Button>
    </div>
  );
};

export default Place;
