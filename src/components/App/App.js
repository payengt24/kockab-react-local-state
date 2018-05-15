import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: 'Pa Yeng', city: 'Brooklyn Center'};

    //makes this in handle change the same as the constructor
    //similar to cons self = this
    // this.handleChange = this.handleChange.bind(this);
  }


  //if we change to arrow than we don;t have to do binding above
  handleNameChange = (event) => {
    console.log('name, input was change');
    console.log('event.target', event.target);
    console.log('event.target', event.target.value);

    // this.state.user = event.target.value;

    this.setState({ user: event.target.value });

  }

  handleCityChange = (event) => {
    console.log('city input was change')
    console.log('event.target', event.target);
    console.log('event.target', event.target.value);
    this.setState({ city: event.target.value });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button was clicked!')
    console.log(this.state.user);
    console.log(this.state.city);


  }  

  render() {
    return (
      <div>

        <input onChange={this.handleNameChange} placeholder="User Name" />
        <input onChange={this.handleCityChange} placeholder="User City" />
        <button onClick={this.handleSubmit}>Submit</button>


        <p>{this.state.user} is from {this.state.city}</p>
      </div>


    );
  }
}

//in order to import we need to export on the file first
export default App;
