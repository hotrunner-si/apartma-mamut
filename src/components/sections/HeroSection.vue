<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { content } from '@/data/content'

const { t } = useI18n()

const bgStyle = computed(() => ({
  backgroundImage: `url(${content.hero.image})`,
}))
</script>

<template>
  <section class="hero">
    <div class="hero-bg" :style="bgStyle"></div>

    <div class="hero-overlay"></div>

    <div class="hero-content">
      <h1>{{ t('hero.title') }}</h1>
      <p>{{ t('hero.subtitle') }}</p>
      <a href="#contact" class="btn-primary">
        {{ t('hero.cta') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  padding: clamp(5rem, 8vh, 7rem) 1.25rem 3rem;
}

/* background image layer */
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  z-index: 0;
}

/* gradient overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    var(--hero-overlay-start),
    var(--hero-overlay-end)
  );
  z-index: 1;
}

/* content layer */
.hero-content {
  position: relative;
  z-index: 2;

  max-width: 900px;
  width: 100%;

  padding: 0 1rem;
  color: var(--color-text-primary);
}

/* =========================
   RESPONSIVE TYPOGRAPHY
   ========================= */

.hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.05;
  color: white;
  text-shadow: var(--hero-text-shadow);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.9);
  text-shadow: var(--hero-text-shadow);
  margin-bottom: 2rem;
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
}

/* =========================
   MOBILE OPTIMIZATION
   ========================= */
@media (max-width: 768px) {
  .hero {
    min-height: 95vh;
    padding: 6rem 1rem 2rem;
  }

  .hero-content {
    padding: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 95vh;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>