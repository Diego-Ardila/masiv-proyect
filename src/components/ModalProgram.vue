<template>
  <div :class="{show: isProgramModalOpen}" class="modal">
      <div class="modal-header">
          <h3 class="header-title">Envio Programado</h3>
          <p @click="closeModal" class="close-modal">X</p>
      </div>
      <date-picker v-model="date" mode="dateTime">
        <template v-slot="{ inputValue, inputEvents }">
            <div class="input-wrapper">
                <label class="label-input" for="date-picker-input">Fecha</label>
                <input
                class="date-picker-input"
                :value="inputValue"
                v-on="inputEvents"
                />
            </div>
        </template>
      </date-picker>
      <div class="footer">
          <button @click="closeModal" class="close-button">Cerrar</button>
          <button @click="send" class="send-button">Enviar</button>
      </div>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return{
            date: new Date()
        }
    },
    components:{
        DatePicker
    },
    computed: {
        ...mapState('moduleSmsSimple',[
            'isProgramModalOpen'
        ])
    },
    methods: {
        ...mapActions('moduleSmsSimple',[
            'openOrCloseProgramModal',
            'openOrCloseModalToSendSms'
        ]),
        closeModal() {
            this.openOrCloseProgramModal(false)
        },
        send(){
            this.openOrCloseModalToSendSms(true)
            this.openOrCloseProgramModal(false)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/ModalProgram.scss';
</style>