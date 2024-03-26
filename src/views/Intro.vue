<script>
export default {
  name: 'Intro',
  mounted(){
    const navbar = document.querySelector('.navbar')
    navbar.style.display = "none"
  }
}
</script>

<template>
  <div class="background">
    <div class="container login"></div>
  </div>
</template>

<style lang="scss">
.background {
  background: url('../assets/images/home-logo.png');
  width: 100%;
  height: 100vh;
  background-position: center;
}
</style>
