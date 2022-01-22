import React, { FC } from 'react';

import styles from './PlaceDetails.module.sass';

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
  detail: IResponseData;
  lang: string;
  onHideModal: () => void;
}

const PlaceDetail: FC<Props> = ({ detail, lang, onHideModal }): JSX.Element => {
  const name = detail.properties.name;
  const address = detail.properties.address.address_formatted;
  const email = detail.properties.email[0];
  const tel = detail.properties.telephone[0];
  const type = detail.properties.type.description;
  const web = detail.properties.web[0];
  const openingHours = detail.properties.opening_hours;
  const schedule = openingHours.map((day) => {
    return (
      <div className={styles.day} key={day.day_of_week}>
        <div className={styles['day-name']}>{day.day_of_week}</div>
        <div className={styles['day-opens']}>{day.opens}</div>
        <div> - </div>
        <div className={styles['day-closes']}>{day.closes}</div>
      </div>
    );
  });

  return (
    <div className={styles['place-detail']}>
      <h2 className={styles.cancel} onClick={onHideModal}>
        +
      </h2>
      <h4>{type}</h4>
      <h2>{name}</h2>
      <p>{address}</p>
      <div className={styles.link}>
        <a href={`${web}`} target='_blank' rel='noreferrer'>
          {web}
        </a>
      </div>
      <div className={styles.link}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      {tel && (
        <div className={styles.link}>
          <a href={`tel:+420 ${tel}`}>+420 {tel}</a>
        </div>
      )}
      {schedule.length > 0 && (
        <div className={styles['opening-days-hours']}>
          <h4>{lang === 'en' ? 'Opening hours' : 'Otevírací doba'}</h4>
          {schedule}
        </div>
      )}
    </div>
  );
};

export default PlaceDetail;
