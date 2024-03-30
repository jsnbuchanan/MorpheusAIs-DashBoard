<template>
  <v-onboarding-wrapper ref="wrapper" :steps="steps" />
  <div>
    <button id="tour-welcome">
      {{ $t('tour.step-1-welcome.title') }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { VOnboardingWrapper } from 'v-onboarding'
import { useTour } from '@/composables'
import 'v-onboarding/dist/style.css'

const { wrapper, steps } = useTour()
</script>
