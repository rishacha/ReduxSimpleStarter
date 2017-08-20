// This is the file which contains the action creator

// selectBook is an ActionCreator, it needs to return an action,
// An action is an object with a type property and a payload.
export function selectBook(book){
  //console.log('A book has been selected', book.title);
  // type is uppercase, single string
  return {
    type:'BOOK_SELECTED',
    payload:book
  }
}
