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
  <div class="absolute w-screen h-screen top-0 flex items-center justify-center">
    <div class="bg-white md:rounded-lg z-10 cursor-default flex flex-col py-24 md:py-8 p-8 w-screen h-screen md:w-fit md:h-fit items-center md:items-start justify-between">
      <div class="flex flex-row justify-between items-center">
        <h3 class="uppercase text-dark">Rules</h3>
        <img src="/images/icon-close.svg" class="cursor-pointer w-6 h-6 relative top-[0.125rem] hidden md:block" alt="Close modal" @click="$emit('close')" />
      </div>
      <Pentagon />
      <img src="/images/icon-close.svg" class="cursor-pointer w-6 h-6 md:hidden block" alt="Close modal" @click="$emit('close')" />
    </div>
    <div class="absolute w-screen h-screen bg-black bg-opacity-25 top-0 cursor-pointer" @click="$emit('close')" />
  </div>
</template>