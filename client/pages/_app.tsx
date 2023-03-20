import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';
import { fetchAuth } from '@/redux/actions/userActions';
import Layout from '@/components/Layout';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    store.dispatch(fetchAuth());
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
