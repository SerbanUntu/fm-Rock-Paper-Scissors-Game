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
      <section class="flex flex-col bg-white rounded-md w-36 h-28 items-center justify-center">
        <p class="text-score tracking-[2px]">Score</p>
        <h1 class="text-dark overflow-hidden text-ellipsis whitespace-nowrap w-full text-center">{{ totalScore }}</h1>
      </section>
    </header>
    <button
      class="absolute bottom-8 right-[calc(50%_-_4rem)] md:right-8 border-2 border-white w-32 h-10 rounded-lg tracking-widest uppercase flex items-center justify-center"
      @click="showModal = true">Rules</button>
    <div class="flex flex-row">
      <Play v-if="step === 1" v-for="play in plays" :variant="play" @click="{
          playerPlay = play;
          computerChoose();
        }" />
    </div>
    <div class="flex flex-row gap-10 items-center">
      <div v-if="step > 1" class="flex flex-col items-center gap-16">
        <h2>You Picked</h2>
        <Play class="scale-[2] m-24" :variant="playerPlay" cursor="default" :class="{
          'shadow-win': step === 4 && roundResult === 1
        }" />
      </div>
      <div v-if="step === 4" class="flex flex-col items-center gap-4">
        <h1 v-if="step === 4">{{ getEndMessage() }}</h1>
        <button v-if="step === 4" class="uppercase tracking-[2px] text-dark bg-white py-2 w-full rounded-lg"
          @click="step = 1">Play Again</button>
      </div>
      <div v-if="step > 1" class="flex flex-col items-center gap-16">
        <h2>The House Picked</h2>
        <Play class="scale-[2] m-24" :variant="computerPlay" cursor="default" :class="{
          'invisible': step === 2, 'visible': step === 3,
          'shadow-win': step === 4 && roundResult === -1
        }" />
      </div>
    </div>
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