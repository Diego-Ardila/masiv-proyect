<template>
  <div :class="{show: isSimpleModalOpen}" class="modal">
    <button @click="closeModal" class="close">X</button>
    <h3 class="title">Envio Exitoso</h3>
    <div class="wrapper">
      <div v-if="typesSmsSimple.getters.GET_INPUT_VALUE_FILTERED.length > 0" class="text-values-container">
        <p class="wrap-title">Estos son los nuevos numeros registrados:</p>
        <ul class="text-values">
            <li v-for="(value, index) in typesSmsSimple.getters.GET_INPUT_VALUE_FILTERED" :key="index">{{value}}</li>
        </ul>
      </div>
      <div v-if="selectionValue.length > 0" class="selection-values-container">
        <p class="wrap-title">Estos son los numeros de contactos frecuentes seleccionados:</p>
        <ul class="selection-values">
            <li v-for="(value, index) in selectionValue" :key="index">{{`${value.name}: ${value.phone}`}}</li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
        <h4 class="message-title"> Mensaje:</h4>
        <p class="message">{{ smsMessage}} </p>
    </div>
    <p class="premium" v-if="isPremium">El mensaje es Premium!</p>
    <p class="flash" v-if="isFlash">El mensaje es tipo Flash!</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import {typesSmsSimple} from '@/store/modules/moduleSmsSimple/typesModuleSmsSimple'
export default {
    computed: {
        ...mapGetters('moduleSmsSimple',[
            typesSmsSimple.getters.GET_INPUT_VALUE_FILTERED
        ]),
        ...mapState({
            isSimpleModalOpen: state => state.moduleSmsSimple.isSimpleModalOpen,
            selectionValue: state => state.moduleSmsSimple.selectionValue,
            smsMessage: state => state.moduleSmsSimple.smsMessage,
            isPremium: state => state.moduleSmsSimple.isPremium,
            isFlash: state => state.moduleSmsSimple.isFlash
        })
    },
    methods: {
        ...mapActions('moduleSmsSimple',[
            'openOrCloseModalToSendSms',
            'resetValuesOnClose'
        ]),
        closeModal() {
            this.openOrCloseModalToSendSms(false)
            this.resetValuesOnClose()
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/ModalSend.scss';
</style>