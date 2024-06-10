import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import Store from './redux/Store.tsx'
import { PersistGate } from 'redux-persist/es/integration/react'

const persistor = persistStore(Store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
