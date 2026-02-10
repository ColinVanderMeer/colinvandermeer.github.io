---
layout: article
title: UNBEATABLE Review
description: wip, (very broken on mobile)
date: 2026-02-09
tags:
  - Game Review
---

<style>
  .treble-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }

  .treble-box {
    display: flex;
    align-items: center;
    padding: var(--spacing-md);
    background: var(--color-secondary);
    border-width: 5px;
    border-color: var(--color-primary);
    border-style: solid;
    border-radius: var(--radius-lg);
    position: relative;
    width: 90%;
  }

  .treble-character {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
  }

  .treble-character img {
    height: 30vw;
    object-fit: contain;
  }

  .treble-bubble {
    flex: 1;
    text-align: center;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .treble-bubble > div {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .treble-bubble img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  #bubbleText {
    position: absolute;
    width: 70%;
    font-size: 1.3rem;
    line-height: 1.4;
    margin: 0;
    padding: 0 1rem;
    color: black;
    font-weight: bold;
    left: 22%;
  }

  .mute-button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: transform 0.2s;
  }

  .mute-button:hover {
    transform: scale(1.1);
  }

  .mute-button.muted {
    opacity: 0.5;
  }
</style>

I think something Treble says during Episode 4 really applies to the game as a whole.

<div class="treble-container">
  <div class="treble-box">
    <div class="treble-character" id="trebleCharacter">
      <img src="/blog/unbeatable/trebleIdle.gif" alt="treble" />
    </div>
    
    <div class="treble-bubble" id="trebleBubble">
      <div>
        <img src="/blog/unbeatable/bubbleLeft.png" alt="Speech bubble" />
        <p id="bubbleText"></p>
      </div>
    </div>

    <button class="mute-button" id="muteButton" aria-label="Toggle mute">🔊</button>
  </div>
</div>

<script>
  const trebleSounds = [
    '/blog/unbeatable/treble1.mp3',
    '/blog/unbeatable/treble2.mp3',
    '/blog/unbeatable/treble3.mp3',
    '/blog/unbeatable/treble4.mp3',
    '/blog/unbeatable/treble5.mp3',
    '/blog/unbeatable/treble6.mp3'
  ];

  const trebleLines = [
    'to me, and i really mean this honestly. it feels like the soul is missing from the thing.',
    'i\'m not some weird lo-fi purist, but it really is too clean.',
    'there\'s like... this energy\'s gone from it.',
    'y\'know, some messiness is <em>good</em>.',
    'it\'s like... restoring a painting. you have to be careful because... you can scrape paint off alongside the dirt.',
    'and i think we do a little bit of our painting <em>with</em> dirt.'
  ];

  const bubbleImages = {
    left: '/blog/unbeatable/bubbleLeft.png',
    middle: '/blog/unbeatable/bubbleMiddle.png'
  };

  let currentSoundIndex = 0;
  let isMuted = false;
  let isPlaying = false;
  let bubbleAnimationId = null;
  let currentBubble = 'left';

  const trebleCharacter = document.getElementById('trebleCharacter');
  const trebleBubble = document.getElementById('trebleBubble');
  const muteButton = document.getElementById('muteButton');
  const bubbleImg = trebleBubble.querySelector('img');
  const bubbleText = document.getElementById('bubbleText');

  function startBubbleAnimation() {
    if (bubbleAnimationId) return;
    
    currentBubble = 'left';
    bubbleImg.src = bubbleImages.left;
    
    bubbleAnimationId = setInterval(() => {
      currentBubble = currentBubble === 'left' ? 'middle' : 'left';
      bubbleImg.src = currentBubble === 'left' ? bubbleImages.left : bubbleImages.middle;
    }, 250);
  }

  function stopBubbleAnimation() {
    if (bubbleAnimationId) {
      clearInterval(bubbleAnimationId);
      bubbleAnimationId = null;
    }
  }

  function playSound() {
    if (isPlaying) return;
    if (currentSoundIndex == 6) {
      currentSoundIndex = 0;
      bubbleText.innerHTML = "";
      return;
    }

    isPlaying = true;
    bubbleText.innerHTML = trebleLines[currentSoundIndex];
    
    const audio = new Audio(trebleSounds[currentSoundIndex]);
    
    if (!isMuted) {
      audio.onplay = () => {
        startBubbleAnimation();
      };

      audio.onended = () => {
        stopBubbleAnimation();
        bubbleImg.src = bubbleImages.left;
        currentSoundIndex = currentSoundIndex + 1;
        isPlaying = false;
      };

      audio.play().catch(err => console.error('Error playing sound:', err));
    } else {
      isPlaying = false;
      currentSoundIndex = currentSoundIndex + 1;
    }
  }

  trebleCharacter.addEventListener('click', () => {
    playSound();
  });

  trebleBubble.addEventListener('click', () => {
    playSound();
  });

  muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    muteButton.textContent = isMuted ? '🔇' : '🔊';
    muteButton.classList.toggle('muted');
  });
</script>