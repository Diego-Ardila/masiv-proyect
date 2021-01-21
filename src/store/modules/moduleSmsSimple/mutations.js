export const mutations = {
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