<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" @click="submit" :disabled="!isValid">Создать</button>
  </form>
</template>


<script>
import {useRouter} from 'vue-router'
import {ref, reactive, computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const title = ref('')
    const date = ref('')
    const description = ref('')

    const isValid = computed(() => {
      return title.value !== '' && description.value !== '' && date.value !== ''
    })

    const router = useRouter()
    const store = useStore()
    const submit = () => {
      const isDate = Date.parse(date.value) >= new Date

      const newTask = reactive({
        id: +new Date,
        title: title.value,
        date: date.value,
        text: description.value,
        status: isDate ? 'active' : 'cancelled'
      })

      store.state.tasks.push(newTask)
      localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
      router.push('/')
    }

    return {
      submit,
      title, date, description,
      isValid,
    }
  }
}
</script>
