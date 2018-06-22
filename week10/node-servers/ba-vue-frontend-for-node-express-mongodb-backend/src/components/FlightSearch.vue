<template>
  <div>
    <h2>Search</h2>
    <div class="search-form">

      <label>Origin:</label>
      <!-- 'v-model' does two-way binding:
           1) set the 'origin' state value from this select, and
           2) if that state changes in code, update this select to reflect that -->
      <select v-model="origin">
        <option>Please select</option>
        <option>SYD</option>
        <option>SFO</option>
        <option>SIN</option>
        <option>JFK</option>
      </select>

      <label>Destination:</label>
      <select v-model="destination">
        <option>Please select</option>
        <option>SYD</option>
        <option>SFO</option>
        <option>SIN</option>
        <option>JFK</option>
      </select>

      <button @click="submitSearch">Search Flights</button>

    </div>
  </div>
</template>

<script>
export default {
  // Vue stores state in the 'data' property
  data(){
    return {
      origin: 'SYD',
      destination: 'JFK'
    }
  },
  methods: {
    // ES5 key:value object property, function as value:
    // submitSearch: function(){
    // ES6 method:
    submitSearch(){
      console.log('clicked!', this.origin, this.destination );
      // this.origin = 'SIN';  // no this.setState()
      this.$router.push({
        name: 'searchResults',
        params: this.$data  // everything we need to pass is in our state, in data
        // params: {
        //   origin: this.origin,
        //   destination: this.destination
        // }
      });


    }
  }
};

</script>


<style>
select {
  margin-right: 20px;
}
</style>
