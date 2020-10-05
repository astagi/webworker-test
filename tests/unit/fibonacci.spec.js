import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'


describe('Fibonacci App.vue', () => {
  it('should calculate Fibonacci number', async () => {
    const wrapper = shallowMount(App)
    await wrapper.find('input').setValue('10')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.result').element.innerHTML).toBe('Result: 89')
  })
})
