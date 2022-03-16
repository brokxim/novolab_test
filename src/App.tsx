import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import News from './components/News/News';
import {Provider} from 'react-redux';
import store from './redux/store';
import './Sass/App.scss';
import './Sass/responsive.scss';

function App() {
  return (
    // <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    // </Provider>  
  );
}

export default App;
