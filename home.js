import React,{Component} from 'react';
import Login from './components/login'

class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
      <h1>Hospital Care Management</h1>
      <Login/>
      </React.Fragment>
    );
  }
}
export default Home;
