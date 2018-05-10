import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTrainersQuery,addTrainerMutation } from '../queries/queries';

class AddTrainer extends Component {
  constructor(props){
    super(props);
    this.state = { name: '', age:''};
  }


  onsubmitForm(e){
    e.preventDefault();
    // alert("name is" + this.state.name +
    //         " age is"+ this.state.age)
    this.props.addTrainerMutation({
      variables: {
        name: this.state.name,
        age: this.state.age
      }
    })
  }

  render(){
    return(
      <form id="add-trainer" onSubmit={this.onsubmitForm.bind(this)}>
        <div className="field">
          <label>Trainer Name:</label>
          <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
        </div>
        <div className="field">
          <label>Age:</label>
          <input type="text" onChange={(e) => this.setState({age: e.target.value})}/>
        </div>
        <button id="add-trainer-button">Add</button>
        
      </form>
    );
  }

}

export default graphql(addTrainerMutation,{name: "addTrainerMutation"})(AddTrainer);