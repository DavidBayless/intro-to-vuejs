<template>
  <div class="stl-step-one container">
    <h2>Step One</h2>
    <section>
        <h3>1. Create todo input form and todo list</h3>
        <p>Navigate to your <code>App.vue</code> file in the <code>src/</code> directory.</p>
        <p>As much as we would love to keep all of the boilerplate HTML, delete everything inside of the div with the id of "app"</p>
        <p>Create a form inside of the newly empty div with a single text input and a button, then below that, create another div with some headline (of which size is your choice) to denote our list of todos, once they are created.</p>
        <p>Below the h-tag inside of the div, make an unordered list with a single empty list item, which we will fill out when we start connecting the Javascript to the page.</p>
    </section>
    <section>
        <h3>2. Connect the Javascript</h3>
        <p>You'll see that there are 3 main sections (tags) to the <code>.vue</code> files.</p>
        <ul>
            <li>Template - The HTML for the component</li>
            <li>Script - The Javascript for the component</li>
            <li>Style - The CSS for the component</li>
        </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'stl-step-one',
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
