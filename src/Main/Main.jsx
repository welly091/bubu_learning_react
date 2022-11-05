import {Component} from 'react';
import Beast from '../Beast/Beast';
import Data from '../data.json';

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      totalCount: 0
    }
  }

  totalCount = () =>{
    this.setState( {totalCount: this.state.totalCount + 1} )
  }

  render(){
     return (
    <div>
      <div>Total Count: {this.state.totalCount}</div>
      {
        Data.map( eachBeast => (
          <Beast key={eachBeast._id} item={eachBeast} totalCount={this.totalCount}/>
        ))
      }
    </div>
    );
  }
}

export default Main;