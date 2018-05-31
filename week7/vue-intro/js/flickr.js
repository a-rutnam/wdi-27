Vue.component('photo-result', {
  props: ['photo'],
  template: '<img @click="showDetail(photo)" :src="imageURL(photo)" :title="photo.title">',
  // data: {
  //
  // },
  methods: {

    showDetail: function( photo ){
      console.log( 'in component', photo );
    },

    imageURL: function( p ){
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
    }
  }
});

const app = new Vue({
  el: '#appRoot',
  data: {
    searchText: 'puppies',
    page: 1,
    results: [],
    isFullscreen: false,
  },
  methods: {

    doSearch: function(){

      $.getJSON("https://api.flickr.com/services/rest/", {
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        method: 'flickr.photos.search',
        text: this.searchText,
        format: 'json',
        nojsoncallback: 1,
        page: this.page
      })
      .done(data => this.results = data.photos.photo )
      .fail(e => console.warn);

    }
  }
});
