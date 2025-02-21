import { useEffect, useMemo, useState } from 'react'
import styles from '@/styles/scratchLottery.module.scss'
import { useRouter } from 'next/router'

export default function Canvas() {

  const router = useRouter()

  const [num, setNum] = useState(3)
  const [flag, setFlag] = useState(false)

  function init() {
    let gj = document.querySelector('.gj')
    let jp = document.querySelector('#jp')
    let canvas = document.querySelector('#mask')
    let ctx = canvas.getContext('2d')

    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 遮罩层mask设置
    ctx.fillStyle = '#e0e0e0'
    ctx.fillRect(0, 0, 200, 100)
    ctx.fillStyle = '#ffffff'
    ctx.font = '16px 微软雅黑'
    ctx.fillText('刮奖区', 75, 55) // 文字在框中位置

    // 奖品部分逻辑
    let arr = ['谢谢惠顾', '再来er次', '再来3次', '再来一次']
    let randomNum = Math.random() * 100

    console.log(randomNum)
    if (randomNum < 10) {
      jp.innerHTML = arr[0]
    } else if (randomNum < 30) {
      jp.innerHTML = arr[1]
    } else if (randomNum < 60) {
      jp.innerHTML = arr[2]
    } else {
      jp.innerHTML = arr[3]
    }

    // 绘图部分
    let isDraw = false
    const startDrawing = () => (isDraw = true)
    const stopDrawing = () => (isDraw = false)
    const draw = (e) => {
      if (isDraw) {
        writeText(ctx, e, gj)
      }
    }

    // 鼠标事件
    canvas.onmousedown = startDrawing
    canvas.onmouseup = stopDrawing
    canvas.onmousemove = draw

    // 触摸事件
    canvas.ontouchstart = (e) => {
      e.preventDefault() // 防止滚动
      startDrawing()
      draw(e.touches[0]) // 使用触摸点
    }
    canvas.ontouchend = stopDrawing
    canvas.ontouchmove = (e) => {
      e.preventDefault() // 防止滚动
      draw(e.touches[0]) // 使用触摸点
    }
  }

  function writeText(ctx, e, gj) {
    ctx.beginPath()
    let x = e.pageX - gj.getBoundingClientRect().left
    let y = e.pageY - gj.getBoundingClientRect().top
    ctx.globalCompositeOperation = 'destination-out'
    ctx.closePath()
    ctx.arc(x, y, 10, 0, Math.PI * 2)
    ctx.fill()
  }

  useEffect(() => {
    init()

    const oldDay = !localStorage.getItem('cardNum') ? new Date().getDate() - 1 : JSON.parse(localStorage.getItem('cardNum')).time

    if (oldDay < new Date().getDate()) setNum(3)
    else setNum(JSON.parse(localStorage.getItem('cardNum')).num)
  }, [])

  const handleNum = () => {
    if (num > 0) {
      setNum(num - 1)

      localStorage.setItem('cardNum', JSON.stringify({
        time: new Date().getDate(),
        num: num - 1
      })
      )

      localStorage.removeItem('flag')

      router.reload(router.asPath)
    }
  }

  return (
    <div className={styles.container}>
      <div className="text-center">
        <h2>刮刮乐</h2>
      </div>

      <div className={`gj ${styles.gj} mt-4 cursor-pointer`} style={{ pointerEvents: num >= 0 ? 'auto' : 'none' }}>
        <div id='jp' className={`${styles.jp} select-none`}></div>
        <canvas id='mask' className={styles.mask} width={200} height={100}></canvas>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <p>剩余次数：{num}</p>
        <button className='w-[120px] h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={handleNum}>再来一次</button>
      </div>
    </div>
  )
}