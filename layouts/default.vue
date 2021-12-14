<template>
  <div id="root">
    <Navigation/>

    <main>
      <Nuxt/>
    </main>

    <!-- TODO: Footer -->
    <Footer/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    margin: 0 5vw;
    flex-grow: 1;
}

</style>