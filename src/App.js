import {Component} from 'react';
import Beast from './Beast/Beast';
import Data from './data.json';

class App extends Component {
  render(){
     return (
    <div>
      {
        Data.map( eachBeast => (
          <Beast id={eachBeast._id} item={eachBeast}/>
        ))
      }
    </div>
    );
  }
}

export default App;
