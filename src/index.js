// OBJECTIVE 1: Create a new component. This component should produce some HTML
// ES6 Import statements
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// Import Components
import SearchBar from './components/search_bar.js';
import VideosList from './components/video_list.js';
import VideoDetail from './components/video_details.js'
// `const` is ES6. `const` declares a variable that has a final value. It's a  constant and it's not going to change.
const API_KEY = ' AIzaSyDBKsJGiW9uGlTgP0chLl4oXlcWdbDXykM';

// **Downwards data flow**  : The most parent component should be responsible for fetching data

/*
YTSearch({
  key: API_KEY,
  term: 'surfboards'
}, function(data) {
  console.log(data);
});
*/

// const App = function() { // Fat arrow => ES6 syntax
/*const App = () => {
  return <div>
  <SearchBar />
  </div>; // HTML is being returned !! This HTML is JSX.
  // Babel and Webpack transpile this to JS.
}*/
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
    };

    // When the app starts up, the page shouldn't be empty
    // So we call the YTSearch function in the constructor
/*
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (videos) => {
      //console.log(data);
      //this.setState({videos:videos})
      //this.setState({videos}) // ES6 syntax sugar
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
    */
    this.videoSearch('surfboards');
  }
  videoSearch(term){
    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      //console.log(data);
      //this.setState({videos:videos})
      //this.setState({videos}) // ES6 syntax sugar
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  //<VideoDetail video={this.state.videos[0]} />
  render() {
    const videoSearch = _.debounce((term)=>{
      this.videoSearch(term)
    },300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideosList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// OBJECTIVE 2 : Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
  <App/>, document.querySelector('.container')); // The second argument to the render function is the target element
