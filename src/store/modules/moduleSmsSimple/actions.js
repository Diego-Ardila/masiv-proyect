export const actions = {
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