import React,{Component} from 'react';
import {connect} from 'react-redux';
// Connecting redux with react is done using 'react-redux'
// We're going to define or promote components to a Container type
// A Container is a React component that has a direct connection to the state managed by Redux
// Dumb component - doesn't have a handle to the data
// Smart component has a connection or handle to the data ( or state ).
class Booklist extends Component {
  renderList() {
    return this.props.books.map((book)=>{
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render(
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  );
}

// Mapping state to properties

function mapStateToProps(state){
  // Whatever is returned from here will show up as props inside of BookList
  return{

  }
}
