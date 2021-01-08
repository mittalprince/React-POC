import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component{
    state={
        characters: []
    };

    removeCharacter = (index)=>{
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, id)=>{
                return id !== index;
            })
        });
    }

    handleSubmit = character=>{
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

    componentDidUpdate(){
        localStorage.setItem('characters', JSON.stringify(this.state.characters));
    }

    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('characters'));
        if(data){
            this.setState({
                character: data
            });
        }

    }
    render(){
        const {characters} = this.state;
        return(
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} character={this.state.characters}/>

            </div>
        )
    }
}

export default App;

