import './App.css';
import { ChakraProvider, } from '@chakra-ui/react'
import { HomePage, LoginPage } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }, {
    path: "/login",
    element: <LoginPage />,
  },
]);


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider >
  );
}

export default App;
