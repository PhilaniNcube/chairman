import Navbar from '../components/Layout/Navbar';
import GlobalStyle from '../GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
