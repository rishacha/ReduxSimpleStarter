import React, {Component} from 'react';
import BookList from '../containers/book_list.js';
import BookDetail from '../containers/book-detail.js';
// Redux = > ConApplication State
// React = > Generates views for a state
export default class App extends Component {
  render() {
    return (
      // <div>React simple starter</div>
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
