import { ref } from 'vue'
import { useVOnboarding } from 'v-onboarding'

export const useTour = () => {
  const wrapper = ref(null)
  const { start, goToStep, finish } = useVOnboarding(wrapper)

  const steps = [
    { attachTo: { element: '#foo' }, content: { title: 'Welcome!' } },
  ]

  return {
    wrapper,
    steps,
    start,
    goToStep,
    finish,
  }
}
