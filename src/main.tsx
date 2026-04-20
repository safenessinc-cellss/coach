import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import SchedulingPage from './pages/SchedulingPage.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import './index.css';
import './i18n'; // 👈 ESTA LÍNEA ES LA QUE FALTA

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agendar" element={<SchedulingPage />} />
      </Routes>
      <ChatWidget />
    </BrowserRouter>
  </StrictMode>
);

