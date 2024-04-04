<script setup>
const props = defineProps({
  variant: String,
  cursor: {
    default: 'pointer',
    type: String
  }
});
</script>

<template>
  <div class="rounded-full flex items-center justify-center w-36 h-36 shrink-0"
    :title="props.cursor === 'pointer' ? props.variant.charAt(0).toUpperCase() + props.variant.slice(1) : ''" :class="{
      'bg-scissors shadow-scissors': props.variant === 'scissors',
      'bg-rock shadow-rock': props.variant === 'rock',
      'bg-paper shadow-paper': props.variant === 'paper',
      'bg-lizard shadow-lizard': props.variant === 'lizard',
      'bg-spock shadow-spock': props.variant === 'spock',
      'cursor-pointer': props.cursor === 'pointer'
    }">
    <div class="rounded-full bg-white flex items-center justify-center shadow-inner-circle h-28 w-28">
      <img :src="`/images/icon-${props.variant}.svg`" :alt="props.variant.charAt(0).toUpperCase() + props.variant.slice(1)" :class="{'relative left-1': props.variant === 'spock'}" />
    </div>
  </div>
</template>