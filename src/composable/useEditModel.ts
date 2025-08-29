import { ref } from 'vue'
export function useEditModal() {
  const showEdit = ref(false)
  function open() { showEdit.value = true }
  function close() { showEdit.value = false }
  return { showEdit, open, close }
}