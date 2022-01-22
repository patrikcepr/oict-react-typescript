import React from 'react';

import styles from './NavLang.module.sass';

interface Props {
  onChooseLang: (lang: string) => void;
}

const NavLang = ({ onChooseLang }: Props) => {
  return (
    <div className={styles.navlang}>
      <ul>
        <li onClick={onChooseLang.bind(null, 'cs')}>CZ</li>
        <li>/</li>
        <li onClick={onChooseLang.bind(null, 'en')}>ENG</li>
      </ul>
    </div>
  );
};

export default NavLang;
