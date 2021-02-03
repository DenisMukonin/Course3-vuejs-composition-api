import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      tasks: []
    }
  },
  getters: {
    getTask: (state) => (taskId) => {
      return state.tasks.find(t => t.id === taskId)
    },
    getStatus: (state) => (taskId) => {
      return state.tasks.find(t => t.id === taskId).status
    },
    getCountActive(state) {
        return state.tasks.filter(t => t.status === 'active').length
    },
    getArrayTasks() {
       return JSON.parse(localStorage.getItem('tasks'))
    }
  },
  mutations: {
    changeStatus(state, payload) {
      const idTask = state.tasks.findIndex(t => t.id === payload.task)
      state.tasks[idTask].status = payload.status
    },
    addLocalStorage(state) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  }
})
