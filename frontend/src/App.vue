<script setup lang="ts">

</script>

<template>
  <ApolloProvider client={client}>

    <Router>
      <div className="app">
        <main>
          <p>Rockar</p>
        </main>
      </div>
    </Router>

  </ApolloProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
