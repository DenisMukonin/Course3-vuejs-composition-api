<template>
  <div v-if="isId" class="card">
    <h2>Название задачи</h2>
    <h3>id = {{ taskId }}</h3>
    <p><strong>Статус</strong>: <AppStatus :type="typeStatus" :key="typeStatus" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div @click="changeStatus">
      <button class="btn" @click="takeToWork">Взять в работу</button>
      <button class="btn primary" @click="complete">Завершить</button>
      <button class="btn danger" @click="cancel">Отменить</button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useStatus} from '../use/status'

export default {
  setup () {
    const route = useRoute()
    const store = useStore()
    const taskId = +route.params.taskId
    let typeStatus

    const task = ref(store.getters.getTask(taskId))
    const isId = ref(checkId())

    function checkId() {
      if (task.value) {
        typeStatus = ref(store.getters.getStatus(taskId))
        return true
      } else return false
    }

    function changeStatus() {
      typeStatus.value = store.getters.getStatus(taskId)
    }

    return {
      taskId,
      isId,
      task,
      typeStatus,
      changeStatus,
      ...useStatus(taskId)
    }
  },

  components: {AppStatus}
}
</script>

<style scoped>

</style>
