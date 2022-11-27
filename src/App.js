import './App.css';
import { ChakraProvider, } from '@chakra-ui/react'
import { HomePage, LoginPage } from './pages';





function App() {
  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider >
  );
}

export default App;
