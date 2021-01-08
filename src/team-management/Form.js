import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
        this.data = this.props.characters
    }

    handleChange = (event)=>{
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    }

    onFormSubmit = (event)=>{
        console.log(this.props);
        if(!this.state.name || !this.state.job){
            return;
        }

        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, job} = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange}
                    placeholder="Enter Employee Name" />

                <label htmlFor="job">Job</label>
                <input type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} 
                    placeholder="Enter his job position"/>

                <button disabled={!this.state.name || !this.state.job} type="submit">Submit</button>
            </form>
        )
    };
}

export default Form;