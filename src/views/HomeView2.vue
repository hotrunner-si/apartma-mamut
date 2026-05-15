<template>
  <div class="app">
    <!-- Header / Hero -->
    <header class="hero" id="home">
      <nav class="navbar">
        <div class="logo">Apartment Bella Vista</div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#prices">Prices</a></li>
          <li><a href="#availability">Availability</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="hero-content">
        <h1>Your Perfect Stay in the Heart of Slovenia</h1>
        <p>
          Modern, comfortable, and fully equipped apartment ideal for couples,
          families, and business travelers.
        </p>
        <a href="#contact" class="btn-primary">Book Now</a>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2>About the Apartment</h2>
        <p>
          Apartment Bella Vista offers a cozy and elegant accommodation with
          stunning mountain views. Located near nature and local attractions,
          the apartment features a fully equipped kitchen, free Wi-Fi, private
          parking, and a spacious balcony.
        </p>

        <div class="features">
          <div class="feature">
            <h3>2 Bedrooms</h3>
            <p>Comfortable sleeping space for up to 6 guests.</p>
          </div>
          <div class="feature">
            <h3>Fully Equipped</h3>
            <p>Kitchen, washing machine, TV, and fast internet.</p>
          </div>
          <div class="feature">
            <h3>Great Location</h3>
            <p>Close to hiking trails, restaurants, and city center.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="section section-alt">
      <div class="container">
        <h2>Gallery</h2>
        <p class="section-subtitle">
          Scroll left or right to explore the apartment.
        </p>

        <div class="gallery-wrapper">
          <button class="gallery-btn left" @click="scrollGallery('left')">
            ‹
          </button>

          <div class="gallery-track" ref="galleryTrack">
            <img
              v-for="(image, index) in infiniteImages"
              :key="index"
              :src="image"
              :alt="`Apartment image ${index + 1}`"
              class="gallery-image"
            />
          </div>

          <button class="gallery-btn right" @click="scrollGallery('right')">
            ›
          </button>
        </div>
      </div>
    </section>

    <!-- Prices Section -->
    <section id="prices" class="section">
      <div class="container">
        <h2>Prices</h2>

        <div class="price-cards">
          <div class="price-card">
            <h3>Low Season</h3>
            <p class="price">€90 / night</p>
            <p>October – April</p>
          </div>

          <div class="price-card featured">
            <h3>High Season</h3>
            <p class="price">€130 / night</p>
            <p>May – September</p>
          </div>

          <div class="price-card">
            <h3>Weekly Stay</h3>
            <p class="price">€800 / week</p>
            <p>Best value for longer visits</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Availability Section -->
    <section id="availability" class="section section-alt">
      <div class="container">
        <h2>Availability</h2>
        <p>
          Check our current availability and contact us to confirm your desired
          dates.
        </p>

        <div class="availability-box">
          <p><strong>Available:</strong> Most weekends and holiday periods.</p>
          <p><strong>Minimum stay:</strong> 2 nights.</p>
          <p><strong>Check-in:</strong> After 15:00</p>
          <p><strong>Check-out:</strong> Before 10:00</p>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section id="location" class="section">
      <div class="container">
        <h2>Location</h2>
        <p>
          Situated in Kamnik, Slovenia, the apartment provides easy access to
          Velika Planina, Ljubljana, and the surrounding Alps.
        </p>

        <div class="map-placeholder">
          <p>📍 Kamnik, Slovenia</p>
          <p>You can replace this with a Google Maps iframe.</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section section-alt">
      <div class="container">
        <h2>Contact</h2>

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
          <p><strong>Email:</strong> info@apartmentbellavista.com</p>
          <p><strong>Phone:</strong> +386 40 123 456</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const galleryTrack = ref(null)

// Replace these with your own image paths in /public/images/
const images = [
  '/images/apartment1.jpg',
  '/images/apartment2.jpg',
  '/images/apartment3.jpg',
  '/images/apartment4.jpg',
  '/images/apartment5.jpg',
]

// Duplicate images to create infinite scrolling illusion
const infiniteImages = [...images, ...images, ...images]

function scrollGallery(direction) {
  const track = galleryTrack.value
  if (!track) return

  const scrollAmount = 340

  if (direction === 'left') {
    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    })
  } else {
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }
}

function setupInfiniteScroll() {
  const track = galleryTrack.value
  if (!track) return

  // Start in the middle copy of images
  const middlePosition = track.scrollWidth / 3
  track.scrollLeft = middlePosition

  track.addEventListener('scroll', () => {
    const oneSetWidth = track.scrollWidth / 3

    // If scrolling too far right, jump back to middle
    if (track.scrollLeft > oneSetWidth * 2) {
      track.scrollLeft = oneSetWidth
    }

    // If scrolling too far left, jump back to middle
    if (track.scrollLeft < 0) {
      track.scrollLeft = oneSetWidth
    }
  })
}

function submitForm() {
  alert('Thank you for your inquiry!')
}

onMounted(() => {
  setupInfiniteScroll()
})
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #1f2937;
  background: #ffffff;
}

.app {
  overflow-x: hidden;
}

/* Layout */
.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.section-alt {
  background: #f8fafc;
}

.section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 2.5rem;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  color: #dbeafe;
}

/* Hero */
.hero {
  min-height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url('/images/hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1rem 2rem;
}

.hero-content {
  max-width: 800px;
  color: white;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.btn-primary {
  display: inline-block;
  background: #2563eb;
  color: white;
  text-decoration: none;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

/* About */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  text-align: center;
}

/* Gallery */
.gallery-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.gallery-track {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 1rem 0;
}

.gallery-track::-webkit-scrollbar {
  display: none;
}

.gallery-image {
  width: 320px;
  height: 220px;
  object-fit: cover;
  border-radius: 1rem;
  flex-shrink: 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.gallery-btn {
  position: absolute;
  z-index: 2;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.8);
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.gallery-btn.left {
  left: -24px;
}

.gallery-btn.right {
  right: -24px;
}

/* Prices */
.price-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.price-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.price-card.featured {
  border: 2px solid #2563eb;
  transform: scale(1.03);
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: #2563eb;
}

/* Availability */
.availability-box {
  max-width: 600px;
  margin: 2rem auto 0;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

/* Location */
.map-placeholder {
  margin-top: 2rem;
  background: #e5e7eb;
  border-radius: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  color: #374151;
}

/* Contact */
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

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .section {
    padding: 4rem 0;
  }

  .section h2 {
    font-size: 2rem;
  }

  .gallery-image {
    width: 280px;
    height: 200px;
  }

  .gallery-btn {
    display: none;
  }
}
</style>