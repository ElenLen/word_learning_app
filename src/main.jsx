import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/WordList/ErrorBoundary';
import { WordsProvider } from './components/WordList/WordsContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <WordsProvider>
          <App />
        </WordsProvider>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)
