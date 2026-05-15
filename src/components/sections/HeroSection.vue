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
  padding: 6rem 1rem 2rem;
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
  color: var(--color-text-primary);
  max-width: 900px;
}

.hero-content h1 {
  font-size: 5rem;
  color: white;
  text-shadow: var(--hero-text-shadow);
  letter-spacing: -0.02em;
}

.hero-content p {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: var(--hero-text-shadow);
  font-size: 1.25rem;
}
</style>