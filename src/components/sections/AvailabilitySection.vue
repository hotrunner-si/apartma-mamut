<template>
  <section id="availability" class="section section-alt">
    <div class="container">
      <h2>{{ t('availability.title') }}</h2>
      <p>{{ t('availability.text') }}</p>

      <div class="availability-box">
        <p v-for="d in tm('availability.details')" :key="d">
          {{ d }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<style scoped>
.availability-box {
  max-width: 600px;
  margin: 2rem auto 0;
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}
</style>