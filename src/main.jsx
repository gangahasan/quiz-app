import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthContext>
        <App />
      </AuthContext>
    </HashRouter>
  </StrictMode>
);
