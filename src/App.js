import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import './sass/main.scss';

import Auth from './components/signup/Auth';
import setupStore from './store/config';
import Todos from './components/Todos';


const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Auth />} />
            <Route path='/' element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
