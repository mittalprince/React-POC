import React,{Component} from 'react';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
 state = {  }
 render() {
   return (
   <Router>
       <Header/>
       <div className="row">
           <Routes />
       </div>
   </Router>
   );
 }
}

export default App;