import React from 'react';
import Place from './Place';

import styles from './Places.module.sass';

import { AllProps } from '../../App';

import { IResponseData } from '../../App';

interface Props extends AllProps {
  data: IResponseData[];
  onShowModal: (index: number) => void;
}

const Places = ({ data, lang, onShowModal }: Props) => {
  return (
    <div className={styles.places}>
      {data.map((place, index: number) => {
        return (
          <Place
            key={place.properties.id}
            index={index}
            name={place.properties.name}
            addr={place.properties.address.street_address}
            lang={lang}
            onShowModal={onShowModal}
          />
        );
      })}
    </div>
  );
};

export default Places;
