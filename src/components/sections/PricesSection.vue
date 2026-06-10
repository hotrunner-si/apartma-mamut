<template>
  <section id="prices" class="section">
    <div class="container">
      <h2>{{ t('prices.title') }}</h2>
      <p>{{ t('prices.text1') }}</p>

      <div class="price-cards">
        <div
          v-for="p in prices.cards"
          :key="p.cardKey"
          class="price-card"
        >
          <h3>{{ t(p.cardKey) }}</h3>
          <div class="price">{{ p.price1 }}</div>
          <p>{{ p.season }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import { prices } from '../../data/content.js'
</script>

<style scoped>
.container {
  text-align: center;
}
.price-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.price-card {
  background: var(--color-surface);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.price-card:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
}
</style>