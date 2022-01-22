import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import './App.sass';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Nav from './components/Layout/Nav';
import Loader from './components/UI/Loader/Loader';
import Places from './components/Places/Places';
import Modal from './components/UI/Modal/Modal';
import PlaceDetail from './components/Places/PlaceDetail';

const mockUrl: string =
  'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/medicalinstitutions/?latlng=&range=&districts=&group=&limit=&offset=&updatedSince=';

const productionUrl: string =
  'https://api.golemio.cz/v2/medicalinstitutions/?latlng=&range=&districts=praha-7&group=&limit=&offset=&updatedSince=';

const publicToken: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhY2thdGhvbkBnb2xlbWlvLmN6IiwiaWQiOjIsIm5hbWUiOiJIYWNrYXRob24iLCJzdXJuYW1lIjoiR29sZW1pbyIsImlhdCI6MTU4NDU0NDYzMSwiZXhwIjoxMTU4NDU0NDYzMSwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjVlNjU2NDQxLTA4OGUtNDYyYS1iMjUyLTFiNzI1OGU0ZGJkYSJ9.ypDAJirgEs8VBSauraFEoLTTtC6y_F8V1fheAHgzMos';

// const myToken: string =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJpay5jZXByQGdtYWlsLmNvbSIsImlkIjoxMDQ2LCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NDIzNTE2NzcsImV4cCI6MTE2NDIzNTE2NzcsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiJhMGQ3NWM2MS1mOTkxLTRkZWEtOGNlZi1hZjg0NGQyZjBhOWYifQ.tr4ZhXhIGVqGz9dzWoyGI-iRFCuvfON16nbhlwcyfiw';

function App() {
  const [lang, setLang] = useState('cs');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState({});
  const [apikey, setApikey] = useState('');

  // nastaveni jazyka
  const chooseLangHandler = (lang: string) => {
    setLang(lang);
  };

  // nastavaneí api klíče
  const setApikeyHandler = (apikey: string) => {
    setApikey(apikey);
  };

  // vyhodnocení api klíče a volba serveru
  let url: string;
  let token: string;

  if (apikey) {
    url = productionUrl;
    token = apikey;
  } else {
    url = mockUrl;
    token = publicToken;
  }

  // získání dat ze serveru
  const getDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
        },
      });
      const data = response.data.features;
      setData(() => data);
      // console.log(data);
    } catch (error: any) {
      console.error(error);
      setError(() => error.message);
    }
    setIsLoading(false);
  }, [token, url]);

  useEffect(() => {
    getDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apikey]);

  // logika modal elementu
  const hideModalHandler = () => {
    setShowModal(!showModal);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const showModalHandler = (index: number) => {
    setDetail(data[index]);
    setShowModal(!showModal);
    scrollToTop();
  };

  let content = <Loader />;

  if (!isLoading && data.length > 0) {
    content = <Places lang={lang} data={data} onShowModal={showModalHandler} />;
  }

  if (!isLoading && data.length === 0 && !error) {
    content = (
      <div className='error'>
        <span>{lang === 'en' ? 'No data received.' : 'Data nenalezena.'}</span>
      </div>
    );
  }

  if (error) {
    if (error === 'Request failed with status code 401') {
      content = (
        <div className='error'>
          <span>
            {lang === 'en'
              ? '401 - Unauthorized Access'
              : '401 - Neautorizovaný přístup'}
          </span>
        </div>
      );
    } else {
      content = (
        <div className='error'>
          <span>{error}</span>
        </div>
      );
    }
  }

  return (
    <div className='App'>
      <Header lang={lang} />
      <Nav
        lang={lang}
        onChooseLang={chooseLangHandler}
        onSetApiKey={setApikeyHandler}
      />
      <main>
        {content}
        {showModal && (
          <Modal lang={lang} onHideModal={hideModalHandler}>
            <PlaceDetail
              lang={lang}
              detail={detail}
              onHideModal={hideModalHandler}
            />
          </Modal>
        )}
      </main>
      <Footer apikey={apikey} />
    </div>
  );
}

export default App;
