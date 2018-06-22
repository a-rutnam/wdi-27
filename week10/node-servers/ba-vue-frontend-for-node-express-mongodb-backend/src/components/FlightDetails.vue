<template>
  <div>
    <div class="container">

      <div class="row">
        <div class="col">
          <h3>Flight Details</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-2"></div>
        <div class="col-4 title text-right">Flight Number</div>
        <div class="col-4 text-left">{{ flight.number }}</div>
        <div class="col-2 text-left"></div>
      </div>

      <div class="row">
        <div class="col-2"></div>
        <div class="col-4 text-right title">Date</div>
        <div class="col-4 text-left">{{ flight.date }}</div>
        <div class="col-2 text-left"></div>
      </div>

      <div class="row">
        <div class="col-2"></div>
        <div class="col-4 text-right title">Route</div>
        <div class="col-4 text-left">{{ flight.origin }} &#x21E8; {{ flight.destination }}</div>
        <div class="col-2 text-left"></div>

      </div>
    </div><!-- container -->

    <br/>

    <div v-if="flight.airplane">
      <div class="plane-row" v-for="row in flight.airplane.rows">
        <div class="label text-center">{{ row }}</div>

        <div
          v-for="col in flight.airplane.cols"
          class="plane-seat text-center"
          :class="seatStatus(row, col)"
          @click="reserveSeat(row, col)" >

          {{ col | toSeatLetter }}

        </div>

        <div class="label text-center">{{ row }}</div>
      </div><!-- end of plane-row -->
    </div>

  </div>
</template>

<script>
  // window.iterations = 0;
  const FLIGHT_DETAILS_URL = "http://localhost:3000/flights";
  const FLIGHT_RESERVATION_URL = "http://localhost:3000/reservation";

  import axios from 'axios';

  export default {
    props: ['id'],
    data(){
      return {
        flight: {}
      };
    },
    created(){
      // Load the details for this flight (including reservations)
      // from Rails (routes to flights#show)
      axios.get(`${FLIGHT_DETAILS_URL}/${ this.id }`)
      .then(response => {
        console.log(response.data);
        this.flight = response.data; // store flight data into app state (& re-render)
      });

    },
    methods: {

      reserveSeat(row, col){
        axios.post( FLIGHT_RESERVATION_URL, { flight_number: this.id, row, col } )
        .then( response => {
          console.log('POST response', response.data);
          if( response.data.nModified === 1 && response.data.ok === 1){
            this.flight.reservations.push({ row, col });
          } else {
            // show some kind of error about the database/"unable to make reservation"
          }
        })
        .catch( console.warn );
      },

      seatStatus(row, col){

        // if we could get Rails returned the reservations to us indexed by 'row-col'
        // i.e.
        // {
        //   '10-1': { ... },
        //   '25-6': { ... },
        // }
        // ... then we could check if a seat was reserved without doing
        // all this looping for every seat we rendered, i.e.:
        // if( `${row}-${col}` in this.flight.reservations ){
        //   return 'occupied';
        // }
        // return 'free';

        for( let i = 0; i < this.flight.reservations.length; i++ ){
          // iterations++;
          const res = this.flight.reservations[i];
          if( row === res.row && col === res.col ){
            return 'occupied';
          }
        }
        return 'free';
      }
    },
    filters: {
      // work out the alphabet letter equivalent of a column number, ie. 1 => A, 2 => B etc
      toSeatLetter( val ){
        return String.fromCharCode( 64 + parseInt(val) );
      }
    }
  };
</script>

<style scope>
.title {
  font-weight: bold;
}

.plane-row {
  min-width: 500px;
}
.plane-row .label{
  padding: 10px;
  display: inline-block;
  width: 60px !important;
  height: 60px !important;
  font-weight: bold;
}

.plane-seat:hover{
  background-color: rgb(255, 245, 106);
}

.plane-seat {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #CCCCCC;
  margin-right: 6px;
  margin-bottom: 6px;
  cursor: pointer;
  line-height: 40px;
}

.occupied {
  background-color: red;
}

.free {
  background-color: green;
}

</style>
