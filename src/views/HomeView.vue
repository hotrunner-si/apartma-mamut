<script setup>

import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import GallerySection from '../components/sections/GallerySection.vue'
import PricesSection from '../components/sections/PricesSection.vue'
import AvailabilitySection from '../components/sections/AvailabilitySection.vue'
import LocationSection from '../components/sections/LocationSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

import { useSeo } from '@/seo/useSeo'
useSeo()

</script>

<template>

  <HeroSection />
  <AboutSection />
  <GallerySection />
  <PricesSection />
  <AvailabilitySection />
  <LocationSection />
  <ContactSection />

</template>

