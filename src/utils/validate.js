/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return true
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
}

/** 验证字符是否全都为空格
 * @param {String} str
 */
export function isAllEmpty (str) {
  if (str && str.length > 0 && str.split(' ').join('').length === 0) {
    return false
  }
  return true
}
