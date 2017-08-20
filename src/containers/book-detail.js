import React,{Component} from 'react';
import {connect} from 'react-redux';
class BookDetail extends Component {
  render(){
    if(!this.props.book){
      return (
        <div>
          Select a book to get started.
        </div>
      );
    }
    return (
      // <div> Book Detail </div>
      <div>
        <h3>Details of the book :</h3>
        {this.props.book.title}
        <h4> Number of pages :</h4>
        {this.props.book.pages}
      </div>
    );
  }
}
 // Map the state to properties
function mapStateToProps(state){
  return {
    book:state.activeBook
  };
}

export default connect (mapStateToProps)(BookDetail);
