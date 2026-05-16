

<template>
  <section id="location">
    <div class="container">
      <h2>{{ t('location.title') }}</h2>
      <p>{{ t('location.text') }}</p>

      <div class="map">
        <img :src="location.map" :alt="t(location.mapAlt)" />
        <p>{{ location.address }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { location } from '@/data/content'

const { t } = useI18n()
</script>

<style scoped>
.map {
  text-align: center;
  border-radius: var(--radius-md);
}
</style>