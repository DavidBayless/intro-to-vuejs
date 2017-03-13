<template>
  <div class="stl-step-one container">
    <h2>Step One</h2>
    <section>
        <h3>1. Create todo input form and todo list</h3>
        <p>Navigate to your <code>App.vue</code> file in the <code>src/</code> directory.</p>
        <p>You'll see that there are 3 main sections (tags) to the <code>.vue</code> files.</p>
        <ul>
            <li><code>&lt;template&gt;&lt;/template&gt;</code> - The HTML for the component</li>
            <li><code>&lt;script&gt;&lt;/script&gt;</code> - The Javascript for the component</li>
            <li><code>&lt;style&gt;&lt;/style&gt;</code> - The CSS for the component</li>
        </ul>
        <p>As much as we would love to keep all of the boilerplate HTML inside of the template tags, delete everything inside of the div with the id of "app"</p>
        <p>Create a form inside of the newly empty div with a single text input and a button, then below that, create another div with some headline (of which size is your choice) to denote our list of todos, once they are created.</p>
        <p>Below the h-tag inside of the div, make an unordered list with a single empty list item, which we will fill out when we start connecting the Javascript to the page.</p>
    </section>
    <section>
        <h3>2. Connect the Javascript</h3>
        <p>In our <code>&lt;script&gt;&lt;/script&gt;</code> section, we see:</p>
        <pre>export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}</pre>
        <p>The name is just basically a nametag if you're using Vue dev tools, but what we're concerned about is the <code>data</code> key. That object that is being returned is an object of values that are available inside of the component.</p>
        <p>If we think about what we're going to be using, data-wise, all we really need is the todo that we are going to be entering in the form and then a list of todos that we will be adding to.</p>
        <p>First things first, let's add a key to the object below <code>msg</code> called <code>todo</code> and let's add a value of <code>''</code> (an empty string)</p>
        <p>Below that, let's add a key of <code>todoList</code> and a value of <code>[]</code> (an empty array).</p>
        <p>Your data object should now look like this:</p>
                <pre>data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todo: '',
      todoList: []
    }
}</pre>
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
