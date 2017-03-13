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
        <p>Create a a single text input and a button, then below that, create another div with some headline (of which size is your choice) to denote our list of todos, once they are created.</p>
        <p>Below the h-tag inside of the div, make an unordered list with a single empty list item, which we will fill out when we start connecting the Javascript to the page.</p>
    </section>
    <section>
        <h3>2. Declare and connect the todos</h3>
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
    <p>The question is now, though, how do we tie <code>todo</code> and <code>todoList</code> to the input and the ul/li that we have in the template? It's actually quite simple.</p>
    <p>Inside of the input element you created, you're going to put <code>v-model="todo"</code>. What this does is tell Vue that whatever the value in here is, the <code>todo</code> key in our data object will be the same. This is convenient because once we create the method that will add the todo to the list, we will be able to access that value with <code>this.todo</code>.</p>
    <p>Moving on the empty <code>li</code> tag we have, inside of the opening tag, add <code>v-for="todo in todoList"</code>, then add <code>{{</code><code>todo</code><code>}}</code> between the li tags. What this will do is iterate (loop) over <code>todoList</code> and show each todo</p>
    <p>Your template should now look like this:</p>
    <pre>&lt;template&gt;
  &lt;div id="app"&gt;
      &lt;input type="text" v-model="todo"&gt;
      &lt;button&gt;Submit&lt;/button&gt;
    &lt;div&gt;
      &lt;h4&gt;Todo List&lt;/h4&gt;
      &lt;ul&gt;
        &lt;li v-for="todo in todoList"&gt;
          <code>{{</code><code>todo</code><code>}}</code>
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</pre>
    </section>
    <section>
        <h3>3. Adding the <code>todo</code> to <code>todoList</code></h3>
        <p>So now we've connected <code>todo</code> and <code>todoList</code> to the component. All we have to do now is connect the button and tell it what to do when clicked. Easy enough!</p>
        <p>Let's start by telling our component what to do. It turns out that Vue has a key that we can add to the <code>export default</code> object called <code>methods</code>. <code>methods</code> is an object that contains, believe it or not, methods that we can use inside of our component. How convenient, right?</p>
        <p>We can add <code>methods</code> by adding it below <code>data</code>. It should look like this:</p>
        <pre>export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todo: '',
      todoList: []
    }
  },
  methods: {
      
  }
}</pre>
        <p>Within this methods object, we will add the method we need to use to add <code>todo</code> to <code>todoList</code>. Let's start by calling it <code>addTodo</code>. Turns out that all we need to do is use the <i>Array.push</i> method so let's write that method. It should now look like this:</p>
                <pre>export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todo: '',
      todoList: []
    }
  },
  methods: {
      addTodo: function() {
          this.todoList.push(this.todo)
      }
  }
}</pre>
    <p>Now that we have that written, let go to the <code>button</code> in the template and add <code>@click="addTodo"</code> ( a shortcut for <code>v-on:click="addTodo"</code>) inside of the opening tag. That will listen for a click event on that button and every time it is clicked, it will take the current value of <code>this.todo</code> and push it to the <code>this.todoList</code> array.</p>
    </section>
    <section>
        <h3>We're done!</h3>
        <p>It should be working! If it is not, go back and review your code. If you're still having trouble ask an instructor or a helper!</p>
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
