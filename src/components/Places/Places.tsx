import React from 'react';
import Place from './Place';

import styles from './Places.module.sass';

interface IProperties {
  address: {
    street_address: string;
    address_formatted: string;
  };
  email: string[];
  id: string;
  name: string;
  opening_hours: {
    closes: string;
    day_of_week: string;
    opens: string;
  }[];
  telephone: string[];
  type: {
    description: string;
  };
  web: string[];
}

interface IResponseData {
  [key: string]: IProperties;
}

interface Props {
  lang: string;
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
