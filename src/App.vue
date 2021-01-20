<template>
  <div id="app">
    <modal-send/>
    <modal-program/>
    <div id="nav">
      <nav-bar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ModalSend from '@/views/ModalSend.vue'
import ModalProgram from '@/components/ModalProgram.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ModalSend,
    ModalProgram
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');
#app {
  min-height: 100vh;
  display: flex;
  font-family: 'Titillium Web', sans-serif;
}
</style>




