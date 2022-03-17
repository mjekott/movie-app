import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
