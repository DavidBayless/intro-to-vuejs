<template>
  <div class="home">
    <div class="jumbotron text-center">
      <h1 class="">Welcome to Intro to VueJS!</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p class=""><a class="btn btn-primary btn-lg"><router-link to="/getting-started">Get Started!</router-link></a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
