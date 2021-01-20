<template>
  <div class="container">
      <FormsInfo/>
      <FormsText/>
  </div>
</template>

<script>
import FormsText from './sub-components/FormsText'
import FormsInfo from './sub-components/FormsInfo'

export default {
    components: {
            FormsText,
            FormsInfo
        }
}
</script>

<style lang="scss" scoped>
@import '../styles/Forms.scss';
</style>