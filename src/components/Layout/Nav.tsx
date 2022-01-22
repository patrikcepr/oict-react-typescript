import React from 'react';
import ApiForm from '../ApiForm/ApiForm';
import NavLang from './NavLang';

import styles from './Nav.module.sass';

interface Props {
  lang: string;
  onChooseLang: (lang: string) => void;
  onSetApiKey: (apikey: string) => void;
}

const Nav = ({ lang, onChooseLang, onSetApiKey }: Props) => {
  return (
    <nav className={styles.nav}>
      <ApiForm lang={lang} onSetApiKey={onSetApiKey} />
      <NavLang onChooseLang={onChooseLang} />
    </nav>
  );
};

export default Nav;
