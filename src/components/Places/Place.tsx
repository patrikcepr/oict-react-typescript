import React, { FC } from 'react';
import Button from '../UI/Button/Button';

import styles from './Place.module.sass';

import { AllProps } from '../../App';

interface Props extends AllProps {
  name: string;
  addr: string;
  index: number;
  onShowModal: (index: number) => void;
}

const Place: FC<Props> = ({
  name,
  addr,
  index,
  lang,
  onShowModal,
}): JSX.Element => {
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
