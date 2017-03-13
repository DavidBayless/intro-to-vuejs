<template>
  <div class="project-list container">
    <h1>Project List</h1>
    <section>
        <h4>Vue without Components, Router, or Vuex</h4>
        <ul>
            <li><router-link to="/simple-todo-list/getting-started">Todo List</router-link></li>
        </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'project-list',
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
