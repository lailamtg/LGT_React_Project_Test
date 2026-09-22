import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './Theme/MainTheme.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
