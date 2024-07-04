import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss'
import App from './components/App';
import { AppContextProvider } from './contexts/AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
      <App/>
      <ToastContainer/>
  </AppContextProvider>
);

reportWebVitals();
