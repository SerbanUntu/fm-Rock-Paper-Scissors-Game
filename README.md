# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users are able to:

- ✔️ View the optimal layout for the game depending on their device's screen size
- ✔️ **Bonus**: Maintain the state of the score after refreshing the browser
- ✔️ **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer

### Screenshot

![Screenshot](/public/images/screenshot.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/bonus-rock-paper-scissors-game-with-tailwind-wgivkgi_SZ)
- [Live Site](https://fm-rock-paper-scissors-game.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Static fonts
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Nuxt.js](https://nuxt.com/) - Vue framework
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

My first time building a modal from scratch, including this piece of code:
```js
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
```

How the house play is randomly determined:
```js
const plays = ['rock', 'paper', 'scissors', 'lizard', 'spock']
computerPlay.value = plays[Math.floor(Math.random() * 5)] // Generates a number between 0 and 4, matching the indexes of the array
```

How the game rules are processed:
```js
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
```

### Continued development

- I tried to implement more transitions and animations, but it seemed difficult. Maybe I will look into animation libraries.
- Using math to calculate the position of the buttons on the pentagon.
- Toggle between normal and bonus game variants.
- Use computed classes instead of manually writing them.

### Useful resources

- [Vue docs](https://vuejs.org/guide/introduction)
- [Cool Tailwind video](https://www.youtube.com/watch?v=pfaSUYaSgRo)
- The Mozilla references for [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) are always useful.

## Author

- LeetCode - [@SerbanUntu](https://leetcode.com/SerbanUntu/)
- Github - [@SerbanUntu](https://github.com/SerbanUntu)
- Frontend Mentor - [@SerbanUntu](https://www.frontendmentor.io/profile/SerbanUntu)