<script setup>
defineProps({
  msg2:{
    type:String,
    required:true
  }
})
const msg = '안녕';
const rawHTML = '<a href="">링크</a>';
</script>

<template>
  <h2>템플릿 문법 수정3</h2>
  <h3>보간법</h3>
  <p>{{ msg }} {{ msg2 }}</p>
  <h4>HTML 출력</h4>
  <p>{{ rawHTML }}</p>
  <h4>v-html 디렉티브</h4>
  <p v-html="rawHTML"></p>
</template>

<style scoped>

</style>