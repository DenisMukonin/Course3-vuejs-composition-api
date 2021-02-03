<template>
  <h1 v-if="!tasks.length" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ countActive }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>

      <button class="btn primary" @click="navigate(task)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()

    if (store.getters.getArrayTasks !== null) {
      store.state.tasks = store.getters.getArrayTasks
    }

    const tasks =  store.state.tasks
    const router = useRouter()
    const countActive = ref(store.getters.getCountActive)

    const navigate = (task) => router.push('/task/'+task.id)
    return {
      tasks,
      countActive,
      navigate
    }
  },
  components: {AppStatus}
}
</script>
