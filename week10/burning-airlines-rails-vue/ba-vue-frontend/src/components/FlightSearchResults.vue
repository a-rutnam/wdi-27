<template>
  <div>
    <h2>Results</h2>
    <div class="container">

      <div class="row bg-primary text-white">
        <div class="col-4">Date</div>
        <div class="col-2">Flight</div>
        <div class="col-2">Plane</div>
        <div class="col-2">Origin</div>
        <div class="col-2">Destination</div>
      </div>

      <!-- if there are no results yet, show a loading message while we wait... -->
      <div class="row" v-if="results.length === 0">
        <div class="col-12">Loading...</div>
      </div>

      <!-- Use v-for to iterate over each result in this.results -->
      <div class="row flight-row" v-for="flight in results" @click="flightDetails( flight.id )">
        <div class="col-4">{{ flight.departure_date_formatted }}</div>
        <div class="col-2">{{ flight.flight_number }}</div>
        <div class="col-2">{{ flight.airplane.name }}</div>
        <div class="col-2">{{ flight.origin }}</div>
        <div class="col-2">{{ flight.destination }}</div>
      </div>

    </div><!-- container -->
  </div>
</template>

<script>
const FLIGHT_SEARCH_URL = 'http://localhost:3000/flights/search.json';
import axios from 'axios';

export default {
  // we get these props from the router URL params, i.e. /search/:origin/:destination
  props: ['origin', 'destination'],
  data(){
    return {
      results: []
    };
  },
  created(){
    // code that runs when the component is created
    // (like React's componentDidMount() )

    axios.get( FLIGHT_SEARCH_URL, {
      params: {
        origin: this.origin, // these will become key:val pairs in the URL querystring
        destination: this.destination  // i.e. ?origin=SYD&destination=SFO
      }
    })
    .then(response => {
      console.log('AJAX response', response);
      this.results = response.data;  // store the results in our app state
    });

  },
  methods: {
    flightDetails( id ){
      // navigate to the show page for this flight
      this.$router.push({
        name: 'flightDetails',
        params: { id }
      });
    }
  },

};
</script>

<style scoped>
  .flight-row:hover {
    cursor: pointer;
    background-color: #EEEEEE;
    font-weight: bold;
  }
</style>
