import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from '../redux/store';
import '../styles/index.scss';
import { HubspotProvider } from 'next-hubspot';
import ReactQueryProvider from '../components/ReactQueryProvider';
import FirstVisitModal from '../components/common/modals/FirstVisitModal';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReactQueryProvider>
        <HubspotProvider>
          <Provider store={store}>
            <Component {...pageProps} />
            <FirstVisitModal />
            <ToastContainer />
          </Provider>
        </HubspotProvider>
      </ReactQueryProvider>
    </>
  );
}

export default MyApp;
