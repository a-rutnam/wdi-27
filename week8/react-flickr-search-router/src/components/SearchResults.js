import React, {Component} from 'react';
// import SearchForm from './SearchForm';
import jsonp from 'jsonp-es6';

const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

class Gallery extends Component {
  
  generateURL( p ){
    return `https://farm${ p.farm }.staticflickr.com/${ p.server }/${ p.id }_${ p.secret }_q.jpg`;
  }
  
  gotoImage( id ){
    console.log( 'photo ID:', id );
    this.props.history.push(`/image/${ id }`)
  } 
   
  render(){
    return (
      <div className="results">
        {
          this.props.images.map( photo => <img onClick={ () => this.gotoImage(photo.id) }  src={this.generateURL(photo)} key={photo.id} /> )
        }
      </div>
    );
  }
};

class SearchResults extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      images: []
    };
    
    // this.fetchImages = this.fetchImages.bind( this );
    
    this.fetchImages( this.props.match.params.query );
    
  }

  fetchImages( query ){
    console.log('fetchImages(): ', query);

    
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json'
    };
    
    jsonp( flickrURL, flickrParams, {callback: 'jsoncallback'} )
    .then(data => {
      console.log('AJAX response:', data);
      
      // const urls = data.photos.photo.map( generateURL );
      this.setState({ images: data.photos.photo });
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
        <h2>Search Results</h2>
        <Gallery images={ this.state.images } history={ this.props.history } />
      </div>
    );
  }
}

export default SearchResults;
