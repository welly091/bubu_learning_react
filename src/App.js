import {Component} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render(){
     return (
      <>
        <Header/>

        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Main/>}/>
        </Routes>

        <div>I'm a footer</div>
      </>
    );
  }
}

export default App;
