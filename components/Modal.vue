<script setup>
  const emit = defineEmits(['close'])

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown)
  });

  const handleKeyDown = (event) => {  // Close Modal when `Esc` is pressed
    if (event.keyCode === 27) {
      emit('close')
    }
  };
</script>

<template>
  <section class="absolute w-screen h-screen top-0 flex items-center justify-center">
    <article class="bg-white lg:rounded-lg z-10 cursor-default flex flex-col py-24 lg:py-8 p-8 w-screen h-screen lg:w-fit lg:h-fit items-center lg:items-start justify-between lg:gap-8">
      <header class="flex flex-row justify-between items-center w-fit lg:w-full">
        <h3 class="text-dark text-3xl">Rules</h3>
        <img src="/images/icon-close.svg" class="cursor-pointer w-6 h-6 relative top-[0.125rem] hidden lg:block" alt="Close modal" @click="$emit('close')" />
      </header>
      <img src="/images/image-rules-bonus.svg" alt="Rules of the game" />
      <img src="/images/icon-close.svg" class="cursor-pointer w-6 h-6 lg:hidden block" alt="Close modal" @click="$emit('close')" />
    </article>
    <nav class="absolute w-screen h-screen bg-black bg-opacity-25 top-0 cursor-pointer" @click="$emit('close')" />
  </section>
</template>