import React from 'react';

import styles from './Header.module.sass';

import { AllProps } from '../../App';
interface Props extends AllProps {
  district: string;
}

const Header = ({ lang, district }: Props) => {
  return (
    <header className={styles.header}>
      <h1>
        {lang === 'en'
          ? 'Medical Institutions List '
          : 'Seznam lékařských zařízení '}
        {district.toUpperCase()}
      </h1>
    </header>
  );
};

export default Header;
