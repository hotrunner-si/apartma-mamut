<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <h2>{{t('contact.title')}}</h2>

      <form class="contact-form" @submit.prevent="submitForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Arrival Dates" />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" class="btn-primary">Send Inquiry</button>
        </form>
        <div class="contact-info">
          <p><strong>Email:</strong> {{ t('contact.email') }}</p>
          <p><strong>Phone:</strong> {{ t('contact.phone') }}</p>
        </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function submitForm() {
  alert('Something went wrong!')
}

</script>

<style scoped>
.contact-form {
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font: inherit;
}

.contact-info {
  margin-top: 2rem;
  text-align: center;
}
</style>