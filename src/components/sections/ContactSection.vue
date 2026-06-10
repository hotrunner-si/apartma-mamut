<template>
  <section id="contact" class="section">
    <div class="container">
      <h2>{{t('contact.title')}}</h2>

      <form class="contact-form" @submit.prevent="submitForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <div class="date-inputs">
            <input type="text" placeholder="Arrival Dates" />
            <input type="text" placeholder="Departure Dates" />
          </div>
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
          <a href="https://www.booking.com/hotel/si/apartma-mamut.html" target="_blank" class="btn-secondary">
            {{ t('contact.booking') }}
          </a>
        </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function submitForm() {
  alert('Something went wrong. Please contact us via email or phone. \n Nekaj je šlo narobe. Prosimo, kontaktirajte nas preko emaila ali telefona.')
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
.date-inputs {
  display: flex;
  gap: 1rem;
}

.contact-info {
  margin-top: 2rem;
  text-align: center;
}
</style>