<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
document.cookie = "zashascookie=🍪"
</script>

<template>
  <div class="full-row text-center">
    <div class="grid grid-cols-2 w-max mx-auto">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="h-24 p-3 duration-300 hover:drop-shadow-vite" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="h-24 p-3 duration-300 hover:drop-shadow-vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>