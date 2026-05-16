<template>
  <section id="gallery" class="section section-alt">
    <div class="container">
      <h2>{{ t('gallery.title') }}</h2>
      <p class="section-subtitle">{{ t('gallery.text') }}</p>

      <div class="gallery-grid">
        <img
          v-for="(img, i) in gallery.grid.slice(0, 2)"
          :key="'grid-' + i"
          :src="img.src"
          class="gallery-image-grid"
          draggable="false"
          :alt="t(img.alt)"
          @click="openLightbox(i)"
        />
      </div>

      <div class="gallery-wrapper">
        <div class="gallery-track" ref="galleryTrack">
          <img
            v-for="(img, i) in gallery.tape"
            :key="'tape-' + i"
            :src="img.src"
            class="gallery-image"
            draggable="false"
            :alt="t(img.alt)"
            @click="openLightbox(i + gridLength)"
          />
        </div>

        <div class="gallery-controls">
          <button class="gallery-btn" type="button" @click="scrollGallery('left')">
            ‹
          </button>

          <button class="gallery-btn" type="button" @click="scrollGallery('right')">
            ›
          </button>
        </div>
      </div>
    </div>

    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <button class="lightbox-nav left" @click.stop="prevImage">‹</button>

      <img class="lightbox-img" :src="currentImage" />

      <button class="lightbox-nav right" @click.stop="nextImage">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
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

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const gridLength = gallery.grid.length

const allImages = computed(() => [
  ...gallery.grid,
  ...gallery.tape,
])

const currentImage = computed(() =>
  allImages.value[currentIndex.value]?.src
)

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
  lockScroll(true)
}

function closeLightbox() {
  lightboxOpen.value = false
  lockScroll(false)
}

function nextImage() {
  currentIndex.value =
    (currentIndex.value + 1) % allImages.value.length
}

function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + allImages.value.length) %
    allImages.value.length
}

function handleKeys(e) {
  if (!lightboxOpen.value) return

  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeys)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeys)
  lockScroll(false)
})

function lockScroll(lock) {
  document.body.style.overflow = lock ? 'hidden' : ''
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
  transition: transform 0.3s ease
}
.gallery-image-grid:hover {
  transform: scale(1.01);
  box-shadow: var(--shadow-medium);
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
.gallery-image:hover {
  transform: scale(1.01);
  box-shadow: var(--shadow-medium);
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

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2000;
  cursor: pointer;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  cursor: default;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 48px;
  height: 48px;

  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: white;

  font-size: 2rem;
  cursor: pointer;
}

.lightbox-nav.left {
  left: 20px;
}

.lightbox-nav.right {
  right: 20px;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.25);
}
</style>