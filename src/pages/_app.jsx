import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import {store} from "../redux/store";
import '../styles/index.scss';
import {HubspotProvider} from 'next-hubspot';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


function MyApp({ Component, pageProps }) {

  return (
    <>
        <HubspotProvider>
            <Provider store={store}>
                <Component {...pageProps} />
                <ToastContainer />
            </Provider>
        </HubspotProvider>
    </>
  )
}

export default MyApp
