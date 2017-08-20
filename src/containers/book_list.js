// OBJECTIVE : We're going to define or promote components to a Container type
import React,{Component} from 'react';
// React and Redux are separate libraries and react-redux is the glue
import {connect} from 'react-redux'; // Connecting redux with react is done using 'react-redux'
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; // We take the value from selectBook and make sure that it flows through all the reducers
// A Container is a React component that has a direct connection to the state managed by Redux

// Type of Components
// Dumb component - doesn't have a handle to the data
// Smart component has a connection or handle to the data ( or state ).
class BookList extends Component {
  renderList() {
    return this.props.books.map((book)=>{
      return(
        <li
          onClick={()=> this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
}

// THIS FUNCTION is the GLUE !! Very Important
// Anything returned from this function will end up as props on the BookList container
// Mapping redux state to properties of a component
// Input - a state and it Returns a prop object
function mapStateToProps(state){
  // Whatever is returned from here will show up as props inside of BookList
  // So we're returning an object from this.
  return {
    books:state.books
  }
}

// ADVANTAGE :
// * When Application state changes, this component will re-render

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed on to all of our reducers
  return bindActionCreators({selectBook:selectBook},dispatch);
  // Purpose : To take what gets returned from selectBook, flows through the reducers.
}



// Connect takes a function and a Component and returns a container
// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook, Make it available as a prop
export default connect (mapStateToProps,mapDispatchToProps)(BookList); // Connect BookList to redux state using the map function
