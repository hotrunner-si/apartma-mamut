<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="brand">
        <h3>Mamut 1850</h3>
        <p>{{t('footer.description')}}</p>
      </div>

      <div class="contact">
        <a :href="`tel:${footer.phone.replace(/\s+/g, '')}`">
          {{footer.phone}}
        </a>
        <a :href="`mailto:${footer.email}`">
          {{footer.email}}
        </a>
        <a :href="footer.google_maps">
          {{footer.town}}, {{footer.country}}
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} {{ footer.brand }}. {{t('footer.rights')}}</p>
      <a :href="footer.authors">
        {{ t('footer.authors') }}
      </a>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

import { footer } from '@/data/content'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.app-footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  color: #1f2937;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.brand h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.brand p {
  margin: 0.75rem 0 0;
  max-width: 420px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact a,
.contact span {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.contact a:hover {
  color: var(--color-text-primary);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 1.25rem 1.5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  flex-wrap: wrap;
  text-align: center;
}

.footer-bottom p, a {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .contact {
    align-items: flex-end;
    text-align: right;
  }
}
</style>