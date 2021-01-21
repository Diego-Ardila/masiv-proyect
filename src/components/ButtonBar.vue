<template>
  <div class="bar">
      <span class="title">
          <h3>Envio Simple</h3>
      </span>
      <div class="btn-group">
          <button @click="droppingMenu" class="btn-send" :disabled="smsIsButtonDisabled">Enviar <i class="fas fa-sort-down"></i></button>
          <ul class="undrop-menu" :class="{dropMenu : isDropMenu}">
              <li @click="sendData">Enviar ahora</li>
              <li @click="openProgramModal">Programar</li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    data() {
        return {
            isDropMenu: false
        }
    },

    computed: {
        ...mapState({
            textValue: state => state.moduleSmsSimple.textValue,
            selectionValue: state => state.moduleSmsSimple.selectionValue
        }),
        ...mapGetters('moduleSmsSimple',[
            'smsDataValidations',
            'smsIsButtonDisabled'
        ])
    },
    methods: {
        droppingMenu() {
            return this.isDropMenu = !this.isDropMenu
        },
        sendData() {
            if(typeof(this.smsDataValidations) !== 'string'){
                this.openOrCloseModalToSendSms(true)
                this.creatingNewError(null)
            }else{
                this.creatingNewError(this.smsDataValidations)
            }
        },
        openProgramModal() {
            this.openOrCloseProgramModal(true)
        },
        ...mapActions('moduleSmsSimple',[
            'openOrCloseModalToSendSms',
            'creatingNewError',
            "openOrCloseProgramModal"
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/ButtonBar.scss';
</style>