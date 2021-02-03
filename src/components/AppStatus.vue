<template>
  <span :class="['badge', typeClass]">{{nameStatus}}</span>
</template>

<script>
import {ref} from 'vue'

export default {
  props: ['type'],
  setup(props) {
    const type = ref(props.type)

    const typeClass = ref('active')
    const nameStatus = ref('Активна')

    switch (type.value) {
      case 'active':
        typeClass.value = 'primary';
        nameStatus.value = 'Активна';
        break;
      case 'cancelled':
        typeClass.value = 'danger';
        nameStatus.value = 'Отменена';
        break;
      case 'pending':
        typeClass.value = 'warning';
        nameStatus.value = 'В работе';
        break;
      default:
        typeClass.value = 'primary';
        nameStatus.value = 'Готово';
    }

    return {
      type,
      typeClass,
      nameStatus
    }
  }
}
</script>
