import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Components/router/Router'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
