import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { PlanetProvider } from './hooks/planets';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PlanetProvider>
            <Home />
            <GlobalStyle />
        </PlanetProvider>
    </React.StrictMode>,
);
