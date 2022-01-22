import React from 'react';

import styles from './Footer.module.sass';

interface Props {
  apikey: string;
}

const Footer = ({ apikey }: Props) => {
  return (
    <footer className={styles.footer}>
      <h4>
        {`DataSource: 
        ${
          apikey.length > 0
            ? 'https://api.golemio.cz/v2/'
            : 'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/'
        }`}
      </h4>
    </footer>
  );
};

export default Footer;
