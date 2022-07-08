import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/store/AuthContext';
import { AuthCredentialsProvider } from './components/store/AuthCredentials';
import './index.css';
import App from './App';

ReactDOM.render(
<AuthContextProvider>
<AuthCredentialsProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</AuthCredentialsProvider>
  </AuthContextProvider>
,
 document.getElementById('root'));
