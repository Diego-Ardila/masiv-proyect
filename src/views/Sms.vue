<template>
  <div class="view-container">
    <BreadCrumbsBar/>
    <ButtonBar/>
    <Forms/>
  </div>
</template>

<script>
import BreadCrumbsBar from '../components/BreadCrumbsBar.vue'
import ButtonBar from '../components/ButtonBar.vue'
import Forms from '../components/Forms.vue'

export default {
  components: {
    BreadCrumbsBar,
    ButtonBar,
    Forms
  }
}
</script>

<style>
@import '../styles/Sms.scss';
</style>