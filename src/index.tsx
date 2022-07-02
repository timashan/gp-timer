import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { TimerContextProvider } from './store/TimerContext';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <TimerContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TimerContextProvider>
);
