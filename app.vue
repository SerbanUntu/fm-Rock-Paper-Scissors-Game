<script setup>
const plays = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
const showModal = ref(false)
let score = 12
</script>

<template>
  <main class="w-screen h-screen bg-bg flex flex-col p-8 items-center">
    <header class="flex flex-row justify-between px-6 py-4 border-2 border-header-outline rounded-xl w-full max-w-[700px] items-center">
      <section class="uppercase">
        <h3 v-for="play in plays">{{ play }}</h3>
      </section>
      <section class="flex flex-col bg-white rounded-md w-36 h-28 items-center justify-center">
        <p class="text-score uppercase tracking-[2px]">Score</p>
        <h1 class="text-dark uppercase overflow-hidden text-ellipsis whitespace-nowrap w-full text-center">{{ score }}</h1>
      </section>
    </header>
    <Pentagon />
    <button class="absolute bottom-8 right-[calc(50%_-_4rem)] md:right-8 border-2 border-white w-32 h-10 uppercase rounded-lg tracking-widest flex items-center justify-center" @click="showModal = true">Rules</button>
    <Modal v-show="showModal" @close="showModal = false" />
    You Picked
    The House Picked

    You Win
    You Lose

    Play Again
  </main>
</template>
