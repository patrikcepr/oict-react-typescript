import React from 'react';

import styles from './NavLang.module.sass';

import { AllProps } from '../../App';

interface Props extends AllProps {
  onChooseLang: (lang: string) => void;
}

const NavLang = ({ onChooseLang, lang }: Props) => {
  return (
    <div className={styles.navlang}>
      <ul>
        <li
          className={lang === 'cs' ? styles.active : ''}
          onClick={onChooseLang.bind(null, 'cs')}
        >
          CZ
        </li>
        <li>/</li>
        <li
          className={lang === 'en' ? styles.active : ''}
          onClick={onChooseLang.bind(null, 'en')}
        >
          ENG
        </li>
      </ul>
    </div>
  );
};

export default NavLang;
