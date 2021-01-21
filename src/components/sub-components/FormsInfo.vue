<template>
  <div class="container">
      <form class="cellphone-form">
          <h3 class="title">Informacion del envio</h3>
          <p class="errors" v-if="errors">{{errors}}</p>
          <label class="info-forms-labels" for="cel-numbers">Numeros de contacto</label>
          <input v-model="textValue" type="text" class="my-input" id="cel-numbers">
          <div class="multiselect-component">
            <label class="info-forms-labels">Contactos Frecuentes</label>
            <multiselect 
              class="my-input"
              v-model="selectionValue" 
              :options="frecuentContacts" 
              :multiple="true" 
              :close-on-select="false" 
              :clear-on-select="false" 
              :preserve-search="true" 
              placeholder="Selecciona una o varias opciones" 
              label="name" 
              track-by="name"
            >
                <template slot="option" slot-scope="props">{{`${props.option.name}: ${props.option.phone}`}}</template>
                <template slot="selection" slot-scope="{ values }"><span class="multiselect__single" v-if="values.length > 0">{{ userSelected(values) }}</span></template>
            </multiselect>
          </div>
      </form>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapState } from 'vuex'

export default {
  components: {
    Multiselect
  },

  computed: {
      ...mapState({
          frecuentContacts: state => state.moduleSmsSimple.frecuentContacts,
          errors: state => state.moduleSmsSimple.errors,
          text: state => state.moduleSmsSimple.textValue
      }),
      textValue: {
          get() {
              return this.text
          },
          set(value) {
              return this.$store.commit('moduleSmsSimple/setValue',value)
          }
      },
      selectionValue: {
          get() {
              return this.$store.state.moduleSmsSimple.selectionValue
          },
          set(value) {
              return this.$store.commit('moduleSmsSimple/setValue',value)
          }
      },
  },

  methods: {
      userSelected(values) {
          let destructuredArray = ""
          values.forEach(el => {
              destructuredArray += `${el.name}: ${el.phone}; `
          });
          return destructuredArray
      }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
@import '../../styles/FormsInfo.scss';
</style>