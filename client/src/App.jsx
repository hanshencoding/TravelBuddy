import { RouterProvider } from 'react-router';
import router from './routes/route';
import './styles/style.css'
import './styles/navbar.css';


function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App
