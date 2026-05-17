<template>
  <section id="about" class="section">
    <div class="container">
      <h2>{{ t('about.title') }}</h2>
      <p>{{ t('about.text') }}</p>

      <div class="features">
        <div class="feature" v-for="f in tm('about.features')" :key="f.title">
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  background: var(--color-surface);
  color: var(--color-text-primary);
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md, 1rem);
  box-shadow: var(--shadow-soft);
  text-align: center;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.feature h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

.feature p {
  color: var(--color-text-secondary);
  margin: 0;
}

</style>
