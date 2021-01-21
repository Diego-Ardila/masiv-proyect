import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'

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



export default {
    namespaced:true,

    state,
    getters,
    actions,
    mutations
}