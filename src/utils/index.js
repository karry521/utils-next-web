// 复制代码
export const copyCode = (elementName) => {
  const code = document.getElementById(elementName).innerHTML
  return copyToClipboard(code)
}

// 复制json
export const copyCode2 = (elementName) => {
  const code = document.getElementById(elementName).innerHTML
  return copyToClipboard(code.replaceAll('<br>', '\n'))
}

// 拷贝到剪贴板
export const copyToClipboard = async (text) => {
  let returnText = ''
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      returnText = '复制成功'
    } catch (err) {
      console.error('复制失败', err)
      returnText = '复制失败'
    }
  } else {
    const textarea = document.createElement('textarea')
    textarea.value = text
    try {
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      returnText = '复制成功'
    } catch (err) {
      console.error('复制失败', err)
      returnText = '复制失败'
    }
    console.log('Clipboard API not supported')
  }

  return returnText
}

// 转换十六进制颜色为 rgba 的函数
export const hexToRgba = (hex, alpha) => {
  // 去掉 "#" 符号
  hex = hex.replace('#', '')

  // 分别提取 R、G、B
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  // 返回 RGBA 字符串
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// 文章效果预览
export const preview = (elementName, type = 0) => {
  if (document.getElementById(elementName).innerHTML === '') {
    alert('内容为空无法预览')
    return
  }

  const code = document.getElementById(elementName).firstChild.cloneNode(true)

  const demo = document.createElement('div')
  const h2 = document.createElement('h2')
  h2.innerText = '这是预览模板的内容'
  h2.style.setProperty('font-weight', 'bold', 'important')
  h2.style.setProperty('font-family', 'Roboto', 'important')
  demo.appendChild(h2)
  demo.appendChild(code)

  if (type !== 0) document.body.removeChild(document.getElementById(elementName))

  localStorage.setItem('testCode', demo.outerHTML)

  window.open('/demo', '_blank')
}
