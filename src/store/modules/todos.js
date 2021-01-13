import axios from 'axios'

const state = {
    todos: []
}

const getters = {}

const actions = {
    async fetchTodos({commit}) {
        const response = await axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos'
        })

        commit('setTodosFromApi', response.data)
    }
}

const mutations = {
    setTodosFromApi(state, data) {
        state.todos = data
    }
}

export default {
    namespaced:true,

    state,
    getters,
    actions,
    mutations
}