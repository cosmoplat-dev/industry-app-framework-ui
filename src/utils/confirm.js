import { MessageBox } from 'element-ui'

export function handleConfirm(text = '确定执行此操作吗？', type = 'warning') {
  return MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: type,
    center: true
  })
}
