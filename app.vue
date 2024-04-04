<script setup>
const plays = ['rock', 'paper', 'scissors', 'lizard', 'spock']
const showModal = ref(false)
const step = ref(1)
const playerPlay = ref('')
const computerPlay = ref('')
const roundResult = ref(0)
const totalScore = ref(0)

onMounted(() => {
  if (process.client) {
    totalScore.value = JSON.parse(localStorage.getItem("RockPaperScissorsScore")) || 0
  }
})

function computerChoose() {
  step.value += 1;
  setTimeout(() => {
    computerPlay.value = plays[Math.floor(Math.random() * 5)]
    step.value += 1
    setTimeout(() => {
      roundResult.value = beats()
      totalScore.value += roundResult.value
      if (process.client) {
        localStorage.setItem("RockPaperScissorsScore", JSON.stringify(totalScore.value))
      }
      step.value += 1
    }, 1000)
  }, 1000)
}

function beats() {
  if (playerPlay.value === computerPlay.value) {
    return 0;
  }
  switch (playerPlay.value + ',' + computerPlay.value) {
    case 'scissors,paper':
    case 'paper,rock':
    case 'rock,lizard':
    case 'lizard,spock':
    case 'spock,scissors':
    case 'scissors,lizard':
    case 'paper,spock':
    case 'rock,scissors':
    case 'lizard,paper':
    case 'spock,rock':
      return 1;
    default:
      return -1;
  }
}

function getEndMessage() {
  switch (roundResult.value) {
    case 0:
      return 'Draw';
    case 1:
      return 'You Win';
    default:
      return 'You Lose';
  }
}

</script>

<template>
  <main class="w-screen h-screen bg-bg flex flex-col p-8 items-center gap-16">
    <header
      class="flex flex-row justify-between px-6 py-4 border-2 border-header-outline rounded-xl w-full max-w-[700px] items-center">
      <section>
        <h3 v-for="play in plays">{{ play }}</h3>
      </section>
      <section class="flex flex-col bg-white rounded-md w-24 h-20 lg:w-36 lg:h-28 items-center justify-center">
        <p class="text-score tracking-[2px] text-[12px] lg:text-[16px]">Score</p>
        <h1 class="text-dark overflow-hidden text-ellipsis whitespace-nowrap w-full text-center">{{ totalScore }}</h1>
      </section>
    </header>
    <button
      class="absolute bottom-8 right-[calc(50%_-_4rem)] lg:right-8 border-2 border-white w-[128px] h-[48px] rounded-lg text-[16px] tracking-widest uppercase flex items-center justify-center"
      @click="showModal = true">Rules</button>
    <section v-if="step === 1" class="relative scale-75 lg:scale-100 flex items-center justify-center p-20 shrink-0">
      <Play v-for="play in plays" class="absolute" :variant="play" @click="{
          playerPlay = play;
          computerChoose();
        }" :class="{
          'top-0 left-[calc(50%-4.5rem)]': play === 'scissors',
          'right-0 top-[135px]': play === 'paper',
          'bottom-0 right-[60px]': play === 'rock',
          'bottom-0 left-[60px]': play === 'lizard',
          'left-0 top-[135px]': play === 'spock',
        }" />
      <img class="shrink-0 min-w-[329px] min-h-[313px]" src="/public/images/bg-pentagon.svg" alt="Plays are arranged in a pentagon" />
    </section>
    <section class="flex flex-row gap-10 items-center">
      <article class="flex lg:flex-col flex-col-reverse items-center gap-8 lg:gap-16">
        <h2 v-if="step > 1">You Picked</h2>
        <Play class="lg:m-24" :variant="playerPlay" cursor="default" :class="{
          'scale-1 lg:scale-[2] duration-300': step > 1,
          'duration-0 scale-0': step === 1,
          'shadow-win': step === 4 && roundResult === 1
        }" />
      </article>
      <article v-if="step === 4" class="hidden lg:flex flex-col items-center gap-4">
        <h1 class="text-6xl whitespace-nowrap">{{ getEndMessage() }}</h1>
        <button class="uppercase tracking-[2px] text-dark bg-white py-2 w-full rounded-lg whitespace-nowrap"
          @click="step = 1">Play Again</button>
      </article>
      <article class="flex lg:flex-col flex-col-reverse items-center gap-8 lg:gap-16 relative">
        <h2 v-if="step > 1">The House Picked</h2>
        <figure v-if="step === 2" class="bg-black bg-opacity-30 rounded-full w-28 h-28 m-4 lg:scale-[2] lg:m-28" />
        <Play class="lg:m-24 transition-all" :variant="computerPlay" cursor="default" :class="{
          'scale-1 lg:scale-[2] relative duration-300': step > 2,
          'duration-0': step === 1,
          'scale-0 absolute': step <= 2,
          'shadow-win': step === 4 && roundResult === -1
        }" />
      </article>
    </section>
    <article v-if="step === 4" class="flex lg:hidden flex-col items-center gap-4">
      <h1 class="text-6xl whitespace-nowrap">{{ getEndMessage() }}</h1>
      <button class="uppercase tracking-[2px] text-dark bg-white py-2 w-full rounded-lg whitespace-nowrap text-lg"
        @click="step = 1">Play Again</button>
    </article>
    <Modal v-show="showModal" @close="showModal = false" />
  </main>
</template>

<style scoped>
.shadow-win {
  box-shadow: 
    0px 0px 0px 30px #ffffff10,
    0px 0px 0px 60px #ffffff08,
    0px 0px 0px 90px #ffffff06;
}
</style>