<template>
  <div class="container">
    <h3 class="container-title">Mensaje</h3>
    <div class="card">
      <div class="textarea-container">
        <h4 class="secondary-title">Texto</h4>
        <textarea v-model="smsMessage"/>
        <span class="textarea-footer">
          <p>caracteres: {{charsCounter}} </p>
        </span>
      </div>
      <div class="checkbox-container">
        <h4 class="secondary-title">Tipo</h4>
        <label for="premium">
          <input id="premium" class="type-checkbox" type="checkbox" v-model="isPremium">
          Premium(Texto Enriquecido)
        </label>
        <label for="flash">
          <input id="flash" class="type-checkbox" type="checkbox" v-model="isFlash">
          Flash
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('moduleSmsSimple',[
            'charsCounter'
        ]),
    smsMessage: {
          get() {
              return this.$store.state.moduleSmsSimple.smsMessage
          },
          set(value) {
              return this.$store.commit('moduleSmsSimple/setSmsMessage',value)
          }
      },
    isPremium: {
          get() {
              return this.$store.state.moduleSmsSimple.isPremium
          },
          set(value) {
              return this.$store.commit('moduleSmsSimple/setPremiumValue',value)
          }
      },
      isFlash: {
          get() {
              return this.$store.state.moduleSmsSimple.isFlash
          },
          set(value) {
              return this.$store.commit('moduleSmsSimple/setFlashValue',value)
          }
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/FormsText.scss';
</style>