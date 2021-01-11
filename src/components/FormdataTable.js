import React,{Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {delEmp} from '../actions/allaction';

class FormdataTable extends Component {
   state = {  }
    handleDelete(index){
        this.props.delEmp(index);
    }
    handleEdit(index){
        console.log("Edit:",index);
    }
   render() {
       console.log(this.props.empdata);
       return (
           <div className="col-md-10 offset-md-1">
               <h2 style={{"textAlign":"center", "marginTop":"20px", "marginBottom":"20px"}}>New Employee Details</h2>
               <table className="table table-hover">
                   <thead>
                       <tr>
                           <th scope="col">#</th>
                           <th scope="col">Fist Name</th>
                           <th scope="col">Last Name</th>
                           <th scope="col">Email</th>
                           <th scope="col">Mobile</th>
                           <th scope="col">City</th>
                           <th scope="col">Options</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                       this.props.empdata.map((emp, index) => {
                       return(
                           <tr key={index}>
                                   <td>{index+1}</td>
                                   <td>{emp.firstname}</td>
                                   <td>{emp.lastname}</td>
                                   <td>{emp.email}</td>
                                   <td>{emp.mobile}</td>
                                   <td>{emp.city}</td>
                                   <td>
                                       {/* <button
                                           type="button"
                                           onClick={()=>this.handleEdit(index)}
                                           className="btn btn-sm btn-primary">Edit
                                       </button>
                                       {" | "} */}
                                       <button
                                           type="button"
                                           onClick={()=>this.handleDelete(index)}
                                           className="btn btn-sm btn-danger">Delete
                                       </button>
                                   </td>
                           </tr>
                       )})
                       }
                   </tbody>
               </table>
           </div>
       );
   }
}
function mapStateToProps(state){
    console.log('stateeee', state);
    return {
        empdata : state
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({delEmp},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(FormdataTable);