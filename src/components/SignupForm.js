import React,{Component} from 'react';
import {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewEmp} from '../actions/allaction';

class SignupForm extends Component {
   constructor(props) {
   super(props);
   this.state = {
       firstname: '',
       lastname: '',
       email: '',
       mobile: '',
       city: ''
   };

   // This binding is necessary to make `this` work in the callback
   this.handleSubmit = this.handleSubmit.bind(this);
   }
handleSubmit(){
   let formdata = {
       firstname: this.state.firstname,
       lastname: this.state.lastname,
       email: this.state.email,
       mobile: this.state.mobile,
       city: this.state.city
   };
   this.props.addNewEmp(formdata);
   console.log("submitted",formdata);
   this.setState({
       firstname: '',
       lastname: '',
       email: '',
       mobile: '',
       city: ''
   });
}
   render() {
       return (
           <div className="col-md-4 offset-md-4">
               <Form>
                   <h2 style={{"textAlign":"center", "marginTop":"20px"}}>Enter Employee Details</h2>
                   <hr/>
                   <FormGroup>
                       <FormLabel>Firstname</FormLabel>
                       <FormControl
                           type="text"
                           name="firstname"
                           placeholder="Firstname"
                           onChange={e => {
                               this.setState({[e.target.name]:e.target.value});
                           }}
                           value = {this.state.firstname}
                       />
                   </FormGroup>
              
                   <FormGroup>
                       <FormLabel>Lastname</FormLabel>
                       <FormControl
                           type="text"
                           name="lastname"
                           placeholder="Lastname"
                           onChange={e => {
                               this.setState({[e.target.name]:e.target.value});
                           }}
                           value = {this.state.lastname}
                       />
                   </FormGroup>

                   <FormGroup>
                       <FormLabel>Email</FormLabel>
                       <FormControl
                           type="text"
                           name="email"
                           placeholder="Email"
                           onChange={e => {
                               this.setState({[e.target.name]:e.target.value});
                           }}
                           value = {this.state.email}
                       />
                   </FormGroup>

                   <FormGroup>
                       <FormLabel>Mobile</FormLabel>
                       <FormControl
                           type="text"
                           name="mobile"
                           placeholder="Mobile"
                           onChange={e => {
                               this.setState({[e.target.name]:e.target.value});
                           }}
                           value = {this.state.mobile}
                       />
                   </FormGroup>

                   <FormGroup>
                       <FormLabel>City</FormLabel>
                       <FormControl
                           type="text"
                           name="city"
                           placeholder="City/Village"
                           onChange={e => {
                               this.setState({[e.target.name]:e.target.value});
                           }}
                           value = {this.state.city}
                   />
                   </FormGroup>
                   <Button onClick={this.handleSubmit}>Submit</Button>
               </Form>
           </div>
        );
   }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addNewEmp},dispatch)
}
export default connect (null, mapDispatchToProps)(SignupForm)
