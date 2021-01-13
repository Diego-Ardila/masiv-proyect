<template>
  <div class="navbar-global">
    <ul class="primary-navbar">
      <li class="logo">
        <img src="../assets/logo.png" alt="logo">
      </li>
      <li @click="onClickedMenu" class="primary-menu" title="SMS">
        <i class="far fa-comment-alt"></i>
      </li>
    </ul>
    <ul class="secondary-navbar" :class="{showMenu: isNavClicked}">
      <li class="title">
        <h4>SMS</h4>
      </li>
      <li class="secondary-menu">
          <i class="far fa-paper-plane med"></i>
          <span>Envio Simple</span> 
      </li>
    </ul>
  </div>
</template>

<script>
//import {mapState, mapActions} from 'vuex'

export default {
  
  name: 'Todos',
  data() {
    return {
      isNavClicked: false
    }
  },

  computed: {
  },

  methods: {
    onClickedMenu() {
      return this.isNavClicked = !this.isNavClicked
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/NavBar.scss';
</style>
