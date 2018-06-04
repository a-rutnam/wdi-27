import React, {Component} from 'react';
import SearchForm from './SearchForm';
import jsonp from 'jsonp-es6';

const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

const Gallery = props => {
  return (
    <div className="results">
      <h2>Search Results</h2>
      {
        props.images.map( url => <img src={url} key={url} /> )
      }
    </div>
  );
};

class FlickrSearch extends Component {
  
  constructor(){
    super();
    
    this.state = {
      images: []
    };
    
    this.fetchImages = this.fetchImages.bind( this );
  }

  fetchImages( query ){
    console.log('fetchImages(): ', query);

    const generateURL = p => {
      return `https://farm${ p.farm }.staticflickr.com/${ p.server }/${ p.id }_${ p.secret }_q.jpg`;
    };
  
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json'
    };
    
    jsonp( flickrURL, flickrParams, {callback: 'jsoncallback'} )
    .then(data => {
      console.log('AJAX response:', data);
      
      const urls = data.photos.photo.map( generateURL );
      this.setState({images: urls});
    });


    // jQuery flashback:
    // $.ajax(URL, {options})
    // .done(function(data){
    //   console.log(data);
    // });
  
  }

  render(){
    return (
      <div>
        <h1>Flickr Search</h1>
        <SearchForm onSearchSubmit={ this.fetchImages }  />
        
        {
          this.state.images.length ? 
          <Gallery images={ this.state.images } />
          :
          <p>Please enter a search term above...</p>
        }
        
      </div>
    );
  }
}

export default FlickrSearch;
