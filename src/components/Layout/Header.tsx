import React from 'react';

import styles from './Header.module.sass';

interface Props {
  lang: string;
}

const Header = ({ lang }: Props) => {
  return (
    <header className={styles.header}>
      <h1>
        {lang === 'en'
          ? 'Medical Institutions List'
          : 'Seznam lékařských zařízení'}
      </h1>
    </header>
  );
};

export default Header;
