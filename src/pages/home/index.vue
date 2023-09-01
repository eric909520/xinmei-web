<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="big_box">
  <p>担保钱22包</p>
</div>

  
</template>

<style scoped lang="scss">
.big_box {
    width: 100%;
    p {
        color: red;
        font-size: 14px;
    }
}

</style>
