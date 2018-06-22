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
      <div class="row flight-row" v-for="flight in results" @click="flightDetails( flight.number )">
        <div class="col-4">{{ flight.date }}</div>
        <div class="col-2">{{ flight.number }}</div>
        <div class="col-2">{{ flight.airplane.name }}</div>
        <div class="col-2">{{ flight.origin }}</div>
        <div class="col-2">{{ flight.destination }}</div>
      </div>

    </div><!-- container -->
  </div>
</template>

<script>
// const FLIGHT_SEARCH_URL = 'http://localhost:3000/flights/search.json';
const FLIGHT_SEARCH_URL = 'http://localhost:3000/flights/search';
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

    axios.get( `${ FLIGHT_SEARCH_URL }/${ this.origin }/${ this.destination }` )
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
