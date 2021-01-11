import React,{Component} from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import FormdataTable from './FormdataTable';
import SignupForm from './SignupForm';

class Routes extends Component {
   render() {
       return ( 
           <Switch>
               <Route path={'/'} exact component={SignupForm } ></Route>
               <Route path={'/viewlist'} exact component={FormdataTable}></Route>
           </Switch>
       );
   }
}

export default Routes;