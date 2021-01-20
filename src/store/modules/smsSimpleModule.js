

const state = {
    isPremium: false,
    isFlash: false,
    errors: null,
    isSimpleModalOpen: false,
    isProgramModalOpen: false,
    textValue: "",
    smsMessage:"",
    selectionValue: [],
    frecuentContacts: [
        { name: 'Juan', phone: '3145467689' },
        { name: 'Maria', phone: '3145467687' },
        { name: 'Raul', phone: '3202345465' },
        { name: 'Silvia', phone: '315547687' },
        { name: 'Laura', phone: '3224325676' },
        { name: 'Paola', phone: '3187865676' }
    ]
}

const getters = {
    smsTextValueFiltering(state){
        if(state.textValue.length) return state.textValue.replace(/[^0-9;]+/g, '').split(";")
        return []
    },
    smsDataValidations(state, getters) {
        const textValueFiltered = getters.smsTextValueFiltering
        if(textValueFiltered.every(num => num.length === 10)){
            return textValueFiltered
        }else {
        return 'los numeros de celular ingresados deben tener 10 digitos y solo caracteres numericos'
        }
    },
    smsIsButtonDisabled(state) {
        if(state.textValue.length > 0 || state.selectionValue.length > 0) return false
        return true
    },
    charsCounter(state) {
        return `${state.smsMessage.length} / 600`
    }
}

const actions = {
    openOrCloseModalToSendSms({commit},payload) {
        commit('setModal', payload)
    },
    openOrCloseProgramModal({commit}, payload) {
        commit('setProgramModal', payload)
    },
    creatingNewError ({commit}, payload) {
        commit('setErrors', payload)
    },
    resetValuesOnClose ({commit}) {
        commit('resetValues')
    }
}

const mutations = {
    setValue(state, newValue) {
        typeof(newValue)==="object" ? state.selectionValue = newValue : state.textValue = newValue
    },
    setModal(state, newValue) {
        state.isSimpleModalOpen = newValue
    },
    setProgramModal(state, newValue) {
        state.isProgramModalOpen = newValue
    },
    setErrors(state, newValue) {
        state.errors = newValue
    },
    setPremiumValue(state, newValue) {
        state.isPremium = newValue
    },
    setFlashValue(state, newValue) {
        state.isFlash = newValue
    },
    setSmsMessage(state, newValue) {
        state.smsMessage = newValue
    },
    resetValues(state) {
        state.isPremium= false
        state.isFlash= false
        state.errors= null
        state.isModalOpen= false
        state.textValue= ""
        state.smsMessage=""
        state.selectionValue= []
    }
}

export default {
    namespaced:true,

    state,
    getters,
    actions,
    mutations
}