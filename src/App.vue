<script setup>
//라이브러리, 함수 로드
//변수 생성
//함수 생성
// import TemplateView from './views/TemplateView.vue';
</script>

<template>
  <h1>Vue Basic</h1>
  <nav>
    <RouterLink to="/">홈</RouterLink>
    <RouterLink to="/template">템플릿 문법</RouterLink>
  </nav>
  <main>  
    <!-- <TemplateView msg2="반갑습니다"/> -->
    <RouterView />
  </main>
</template>

<style scoped>
  nav{
    display: flex;
    gap:10px; 
    padding:10px;
    background: #ebebeb;
    a{
      text-decoration: none;
    }
    .router-link-active{
      font-weight: bold;
    }
  }
</style>
