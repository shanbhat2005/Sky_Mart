import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/Authcontext.jsx'
import AppRoutes from './routes/Approutes.jsx'
import { ProductProvider } from './context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ProductProvider>
    <AppRoutes/>
    </ProductProvider>
    </AuthProvider>
)
