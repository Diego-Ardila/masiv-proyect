import {typesSmsSimple} from './typesModuleSmsSimple'

export const getters = {
    [typesSmsSimple.getters.GET_INPUT_VALUE_FILTERED](state){
        if(state.textValue.length) return state.textValue.replace(/[^0-9;]+/g, '').split(";")
        return []
    },
    smsDataValidations(state, getters) {
        const textValueFiltered = getters[typesSmsSimple.getters.GET_INPUT_VALUE_FILTERED]
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