import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/Authcontext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { ProductProvider } from './context/ProductsContext.jsx'
import { CartProvider } from './context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
    <AppRoutes/>
    </CartProvider>
    </ProductProvider>
    </AuthProvider>
)
