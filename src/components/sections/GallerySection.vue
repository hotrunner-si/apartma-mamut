<template>
  <section id="gallery" class="section section-alt">
    <div class="container">
      <h2>{{ t('gallery.title') }}</h2>
      <p class="section-subtitle">{{ t('gallery.text') }}</p>

      <div class="gallery-grid">
        <img
          v-for="(img, i) in gallery.grid.slice(0, 2)"
          :key="i"
          :src="img.src"
          class="gallery-image-grid"
          draggable="false"
          :alt="t(img.alt)"
        />
      </div>

      <div class="gallery-wrapper">

        <div class="gallery-track" ref="galleryTrack">
          <img
            v-for="(img, i) in gallery.tape"
            :key="i"
            :src="img.src"
            class="gallery-image"
            draggable="false"
            :alt="t(img.alt)"
          />
        </div>

        <div class="gallery-controls">
          <button
            class="gallery-btn"
            type="button"
            @click="scrollGallery('left')"
          >
            ‹
          </button>

          <button
            class="gallery-btn"
            type="button"
            @click="scrollGallery('right')"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { gallery } from '@/data/content'

const { t } = useI18n()

const galleryTrack = ref(null)

function scrollGallery(direction) {
  const el = galleryTrack.value
  if (!el) return

  const scrollAmount = 340

  el.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.gallery-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.gallery-grid .gallery-image-grid {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.gallery-track {
  display: flex;
  gap: 1rem;

  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;

  width: 100%;
  padding: 1rem 0;
}

.gallery-track::-webkit-scrollbar {
  display: none;
}

.gallery-image {
  width: 300px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 1rem;
  flex-shrink: 0;
  box-shadow: var(--shadow-soft);
}

.gallery-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.gallery-btn {
  position: static;
  width: 44px;
  height: 44px;

  border: none;
  border-radius: 50%;

  background: rgba(49, 39, 15, 0.85);
  color: white;

  font-size: 1.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-btn.left {
  left: -60px;
}

.gallery-btn.right {
  right: -60px;
}

@media (max-width: 668px) {
  .gallery-image {
    width: 280px;
    height: 200px;
  }

  /* Hide arrows on smaller screens; swipe scrolling works naturally */
  .gallery-btn {
    display: none;
  }
}
</style>