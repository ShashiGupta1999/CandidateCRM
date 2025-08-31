/// <reference types="jest" />
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import EditCandidateForm from '../src/components/Layout/editCandidateForm.vue'

describe('EditCandidateForm', () => {
  it('renders all required fields', () => {
    const pinia = createPinia()
    const wrapper = mount(EditCandidateForm, {
      props: { show: true, close: jest.fn() },
      global: { plugins: [pinia] }
    })
    expect(wrapper.find('input[name="name"]').exists()).toBe(true)
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
    expect(wrapper.find('input[name="phone"]').exists()).toBe(true)
  })

  it('shows error for invalid email', async () => {
    const pinia = createPinia()
    const wrapper = mount(EditCandidateForm, {
      props: { show: true, close: jest.fn() },
      global: { plugins: [pinia] }
    })
    await wrapper.find('input[name="email"]').setValue('invalid')
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.text()).toContain('Email must be in the format username@gmail.com')
  })

  it('shows error for invalid phone', async () => {
    const pinia = createPinia()
    const wrapper = mount(EditCandidateForm, {
      props: { show: true, close: jest.fn() },
      global: { plugins: [pinia] }
    })
    await wrapper.find('input[name="phone"]').setValue('123')
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.text()).toContain('Phone must start with country code and have 10 digits (e.g., +911234567890)')
  })

 
})
