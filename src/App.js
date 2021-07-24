import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();



function App() {
  
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>  
    </Provider>

      
      
    </>
  );
}

export default App;
