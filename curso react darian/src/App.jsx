
import { AuthContextProvider } from './context/AuthContext'
import AppRouter from './router/AppRouter'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <AuthContextProvider>
      <CartProvider >
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  )
}
export default App



