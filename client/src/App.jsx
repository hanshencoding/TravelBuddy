import { RouterProvider } from 'react-router';
import router from './routes/route';
import { AuthProvider } from './hooks/useAuth';
import './styles/style.css'
import './styles/navbar.css';


function App() {
  return (
    <AuthProvider>
      <RouterProvider router = {router}>
      
      </RouterProvider>
    </AuthProvider>
  );
}

export default App
