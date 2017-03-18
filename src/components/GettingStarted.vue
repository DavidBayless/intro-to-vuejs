<template>
  <div class="getting-started container">
    <h1>Getting Started</h1>
    <section>
      <h5>*If you are using Windows and you don't have the Github Bash or something that will let you run *NIX commands on your command line, talk to one of the instructors/helpers</h5>
    </section>
    <section>
      <h3>1. Download NodeJS</h3>
      <p>Go and download <a href="https://www.nodejs.org">NodeJS</a> if you don't already have it installed on your computer.</p>
      <p>
        That should install both <a href="https://www.nodejs.org">NodeJS</a> and <a href="https://www.npmjs.com">NPM</a> on your computer. To verify that is true, go to your command line (terminal on Mac) and type:
        <code>node -v</code>
        . That should print out AT LEAST v6.9.5. If it doesn't, install the latest LTS version.
      </p>
    </section>
    <section>
      <h3>2. Download Vue CLI</h3>
      <p>Open your command line or terminal and write the following code:</p>
      <p>Mac/Linux: <code>sudo npm install -g vue-cli</code></p>
      <p>Windows: <code>npm install -g vue-cli</code></p>
    </section>
    <section>
      <h3>3. Create a Vue Project</h3>
      <p>In your terminal, navigate to whichever directory you would like to create your Vue app in and then type the following:</p>
      <p><code>vue init webpack-simple yourAppNameHere</code></p>
      <p>It will ask you a few questions, but you can just hit enter through all of them. We aren't going to use SASS, so we don't need that.</p>
      <p>After that finishes running <code>cd</code> into your new app directory and run <code>npm install</code>.</p>
      <p>That will take 30 seconds or a minute. Once that is done, run <code>npm run dev</code>. That will start the dev server and open a new window in your default browser (hopefully <a href="https://www.google.com/chrome/">Google Chrome</a>) on <code>http://localhost:8080</code></p>
    </section>
    <section>
      <h3>4. If that worked, success! Move on to the <router-link to="/simple-todo-list/step-one">next step</router-link> to see how to get started! </h3>
    </section>
  </div>
</template>

<script>
export default {
  name: 'getting-started',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
