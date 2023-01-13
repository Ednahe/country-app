import './App.css';
import Countries from './components/Countries';
import Details from './components/Details';
import Error from './components/Error';
import ThemeContextProvider from './context/ThemeContext';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className='app'>
      <ThemeContextProvider>
        <Routes >
          <Route path='/' element={<Countries />}/>
          <Route path='/details/:countryName' element={<Details />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
