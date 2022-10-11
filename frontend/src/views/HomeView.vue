<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from 'vue'
const data = ref({})
const error = ref({})

fetch('http://localhost:3000/api/users')
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err))
</script>

<template>
  <main>
    <h1>User Name: {{data[0].name}}</h1>
  </main>
</template>
