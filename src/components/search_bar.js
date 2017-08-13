// OBJECTIVE : Render a class-based React component which functions as a youtube video search bar.
// {Component} is syntax sugar
import React, {Component} from 'react';

/*
// Functional component
const SearchBar = ()=>{
  return <input />;
};
*/

// Class-based component
class SearchBar extends Component {
  // State !!. A plain javascript object which is used to record and react to user events. Each class-based object has a state.

  // Before using state, we need to initialize it in the class' constructor

  // Constructor function
  constructor(props) {
    super(props); // Search Bar extends Component and `super` calls the parent class' constructor method with props.

    // STATE init
    this.state = {
      term: ''
    }; // State can only be set in the constructor like this. Everywhere else, we use this.setState() function.
  }

  render() {
    //return <input onChange={this.onInputChange} />;
    //return <input onChange={ event => console.log(event.target.value)} />;
    //return <input onChange={ event => this.setState({term:event.target.value})} />;
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // This makes it a controlled component. i.e. the value is determined by the state.
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='Search for a video'
        />
        {/* <br/>
        Value of the input :
        <br/>
        <h1>{this.state.term}</h1> */}
      </div>
    );
  }

  // Handle input change
  // All browser related events are handled using the event object.

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
