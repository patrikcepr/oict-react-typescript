import React, { FC } from 'react';
import ApiForm from '../ApiForm/ApiForm';
import NavLang from './NavLang';

import styles from './Nav.module.sass';

import { AllProps } from '../../App';

interface Props extends AllProps {
  onChooseLang: (lang: string) => void;
  onSetApiKey: (apikey: string) => void;
}

const Nav: FC<Props> = ({ lang, onChooseLang, onSetApiKey }): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ApiForm lang={lang} onSetApiKey={onSetApiKey} />
      <NavLang lang={lang} onChooseLang={onChooseLang} />
    </nav>
  );
};

export default Nav;
