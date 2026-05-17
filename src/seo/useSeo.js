import { useHead } from '@vueuse/head'
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useSeo() {
  const { locale, messages } = useI18n()

  const t = computed(() => messages.value[locale.value])

  const updateHead = () => {
    useHead({
      title: t.value.seo.title,
      meta: [
        { name: 'description', content: t.value.seo.description },
        { name: 'keywords', content: t.value.seo.keywords },

        { property: 'og:title', content: t.value.seo.title },
        { property: 'og:description', content: t.value.seo.description },
        { property: 'og:image:alt', content: t.value.seo.ogImageAlt },

        { name: 'twitter:card', content: t.value.seo.twitterCard }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(t.value.schema)
        }
      ]
    })
  }

  updateHead()

  watch(locale, () => {
    updateHead()
  })
}