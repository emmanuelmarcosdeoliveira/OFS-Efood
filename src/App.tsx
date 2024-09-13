import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import MainRoutes from './Routes';
import { GlobalStles } from './styles';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStles />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
