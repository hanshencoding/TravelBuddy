import { RouterProvider } from 'react-router';
import router from './assets/routes/route.jsx';

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App
