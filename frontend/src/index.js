import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss'
import App from './components/App';
import { AppContextProvider } from './contexts/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
      <App/>
  </AppContextProvider>
);

reportWebVitals();
