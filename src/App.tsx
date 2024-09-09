import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes';
import { GlobalStles } from './styles';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStles />
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
