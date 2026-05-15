<template>
  <header class="navbar">
    <div class="logo">
      <a :href="navBar.mainLink">
        {{ t('brand.name') }}
      </a>
    </div>

    <ul class="nav-links">
      <li v-for="item in navBar.items" :key="item.nameKey">
        <a :href="item.link">
          {{ t(item.nameKey) }}
        </a>
      </li>
    </ul>

    <div class="navbar-controls">
      <!-- Language Switch -->
      <div class="language-switch">
        <button
          type="button"
          class="language-button"
          :class="{ active: language === 'EN' }"
          @click="language = 'EN'"
        >
          EN
        </button>

        <button
          type="button"
          class="language-button"
          :class="{ active: language === 'SI' }"
          @click="language = 'SI'"
        >
          SI
        </button>
      </div>

      <!-- Dark Mode Toggle -->
      <button
        type="button"
        class="theme-button"
        @click="darkMode = !darkMode"
      >
        {{ darkMode ? t('nav.lightMode') : t('nav.darkMode') }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useSettings } from '@/composables/useSettings'
import { navBar } from '@/data/content'

const { t } = useI18n()
const { language, darkMode } = useSettings()
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: rgba(var(--color-surface), 0.8);
  backdrop-filter: blur(10px);
}

.logo a,
.logo {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
}
.logo a:hover {
  color: var(--color-primary-hover);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
  color: var(--color-text-primary)
}

.nav-links a {
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-primary-hover);
}

/* Right-side controls */
.navbar-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Language switch */
.language-switch {
  display: flex;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
}

.language-button {
  padding: 0.4rem 0.9rem;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.language-button.active {
  background: var(--color-primary);
  color: white;
}

/* Dark mode button */
.theme-button {
  padding: 0.55rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.theme-button:hover {
  border-color: var(--color-primary);
}

/* Mobile */
@media (max-width: 992px) {
  .navbar {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .nav-links {
    order: 3;
    flex: 0 0 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .navbar-controls {
    order: 2;
  }
}
</style>