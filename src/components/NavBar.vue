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
      <li @click="toSms" class="secondary-menu">
          <i class="far fa-paper-plane med"></i>
          <span>Envio Simple</span> 
      </li>
    </ul>
  </div>
</template>

<script>

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
    },
    toSms() {
      return this.$router.push('/sms')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/NavBar.scss';
</style>
