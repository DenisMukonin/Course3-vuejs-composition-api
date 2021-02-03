import {useStore} from "vuex";

export function useStatus(taskId) {

    const store = useStore()

    const takeToWork = () => {
        store.commit('changeStatus',{ task: taskId, status: 'pending'})
        store.commit('addLocalStorage')
    }

    const complete = () => {
        store.commit('changeStatus',{ task: taskId, status: 'done'})
        store.commit('addLocalStorage')
    }
    const cancel = () => {
        store.commit('changeStatus',{ task: taskId, status: 'cancelled'})
        store.commit('addLocalStorage')
    }

    return {takeToWork, complete, cancel}
}
