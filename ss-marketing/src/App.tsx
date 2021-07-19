import Header from "./components/Header/Header";
import {GlobalStyle} from "./Global.styles";
import Main from './components/Home/Main'
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <GlobalStyle/>
        <Header />
        <Main/>
        <Footer/>
    </>
  );
}

export default App;
