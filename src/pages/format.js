import { copyCode2, copyToClipboard } from '@/utils'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { styled } from '@mui/material'

dayjs.extend(duration)

// 自定义滚动条(ul
const ScrollTextarea = styled('textarea')({
  msOverflowStyle: 'none' /* 适用于 IE 和 Edge */,
  scrollbarWidth: 'thin' /* 适用于 Firefox，设置滚动条为细 */,
  '&::-webkit-scrollbar': {
    width: '4px' /* 设置滚动条的宽度为 4px */
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888' /* 设置滚动条滑块的颜色 */,
    borderRadius: '10px' /* 设置滑块圆角 */
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1' /* 设置滚动条轨道的颜色 */
  }
})

// 去除input标签上下箭头
const ArrowInput = styled('input')`
    -moz-appearance: textfield /* Firefox */
    -webkit-appearance: none /* Safari and Chrome */
    appearance: none /* General */

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none
    margin: 0 /* Optional: Removes margin for consistent layout */
    }

    &::focus::-webkit-outer-spin-button,
    &::focus::-webkit-inner-spin-button {
    -webkit-appearance: none /* Hide spin button on focus */
    }

    &::focus {
    outline: none /* Optional: Removes outline when focused */
    }
`

const Format = () => {
  const [dateValue, setDateValue] = useState(dayjs().format('YYYY-MM-DD'))
  const [dateEnable, setDateEnable] = useState(false)
  const [timeValue, setTimeValue] = useState(dayjs().format('HH:mm:ss'))
  const [timeEnable, setTimeEnable] = useState(false)
  const [time, setTime] = useState(null)
  const [textValue, setTextValue] = useState('')
  const [timestampValue, setTimestampValue] = useState('')
  const [timestampUnit, setTimestampUnit] = useState('ms')
  const [timestampType, setTimestampType] = useState('YYYY-MM-DD HH:mm:ss')
  const [timestampFlag, setTimestampFlag] = useState(false)
  const [timestampFlag2, setTimestampFlag2] = useState(false)
  const [timeResult, setTimeResult] = useState('')
  const [isTime, setIsTime] = useState(false)
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const [dateTimeDiff, setDateTimeDiff] = useState([0, 0, 0, 0, 0, 0])
  const [dateTimeDiff2, setDateTimeDiff2] = useState([0, 0, 0, 0, 0, 0])
  const [dateTimeDiffs, setDateTimeDiffs] = useState([0, 0, 0, 0, 0, 0])
  const [dateTimeDiffs2, setDateTimeDiffs2] = useState([0, 0, 0, 0, 0, 0])
  const [diffData, setDiffData] = useState('')
  const [diffNull, setDiffNull] = useState('')
  const [dateTimeType, setDateTimeType] = useState(1)
  const [dateTimeFlag, setDateTimeFlag] = useState(false)
  const [jsonData, setJsonData] = useState('')
  const [jsonNull, setJsonNull] = useState('')
  const [keyName, setKeyName] = useState('')
  const [keyNull, setkeyNull] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [flag, setFlag] = useState(false)
  const [settingParams, setSettingParams] = useState({
    type: true, // true:随机生成 false：固定值
    isDate: true, // true：日期 false：时间
    timeType: 0, // 0:时分秒 1：分秒
    startDate: dayjs().subtract(3, 'month').format('YYYY-MM-DD'), // 生成随机时间的开始日期
    startTime: '00:00:00', // 生成随机时间的开始日期
    endDate: dayjs().format('YYYY-MM-DD'), // 生成随机时间的结束日期
    endTime: '23:59:59', // 生成随机时间的结束时间
    startTime2: '00:00:00', // 生成随机时间的开始日期
    endTime2: '23:59:59', // 生成随机时间的结束时间
    sort: true, // 生成的时间是否排序
    sortOrder: 'desc', // asc:上小下大 desc 上大下小
    fixedValue: dayjs().format('YYYY-MM-DD HH:mm:ss'), // 要插入的固定值
    fixedNull: false, // 固定值输入框提示
    keySymbol: true, // true 保留符号，false去除符号
    totalFlag: false, // 启用时间总和
    totalTime: 1, // 时间总和数
    totalUnit: 0 // 时间总和单位 0：天 1:小时 2：分钟 3：秒
    // keyName: '', // 要插入到的的属性名
    // keyNull: false, // 属性名输入框提示
  })

  const unitList = ['天', '小时', '分钟', '秒']

  const [caseContent, setCaseContent] = useState('') // 大小写转换的结果
  const [caseNull, setCaseNull] = useState(false) // 大小写转换内容为空

  // 每秒获取一次当前时间
  useEffect(() => {
    const time = setInterval(() => {
      setTimeValue(new Date().toTimeString().split(' ')[0])
    }, 1000)

    setTime(time)

    return () => {
      clearInterval(time)
    }
  }, [])

  // 监听是否为24小时制
  useEffect(() => {
    const regex =
      /^\s*(?:(\d{1,2})\s*[h时]?\s*(\d{1,2})\s*[m分]?\s*(\d{1,2})\s*[s秒]?)|(?:^(\d{1,2})\s*[m分]\s*(\d{1,2})\s*[s秒]?)|(?:^(\d{1,2})\s*:\s*(\d{1,2}))|(?:^(\d{1,2})\s*:\s*(\d{1,2})\s*:\s*(\d{1,2}))\s*$/

    if (textValue.match(regex)) setIsTime(true)
    else setIsTime(false)
  }, [textValue])

  // 复制转换后的时间点
  const copyTimestamp = (date = null) => {
    if (!date) date = new Date().getTime()

    document.getElementById('timestampElement').innerText = date

    copyCode2('timestampElement')
  }

  // 获取24小时制时间转换为秒
  function convertToSeconds() {
    // 优化后的正则表达式，支持空格
    const regex =
      /^\s*(?:(\d{1,2})\s*[h时]?\s*(\d{1,2})\s*[m分]?\s*(\d{1,2})\s*[s秒]?)|(?:^(\d{1,2})\s*[m分]\s*(\d{1,2})\s*[s秒]?)|(?:^(\d{1,2})\s*:\s*(\d{1,2}))|(?:^(\d{1,2})\s*:\s*(\d{1,2})\s*:\s*(\d{1,2}))\s*$/

    // 匹配输入
    const matches = textValue.match(regex)

    let total = 0

    if (matches) {
      // 初始化小时、分钟和秒
      let hours = 0,
        minutes = 0,
        seconds = 0

      // 格式 9h3m12s, 9小时3分12秒, 9时3分12秒
      if (matches[1] && matches[2] && matches[3]) {
        hours = parseInt(matches[1], 10) || 0
        minutes = parseInt(matches[2], 10) || 0
        seconds = parseInt(matches[3], 10) || 0
      }
      // 格式 5分14秒
      else if (matches[4] && matches[5]) {
        minutes = parseInt(matches[4], 10) || 0
        seconds = parseInt(matches[5], 10) || 0
      }
      // 格式 04:31 或 3:4
      else if (matches[6] && matches[7]) {
        minutes = parseInt(matches[6], 10) || 0
        seconds = parseInt(matches[7], 10) || 0
      }
      // 格式 03:04:31 或 3:4:31
      else if (matches[8] && matches[9] && matches[10]) {
        hours = parseInt(matches[8], 10) || 0
        minutes = parseInt(matches[9], 10) || 0
        seconds = parseInt(matches[10], 10) || 0
      }

      // 将统一格式的时间转换为秒
      total = hours * 3600 + minutes * 60 + seconds

      // 调用 copyTimestamp 函数
      copyTimestamp(total)
    } else {
      console.error('输入的时间格式不正确')
    }
  }

  // 将设置的日期时间插入到json中
  const handleJsonData = () => {
    // 获取所有的属性名
    const keyArr = Array.from(new Set(jsonData.split(/(?:"([^"]+)"|([a-zA-Z_][a-zA-Z0-9_]*))\s*:/).filter((item, index) => (index % 3 === 1 || index % 3 === 2) && item !== undefined)))

    // 检查输入的属性名是否存在
    if (!keyArr.includes(keyName)) {
      alert('未找到你需要插入时间的属性名，请检查')
      return
    }

    console.log('keyArr:::', keyArr)

    // 转换为json字符串
    let nowJsonData = jsonData

    if (jsonData.trim().startsWith('{') && jsonData.trim().endsWith('}')) nowJsonData = jsonData.substring(1, jsonData.length - 1)

    nowJsonData = nowJsonData
      .trim()
      .replaceAll(/(?<!")\b([a-zA-Z0-9_]+)\b(?=\s*:)/g, '"$1"')
      .replaceAll(/:\s*([a-zA-Z_]+)(?=\s*[},\]])/g, ': "$1"')
      .replaceAll(/'(.*?)'/g, '"$1"')
      .replaceAll(/`(.*?)`/g, '"$1"')
    if (!nowJsonData.trim().startsWith('{') || !nowJsonData.trim().endsWith('}')) {
      nowJsonData = '{' + nowJsonData + '}'
    } else nowJsonData = jsonData

    console.log('nowJsonData:::', nowJsonData)

    // 转换为json对象用于修改数据
    let jsonObject = null
    try {
      jsonObject = JSON.parse(nowJsonData)
    } catch {
      alert('请输入正确的json格式数据，可以不包含最外层大括号，属性名跟属性值必须双引号包裹！！！')
    }

    // let newJsonData = ''
    // for (const key in jsonObject) {
    //     if (jsonObject[key] instanceof Array) {
    //         const values = generateTimestamp(jsonObject[key].length)
    //         Array.from(jsonObject[key]).forEach((item, index) => {
    //             if (settingParams.type) item[keyName] = values[index]
    //             else item[keyName] = values[0]
    //         })

    //         newJsonData = updateString(jsonData, jsonObject[key], keyName)
    //     }

    //     if (jsonObject[key] instanceof Object) console.log('object')

    //     if (key === keyName) {
    //         const values = generateTimestamp(1)
    //         newJsonData = jsonObject

    //         newJsonData = jsonData.replace(new RegExp(`${keyName}\\s*:\\s*\\d+`, 'g'), `${keyName}:${values[0]}`)
    //     }
    // }

    const newJsonData = processDynamicString(jsonData, keyName, generateTimestamp)

    console.log('newJsonData:::', newJsonData)

    setJsonData(newJsonData)
  }

  // 替换字符串中的值
  const processDynamicString = (originalString, keyName, generateTimestamp) => {
    // 统计目标属性名出现次数
    const countOccurrences = (str) => {
      const regex = new RegExp(`${keyName}\\s*:\\s*(\\d+|'[^']*'|"[^"]*"|\`[^\`]*\`)`, 'g')
      return (str.match(regex) || []).length
    }

    // 替换字符串中目标属性值
    const replaceValues = (str, timestamps) => {
      let index = 0
      return str.replace(new RegExp(`(${keyName}\\s*:\\s*)(\\d+|'[^']*'|"[^"]*"|\`[^\`]*\`)`, 'g'), (_, prefix) => `${prefix}${timestamps[index++]}`)
    }

    // 统计目标属性名的出现次数
    const occurrenceCount = countOccurrences(originalString)

    // 生成时间戳
    const timestamps = generateTimestamp(occurrenceCount)

    // 替换原始字符串
    const updatedString = replaceValues(originalString, timestamps)

    return updatedString
  }

  // 时分秒格式（HH:mm:ss）转秒数
  const timeToSeconds = (timeString, type) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number)

    if (type === 0) {
      // 时分秒
      return dayjs.duration({ hours, minutes, seconds }).asSeconds()
    } else {
      return dayjs.duration({ minutes, seconds }).asSeconds()
    }
  }

  // 根据规则设置生成对应的转换后时间
  const generateTimestamp = (length) => {
    let times = []
    const { type, isDate, timeType, startDate, startTime, endDate, endTime, startTime2, endTime2, sort, sortOrder, fixedValue, totalFlag, totalTime, totalUnit, fixedNull, keySymbol } = settingParams

    // 日期
    if (isDate) {
      // 随机生成
      if (type) {
        const start = dayjs(startDate + ' ' + startTime).valueOf()
        const end = dayjs(endDate + ' ' + endTime).valueOf()

        while (times.length < length) {
          const randomTimestamp = Math.floor(start + Math.random() * (end - start))
          times.push(randomTimestamp)
        }
      } else {
        // 固定值
        const fixedTimestamp = dayjs(fixedValue).valueOf()
        times.push(fixedTimestamp)
      }
    } else {
      // 随机生成
      if (type) {
        const seconds = [86400, 3600, 60, 1]

        // 总秒数
        const totalSeconds = totalTime * seconds[totalUnit]
        let nowSeconds = totalSeconds

        const start = timeType === 0 ? timeToSeconds(startTime2, 0) : timeToSeconds(startTime2, 1)
        const end = timeType === 0 ? timeToSeconds(endTime2, 0) : timeToSeconds(endTime2, 1)

        // 限制总秒数
        if (totalFlag) {
          while (times.length < length) {
            if (nowSeconds > 0) {
              const randomTimes = Math.floor(Math.random() * (nowSeconds + 1))
              nowSeconds -= randomTimes

              times.push(randomTimes)
            } else times.push(0)
          }
        } else {
          // 不限制总秒数
          while (times.length < length) {
            const randomTimestamp = Math.floor(start + Math.random() * (end - start))
            times.push(randomTimestamp)
          }
        }
      } else {
        // 固定值
        const fixedTimestamp = timeType === 0 ? timeToSeconds(fixedValue, 0) : timeToSeconds(fixedValue, 1)
        times.push(fixedTimestamp)
      }
    }

    // 排序
    if (type && sort) {
      if (sortOrder === 'asc') times = Array.from(times).sort((a, b) => a - b)
      else times = Array.from(times).sort((a, b) => b - a)
    }

    console.log('times:::', times)

    return Array.from(times)
  }

  // 动态替换原始字符串中的属性值
  const updateString = (original, data, field) => {
    let result = original
    data.forEach((item, index) => {
      const regex = new RegExp(`(\\{[^{}]*${field}:)\\s*[^,{}]+([^{}]*\\})`, 'g')
      let matchCount = 0

      result = result.replace(regex, (match, prefix, suffix) => {
        matchCount++
        if (matchCount === index + 1) {
          return `${prefix} ${item[field]}${suffix}`
        }
        return match
      })
    })
    return result
  }

  // 计算时间差
  const calculateDateTime = (startDate = startDateTime, endDate = endDateTime, type = 0, diffType = dateTimeType) => {
    let start = startDate ? startDate : dayjs().format('YYYY-MM-DD HH:mm:ss')
    let end = endDate ? endDate : dayjs().format('YYYY-MM-DD HH:mm:ss')

    if (!isNaN(start)) start = Number(start)
    if (!isNaN(end)) end = Number(end)

    if (dayjs(start).valueOf() > dayjs(end).valueOf()) {
      const date = start
      start = end
      end = date
    }

    const years = dayjs(end).diff(start, 'year')
    const months = dayjs(end).diff(dayjs(start).add(years, 'year'), 'month')
    const days = dayjs(end).diff(dayjs(start).add(years, 'year').add(months, 'month'), 'day')
    const hours = dayjs(end).diff(dayjs(start).add(years, 'year').add(months, 'month').add(days, 'day'), 'hour')
    const minutes = dayjs(end).diff(dayjs(start).add(years, 'year').add(months, 'month').add(days, 'day').add(hours, 'hour'), 'minute')
    const seconds = dayjs(end).diff(dayjs(start).add(years, 'year').add(months, 'month').add(days, 'day').add(hours, 'hour').add(minutes, 'minute'), 'second')

    const year = dayjs(end).diff(start, 'years')
    const month = dayjs(end).diff(start, 'months')
    const day = dayjs(end).diff(start, 'days')
    const hour = dayjs(end).diff(start, 'hours')
    const minute = dayjs(end).diff(start, 'minutes')
    const second = dayjs(end).diff(start, 'seconds')

    switch (diffType) {
      case 0: // 累计
        if (type === 0) {
          setDateTimeDiff((old) => {
            // 秒 -> 分钟
            const totalSeconds = old[5] + seconds
            const addMinutes = Math.floor(totalSeconds / 60)
            const newSecond = totalSeconds % 60

            // 分钟 -> 小时
            const totalMinutes = old[4] + minutes + addMinutes
            const addHours = Math.floor(totalMinutes / 60)
            const newMinute = totalMinutes % 60

            // 小时 -> 天
            const totalHours = old[3] + hours + addHours
            const addDays = Math.floor(totalHours / 24)
            const newHour = totalHours % 24

            // 天 -> 月（假设每月30天）
            const totalDays = old[2] + days + addDays
            const addMonths = Math.floor(totalDays / 30)
            const newDay = totalDays % 30

            // 月 -> 年（每年12个月）
            const totalMonths = old[1] + months + addMonths
            const addYears = Math.floor(totalMonths / 12)
            const newMonth = totalMonths % 12

            // 累加年份
            const newYear = old[0] + years + addYears

            // 返回新的时间差数组
            return [newYear, newMonth, newDay, newHour, newMinute, newSecond]
          })

          setDateTimeDiff2((old) => {
            // 秒 -> 分钟
            const totalSeconds = old[5] + second

            // 分钟 -> 小时
            const totalMinutes = old[4] + minute

            // 小时 -> 天
            const totalHours = old[3] + hour

            // 天 -> 月（假设每月30天）
            const totalDays = old[2] + day

            // 月 -> 年（每年12个月）
            const totalMonths = old[1] + month

            // 累加年份
            const newYear = old[0] + year

            // 返回新的时间差数组
            return [newYear, totalMonths, totalDays, totalHours, totalMinutes, totalSeconds]
          })
        } else {
          setDateTimeDiffs((old) => {
            // 秒 -> 分钟
            const totalSeconds = old[5] + seconds
            const addMinutes = Math.floor(totalSeconds / 60)
            const newSecond = totalSeconds % 60

            // 分钟 -> 小时
            const totalMinutes = old[4] + minutes + addMinutes
            const addHours = Math.floor(totalMinutes / 60)
            const newMinute = totalMinutes % 60

            // 小时 -> 天
            const totalHours = old[3] + hours + addHours
            const addDays = Math.floor(totalHours / 24)
            const newHour = totalHours % 24

            // 天 -> 月（假设每月30天）
            const totalDays = old[2] + days + addDays
            const addMonths = Math.floor(totalDays / 30)
            const newDay = totalDays % 30

            // 月 -> 年（每年12个月）
            const totalMonths = old[1] + months + addMonths
            const addYears = Math.floor(totalMonths / 12)
            const newMonth = totalMonths % 12

            // 累加年份
            const newYear = old[0] + years + addYears

            // 返回新的时间差数组
            return [newYear, newMonth, newDay, newHour, newMinute, newSecond]
          })

          setDateTimeDiffs2((old) => {
            // 秒 -> 分钟
            const totalSeconds = old[5] + second

            // 分钟 -> 小时
            const totalMinutes = old[4] + minute

            // 小时 -> 天
            const totalHours = old[3] + hour

            // 天 -> 月（假设每月30天）
            const totalDays = old[2] + day

            // 月 -> 年（每年12个月）
            const totalMonths = old[1] + month

            // 累加年份
            const newYear = old[0] + year

            // 返回新的时间差数组
            return [newYear, totalMonths, totalDays, totalHours, totalMinutes, totalSeconds]
          })
        }
        break
      case 1: // 不累计
        setDateTimeDiff([years, months, days, hours, minutes, seconds])

        setDateTimeDiff2([year, month, day, hour, minute, second])
        break
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full max-w-[1440px] p-4 mt-12 shadow-[0px_8px_22px_0px_#0000001F] rounded-[8px]'>
        <h2>时间转时间戳</h2>
        <div className='flex justify-start gap-6 mt-8'>
          <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => copyTimestamp()}>
            生成并复制当前时间点时间戳
          </button>
        </div>

        {/* 选择型格式转换 */}
        <div className='flex justify-start items-center mt-4 ml-[21%]'>
          {/* <input type='checkbox' value={dateEnable} className='cursor-pointer' onChange={() => setDateEnable(!dateEnable)} /> */}
          <input type='date' className='w-[128px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' disabled={dateEnable} value={dateValue} onChange={(e) => setDateValue(e.target.value)} />

          {/* <input type='checkbox' value={timeEnable} className='cursor-pointer ml-4' onChange={() => setTimeEnable(!timeEnable)} /> */}
          <input
            type='time'
            step='1'
            className='w-[121px] [border:1px_skyblue_solid] rounded-[8px] pl-4 ml-2 mr-2'
            disabled={timeEnable}
            value={timeValue}
            onChange={(e) => {
              clearInterval(time)
              setTimeValue(e.target.value)
            }}
          />

          <button className='w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]' onClick={() => copyTimestamp(new Date(dateValue + ' ' + timeValue).getTime())}>
            复制左侧时间点的时间戳
          </button>
          <button
            className='w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]'
            onClick={() => {
              const time = timeValue.split(':')
              let total = Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2])

              copyTimestamp(total)
            }}
          >
            复制左侧24小时制的秒数
          </button>
        </div>

        {/* 自适应型格式转换 */}
        <div className='flex justify-start items-center mt-4 ml-[21%]'>
          <input
            type='text'
            id='textValue'
            className='w-[268px] [border:1px_skyblue_solid] rounded-[8px] pl-2 outline-none'
            placeholder='在这里输入要转换的时间'
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />

          <button
            className='w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]'
            onClick={() => {
              if (textValue.trim() === '') document.getElementById('textValue').focus()
              else copyTimestamp(dayjs(textValue).valueOf())
            }}
          >
            复制左侧时间点的时间戳
          </button>
          <button
            className='w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px] disabled:text-gray-500'
            disabled={!isTime}
            onClick={() => {
              if (textValue.trim() === '') document.getElementById('textValue').focus()
              else convertToSeconds()
            }}
          >
            复制左侧24小时制的秒数
          </button>
        </div>

        {/* 时间戳转日期时间 */}
        <div className='flex justify-start items-center mt-4 ml-[21%]'>
          <input
            type='text'
            id='timestampValue'
            className='w-[268px] [border:1px_skyblue_solid] rounded-[8px] pl-2 outline-none'
            placeholder='在这里输入要转换的时间戳'
            value={timestampValue}
            onChange={(e) => setTimestampValue(e.target.value)}
          />

          <div className='w-[72px] flex justify-center relative cursor-pointer select-none ml-4' onMouseOver={() => setTimestampFlag(true)} onMouseOut={() => setTimestampFlag(false)}>
            {timestampUnit === 'ms' ? '毫秒' : '秒'}
            <Image
              src='/arrow.svg'
              alt='arrow'
              width={20}
              height={20}
              className={`transition-[rotate.2s_linear] ${timestampFlag ? 'rotate-[180deg]' : 'rotate[360deg]'} absolute top-[50%] -translate-y-[50%] right-0`}
            />

            <ul className={`absolute right-[8%] top-[100%] text-white text-center bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${timestampFlag ? 'max-h-[68px]' : 'max-h-0'} z-[52]`}>
              <li className='py-1 hover:text-sky-200' onClick={() => setTimestampUnit('ms')}>
                毫秒
              </li>
              <li className='py-1 hover:text-sky-200' onClick={() => setTimestampUnit('s')}>
                秒
              </li>
            </ul>
          </div>

          <div className='w-[225px] flex justify-center relative cursor-pointer select-none ml-4' onMouseOver={() => setTimestampFlag2(true)} onMouseOut={() => setTimestampFlag2(false)}>
            {timestampType}
            <Image
              src='/arrow.svg'
              alt='arrow'
              width={20}
              height={20}
              className={`transition-[rotate.2s_linear] ${timestampFlag2 ? 'rotate-[180deg]' : 'rotate[360deg]'} absolute top-[50%] -translate-y-[50%] right-0`}
            />

            <ul className={`absolute right-[8%] top-[100%] text-white text-center bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${timestampFlag2 ? 'max-h-[168px]' : 'max-h-0'} z-[52]`}>
              <li className='py-1 hover:text-sky-200' onClick={() => setTimestampType('YYYY-MM-DD HH:mm:ss')}>
                YYYY-MM-DD HH:mm:ss
              </li>
              <li className='py-1 hover:text-sky-200' onClick={() => setTimestampType('YYYY-MM-DD')}>
                YYYY-MM-DD
              </li>
              <li className='py-1 hover:text-sky-200' onClick={() => setTimestampType('HH:mm:ss')}>
                HH:mm:ss
              </li>
              <li className='py-1 hover:text-sky-200' onClick={() => setTimestampType('HH:mm')}>
                HH:mm
              </li>
              <li className='py-1 hover:text-sky-200' onClick={() => setTimestampType('mm:ss')}>
                mm:ss
              </li>
            </ul>
          </div>

          <button
            className='w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]'
            onClick={() => {
              console.log('timestampUnit:::', timestampUnit)
              console.log('timestampValue:::', timestampValue)
              const unit = { ms: 1, s: 1000 }
              switch (timestampType) {
                case 'YYYY-MM-DD HH:mm:ss':
                  setTimeResult(dayjs(Number(timestampValue) * unit[timestampUnit]).format('YYYY-MM-DD HH:mm:ss'))
                  break
                case 'YYYY-MM-DD':
                  setTimeResult(dayjs(Number(timestampValue) * unit[timestampUnit]).format('YYYY-MM-DD'))
                  break
                case 'HH:mm:ss':
                  setTimeResult(dayjs.duration(Number(timestampValue), 'seconds').format('HH:mm:ss'))
                  break
                case 'HH:mm':
                  setTimeResult(dayjs.duration(Number(timestampValue), 'seconds').format('HH:mm'))
                  break
                case 'mm:ss':
                  setTimeResult(dayjs.duration(Number(timestampValue), 'seconds').format('mm:ss'))
                  break
              }
            }}
          >
            点击转换
          </button>
          <input type='text' className='w-[213px] text-center bg-gray-300 rounded-[6px] ml-6 outline-none' placeholder='转换后的结果显示在这' value={timeResult} readOnly />
          {/* <button className='w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]' onClick={() => {
                        if (textValue.trim() === '') document.getElementById('textValue').focus()
                        else copyTimestamp(dayjs(textValue).valueOf())
                    }}>复制左侧时间点的时间戳</button>
                    <button className='w-auto ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px] disabled:text-gray-500' disabled={!isTime} onClick={() => {
                        if (textValue.trim() === '') document.getElementById('textValue').focus()
                        else convertToSeconds()
                    }}>复制左侧24小时制的秒数</button> */}
        </div>

        {/* 计算日期时间差 */}
        <div className='flex justify-start items-center mt-4 ml-[21%]'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              id='startDateTime'
              className='w-[268px] [border:1px_skyblue_solid] rounded-[8px] pl-2 outline-none'
              placeholder='在这里输入开始日期时间或时间戳'
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
            />
            <input
              type='text'
              id='endDateTime'
              className='w-[268px] [border:1px_skyblue_solid] rounded-[8px] pl-2 outline-none'
              placeholder='在这里输入结束日期时间或时间戳'
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
            />
          </div>

          <div className='w-[138px] flex justify-center relative cursor-pointer select-none' onMouseOver={() => setDateTimeFlag(true)} onMouseOut={() => setDateTimeFlag(false)}>
            {dateTimeType === 0 ? '每次结果累计' : '结果不累计'}
            <Image
              src='/arrow.svg'
              alt='arrow'
              width={20}
              height={20}
              className={`transition-[rotate.2s_linear] ${dateTimeFlag ? 'rotate-[180deg]' : 'rotate[360deg]'} ease-linear absolute top-[50%] -translate-y-[50%] right-0`}
            />

            <ul className={`absolute right-[8%] top-[100%] text-white text-center bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${dateTimeFlag ? 'max-h-[68px]' : 'max-h-0'} z-[52]`}>
              <li className='py-1 hover:text-sky-200' onClick={() => setDateTimeType(0)}>
                每次结果累计
              </li>
              <li className='py-1 hover:text-sky-200' onClick={() => setDateTimeType(1)}>
                结果不累计
              </li>
            </ul>
          </div>

          <button className='w-auto max-w-[121px] ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]' onClick={() => calculateDateTime()}>
            点击计算
          </button>

          <div className='flex flex-col gap-2'>
            <input
              type='text'
              className='w-[521px] text-center bg-gray-300 rounded-[6px] ml-6 outline-none'
              placeholder='计算后的结果显示在这'
              value={`两者相差: ${dateTimeDiff[0]}年 ${dateTimeDiff[1]}月 ${dateTimeDiff[2]}天 ${dateTimeDiff[3]}时 ${dateTimeDiff[4]}分 ${dateTimeDiff[5]}秒`}
              readOnly
            />

            <input
              type='text'
              className='w-[521px] text-center bg-gray-300 rounded-[6px] ml-6 outline-none'
              placeholder='计算后的结果显示在这'
              value={`总差: ${dateTimeDiff2[0]}年 / ${dateTimeDiff2[1]}月 / ${dateTimeDiff2[2]}天 / ${dateTimeDiff2[3]}时 / ${dateTimeDiff2[4]}分 / ${dateTimeDiff2[5]}秒`}
              readOnly
            />
          </div>
        </div>

        {/* 批量计算时间差 */}
        <div className='flex justify-start items-center mt-4 ml-[21%]'>
          <ScrollTextarea
            id='diffData'
            className={`w-[408px] min-h-[128px] rounded-[8px] pl-2 pt-2 outline-none placeholder:text-center placeholder:leading-[105px] mt-2  ${
              diffNull ? 'placeholder:text-red-500 caret-red-500 [border:1px_red_solid]' : '[border:1px_skyblue_solid]'
            }`}
            placeholder='请输入包含时间数组的大数组'
            value={diffData}
            onChange={(e) => {
              setDiffData(e.target.value)
              if (e.target.value !== '') setDiffNull(false)
            }}
          ></ScrollTextarea>

          <div className='flex flex-col gap-2'>
            <button
              className='w-auto max-w-[121px] ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]'
              onClick={() => {
                if (diffData.trim() === '') {
                  setDiffNull(true)
                  document.getElementById('diffData').focus()
                } else {
                  try {
                    let nowDiffData = diffData.replaceAll("'", '"')
                    if (!nowDiffData.trim().startsWith('[[') && !nowDiffData.trim().endsWith(']]')) {
                      nowDiffData = '[' + nowDiffData + ']'
                    }
                    if (!nowDiffData.trim().startsWith('{') && !nowDiffData.trim().endsWith('}')) {
                      nowDiffData = '{"list":' + nowDiffData + '}'
                    }

                    Array.from(JSON.parse(nowDiffData).list).forEach((item) => calculateDateTime(item[0], item[1], 1, 0))
                  } catch {
                    alert('请输入正确的数组！！！')
                  }
                }
              }}
            >
              批量计算
            </button>

            <button
              className='w-auto max-w-[121px] ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]'
              onClick={() => {
                setDateTimeDiffs([0, 0, 0, 0, 0, 0])
                setDateTimeDiffs2([0, 0, 0, 0, 0, 0])
              }}
            >
              重置结果
            </button>
          </div>

          <div className='flex flex-col gap-2'>
            <input
              type='text'
              className='w-[521px] text-center bg-gray-300 rounded-[6px] ml-6 outline-none'
              placeholder='计算后的结果显示在这'
              value={`累加相差: ${dateTimeDiffs[0]}年 ${dateTimeDiffs[1]}月 ${dateTimeDiffs[2]}天 ${dateTimeDiffs[3]}时 ${dateTimeDiffs[4]}分 ${dateTimeDiffs[5]}秒`}
              readOnly
            />

            <input
              type='text'
              className='w-[521px] text-center bg-gray-300 rounded-[6px] ml-6 outline-none'
              placeholder='计算后的结果显示在这'
              value={`累加总差: ${dateTimeDiffs2[0]}年 / ${dateTimeDiffs2[1]}月 / ${dateTimeDiffs2[2]}天 / ${dateTimeDiffs2[3]}时 / ${dateTimeDiffs2[4]}分 / ${dateTimeDiffs2[5]}秒`}
              readOnly
            />
          </div>
        </div>

        {/* 批量插入时间戳or秒数 */}
        <div className='flex justify-start items-center mt-4 ml-[21%]'>
          <ScrollTextarea
            id='jsonData'
            className={`w-[521px] min-h-[213px] rounded-[8px] pl-2 pt-2 outline-none placeholder:text-center placeholder:leading-[202px]  ${
              jsonNull ? 'placeholder:text-red-500 caret-red-500 [border:1px_red_solid]' : '[border:1px_skyblue_solid]'
            }`}
            placeholder='请输入json格式内容(可不包含最外层大括号)'
            value={jsonData}
            onChange={(e) => {
              setJsonData(e.target.value)
              if (e.target.value !== '') setJsonNull(false)
            }}
          ></ScrollTextarea>

          <div className='flex flex-col gap-4'>
            {/* 插入时间日期的属性名 */}
            <div className=' ml-4'>
              <label className='cursor-pointer'>
                <input
                  type='text'
                  id='keyName'
                  className={`w-[312px] rounded-[8px] cursor-pointer outline-none pl-2 ${keyNull ? 'placeholder:text-red-500 caret-red-500 [border:1px_red_solid]' : '[border:1px_skyblue_solid]'}`}
                  placeholder='在这里输入你要插入到的属性名'
                  value={keyName}
                  onChange={(e) => {
                    setKeyName(e.target.value)
                    if (e.target.value !== '') setkeyNull(false)
                  }}
                />
              </label>
            </div>
            <div>
              <button className='w-[128px] mx-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px]' onClick={() => setShowModal(true)}>
                点击设置插入规则
              </button>
              <span className='text-[12px]'>tips:默认采用近三个月的日期随机生成包含（年月日小时分钟秒）的时间戳</span>
            </div>
            <button
              className='w-[128px] ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px] disabled:text-gray-500'
              onClick={() => {
                if (jsonData.trim() === '') {
                  setJsonNull(true)
                  document.getElementById('jsonData').focus()
                } else if (keyName.trim() === '') {
                  setkeyNull(true)
                  document.getElementById('keyName').focus()
                } else handleJsonData()
              }}
            >
              插入生成的时间
            </button>
            <button className='w-[128px] ml-4 px-2 h-[32px] bg-sky-500 text-[14px] text-white rounded-[8px] disabled:text-gray-500' onClick={() => copyTimestamp(jsonData)}>
              复制json结果
            </button>
          </div>
        </div>
      </div>

      {/* 大小写转换 */}
      <div className='w-full max-w-[1440px] p-4 mt-12 shadow-[0px_8px_22px_0px_#0000001F] rounded-[8px]'>
        <h2>大小写转换</h2>

        <div className='flex items-center gap-x-[32px]'>
          <div className='flex items-center gap-x-[16px]'>
            <button
              className='w-auto px-6 h-[32px] bg-sky-500 text-white rounded-[8px]'
              onClick={() => {
                setCaseContent((old) => old.toUpperCase())
              }}
            >
              全部转大写
            </button>
            <button
              className='w-auto px-6 h-[32px] bg-sky-500 text-white rounded-[8px]'
              onClick={() => {
                setCaseContent((old) => old.toLowerCase())
              }}
            >
              全部转小写
            </button>
            <button
              className='w-auto px-6 h-[32px] bg-sky-500 text-white rounded-[8px]'
              onClick={() => {
                if (caseContent.trim()) {
                  copyToClipboard(caseContent)
                } else setCaseNull(true)
              }}
            >
              复制转换后的结果
            </button>
          </div>

          <ScrollTextarea
            id='caseContent'
            className={`w-[648px] min-h-[128px] rounded-[8px] pl-2 pt-2 outline-none placeholder:text-center placeholder:leading-[105px] mt-2  ${
              caseNull ? 'placeholder:text-red-500 caret-red-500 [border:1px_red_solid]' : '[border:1px_skyblue_solid]'
            }`}
            placeholder='请输入需要转换大小写的内容'
            value={caseContent}
            onChange={(e) => {
              if (e.target.value !== '') {
                setCaseContent(e.target.value)
                setCaseNull(false)
              }
            }}
          ></ScrollTextarea>
        </div>
      </div>

      {/* 用作存放需要复制的内容 */}
      <span id='timestampElement' className='hidden'></span>

      {/* 遮罩层 */}
      <div
        className={`w-[99vw] h-[100vh] bg-transparent absolute top-0 left-0 ${!showModal ? 'hidden' : ''} z-[52]`}
        onClick={() => {
          // if (!settingParams.type && settingParams.fixedValue.trim() === '') {
          //     setSettingParams(params => ({ ...params, fixedNull: true }))
          //     document.getElementById('fixedValue').focus()
          // } else if (settingParams.keyName.trim() === '') {
          //     setSettingParams(params => ({ ...params, keyNull: true }))
          //     document.getElementById('keyName').focus()
          // } else

          if (!settingParams.type && settingParams.fixedValue.trim() === '') {
            setSettingParams((params) => ({ ...params, fixedNull: true }))
            document.getElementById('fixedValue').focus()
          } else setShowModal(false)
        }}
      ></div>

      {/* 设置弹窗 */}
      <div
        className={`w-[521px] h-[454px] bg-[#FFFFFF] shadow-[0px_0px_22px_0px_#0000002F] rounded-[8px] absolute transition-top duration-150 ease-linear ${
          !showModal ? '-top-[545px]' : 'top-[6%]'
        } select-none z-[54]`}
      >
        <h2 className='h-[42px] flex items-center pl-4 text-[20px]'>时间插入规则设置</h2>
        <hr />

        <div className='p-4 flex flex-col gap-3'>
          {/* 插入数据类型 */}
          <div className='flex items-center gap-4'>
            <span>插入数据类型:</span>
            <label className='cursor-pointer'>
              <input type='radio' name='isDate' className='cursor-pointer' checked={settingParams.isDate} onChange={() => setSettingParams((params) => ({ ...params, isDate: true }))} />
              &nbsp;日期(2000-10-03)
            </label>
            <label className='cursor-pointer'>
              <input type='radio' name='isDate' className='cursor-pointer' checked={!settingParams.isDate} onChange={() => setSettingParams((params) => ({ ...params, isDate: false }))} />
              &nbsp;时间(13:14:52)
            </label>
          </div>

          {/* 时间格式 */}
          <div className={`flex items-center gap-4 ${settingParams.isDate ? 'text-gray-300' : ''}`}>
            <span>时间格式:</span>
            <label className='cursor-pointer'>
              <input
                type='radio'
                name='timeType'
                className='cursor-pointer'
                disabled={settingParams.isDate}
                checked={settingParams.timeType === 0}
                onChange={() => setSettingParams((params) => ({ ...params, timeType: 0 }))}
              />
              &nbsp;时分秒(13:14:52)
            </label>
            <label className='cursor-pointer'>
              <input
                type='radio'
                name='timeType'
                className='cursor-pointer'
                disabled={settingParams.isDate}
                checked={settingParams.timeType === 1}
                onChange={() => setSettingParams((params) => ({ ...params, timeType: 1 }))}
              />
              &nbsp;分秒(13:14)
            </label>
          </div>

          {/* 排序 */}
          <div className='flex items-center gap-4'>
            <span>排序:</span>
            <label className='cursor-pointer'>
              <input type='radio' name='sort' className='cursor-pointer' checked={settingParams.sort} onChange={() => setSettingParams((params) => ({ ...params, sort: true }))} />
              &nbsp;启用
            </label>
            <label className='cursor-pointer'>
              <input type='radio' name='sort' className='cursor-pointer' checked={!settingParams.sort} onChange={() => setSettingParams((params) => ({ ...params, sort: false }))} />
              &nbsp;关闭
            </label>

            <div className={`flex items-center ml-6 gap-4 ${!settingParams.sort ? 'text-gray-300' : ''}`}>
              <span>顺序:</span>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  name='sortOrder'
                  className='cursor-pointer'
                  disabled={!settingParams.sort}
                  checked={settingParams.sortOrder === 'desc'}
                  onChange={() =>
                    setSettingParams((params) => ({
                      ...params,
                      sortOrder: 'desc'
                    }))
                  }
                />
                &nbsp;降序
              </label>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  name='sortOrder'
                  className='cursor-pointer'
                  disabled={!settingParams.sort}
                  checked={settingParams.sortOrder === 'asc'}
                  onChange={() =>
                    setSettingParams((params) => ({
                      ...params,
                      sortOrder: 'asc'
                    }))
                  }
                />
                &nbsp;升序
              </label>
            </div>
          </div>

          {/* 根据区间随机生成 */}
          <div className='flex items-center gap-4'>
            <span>根据区间随机生成:</span>
            <label className='cursor-pointer'>
              <input type='radio' name='type' className='cursor-pointer' checked={settingParams.type} onChange={() => setSettingParams((params) => ({ ...params, type: true }))} />
              &nbsp;启用
            </label>
            <label className='cursor-pointer'>
              <input type='radio' name='type' className='cursor-pointer' checked={!settingParams.type} onChange={() => setSettingParams((params) => ({ ...params, type: false }))} />
              &nbsp;关闭
            </label>
          </div>

          {/* 时间生成区间 */}
          <div className={`flex flex-col items-start gap-2 ${!settingParams.type ? 'text-gray-300' : ''}`}>
            <span>时间生成区间:</span>
            <div className={`flex ${settingParams.isDate ? 'flex-col gap-2' : 'gap-4'}`}>
              <label className='cursor-pointer'>
                开始时间:&nbsp;
                {settingParams.isDate ? (
                  <Fragment>
                    <input
                      type='date'
                      className='w-[128px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2'
                      disabled={!settingParams.type}
                      value={settingParams.startDate}
                      onChange={(e) =>
                        setSettingParams((params) => ({
                          ...params,
                          startDate: e.target.value
                        }))
                      }
                    />
                    <input
                      type='time'
                      step='1'
                      className='w-[121px] [border:1px_skyblue_solid] rounded-[8px] pl-4 ml-2 mr-2'
                      disabled={!settingParams.type}
                      value={settingParams.startTime}
                      onChange={(e) =>
                        setSettingParams((params) => ({
                          ...params,
                          startTime: e.target.value
                        }))
                      }
                    />
                  </Fragment>
                ) : (
                  <input
                    type='time'
                    step='1'
                    className='w-[121px] [border:1px_skyblue_solid] rounded-[8px] pl-4 ml-2 mr-2'
                    disabled={!settingParams.type}
                    value={settingParams.startTime2}
                    onChange={(e) =>
                      setSettingParams((params) => ({
                        ...params,
                        startTime2: e.target.value
                      }))
                    }
                  />
                )}
              </label>
              <label className='cursor-pointer'>
                结束时间:&nbsp;
                {settingParams.isDate ? (
                  <Fragment>
                    <input
                      type='date'
                      className='w-[128px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2'
                      disabled={!settingParams.type}
                      value={settingParams.endDate}
                      onChange={(e) =>
                        setSettingParams((params) => ({
                          ...params,
                          endDate: e.target.value
                        }))
                      }
                    />
                    <input
                      type='time'
                      step='1'
                      className='w-[121px] [border:1px_skyblue_solid] rounded-[8px] pl-4 ml-2 mr-2'
                      disabled={!settingParams.type}
                      value={settingParams.endTime}
                      onChange={(e) =>
                        setSettingParams((params) => ({
                          ...params,
                          endTime: e.target.value
                        }))
                      }
                    />
                  </Fragment>
                ) : (
                  <input
                    type='time'
                    step='1'
                    className='w-[121px] [border:1px_skyblue_solid] rounded-[8px] pl-4 ml-2 mr-2'
                    disabled={!settingParams.type}
                    value={settingParams.endTime2}
                    onChange={(e) =>
                      setSettingParams((params) => ({
                        ...params,
                        endTime2: e.target.value
                      }))
                    }
                  />
                )}
              </label>
            </div>
          </div>

          {/* 根据固定值生成 */}
          <div className={`flex items-start gap-2 ${settingParams.type ? 'text-gray-300' : ''}`}>
            <span>根据固定值生成:</span>
            <label className='cursor-pointer'>
              <input
                type='text'
                id='fixedValue'
                className={`w-[312px] rounded-[8px] cursor-pointer outline-none pl-2 ${
                  !settingParams.type && settingParams.fixedNull ? 'placeholder:text-red-500 caret-red-500 [border:1px_red_solid]' : '[border:1px_skyblue_solid]'
                }`}
                placeholder='在这里输入你要插入的固定时间日期'
                value={settingParams.fixedValue}
                disabled={settingParams.type}
                onChange={(e) =>
                  setSettingParams((params) => ({
                    ...params,
                    fixedValue: e.target.value,
                    fixedNull: false
                  }))
                }
              />
            </label>
          </div>

          {/* 限制生成时间总和 */}
          <div className={`flex items-start gap-2 ${settingParams.isDate || !settingParams.type ? 'text-gray-300' : ''}`}>
            <span>限制生成时间总和:</span>
            <label className='cursor-pointer'>
              <input
                type='radio'
                name='totalFlag'
                disabled={settingParams.isDate || !settingParams.type}
                className='cursor-pointer'
                checked={settingParams.totalFlag}
                onChange={() => setSettingParams((params) => ({ ...params, totalFlag: true }))}
              />
              &nbsp;启用
            </label>
            <label className='cursor-pointer'>
              <input
                type='radio'
                name='totalFlag'
                className='cursor-pointer'
                disabled={settingParams.isDate || !settingParams.type}
                checked={!settingParams.totalFlag}
                onChange={() =>
                  setSettingParams((params) => ({
                    ...params,
                    totalFlag: false
                  }))
                }
              />
              &nbsp;关闭
            </label>
          </div>

          {/* 生成时间总和 */}
          <div className={`flex items-start gap-2 ${!settingParams.totalFlag || settingParams.isDate || !settingParams.type ? 'text-gray-300' : ''}`}>
            <span>生成时间总和:</span>
            <ArrowInput
              type='number'
              className='w-[58px] rounded-[8px] cursor-pointer outline-none pl-2 [border:1px_skyblue_solid]'
              min={1}
              value={settingParams.totalTime}
              onClick={(e) =>
                setSettingParams((old) => ({
                  ...old,
                  totalTime: e.target.value
                }))
              }
            />

            <div
              className='w-[54px] flex justify-between relative cursor-pointer select-none'
              onMouseOver={() => {
                if (settingParams.totalFlag && !settingParams.isDate && settingParams.type) setFlag(true)
              }}
              onMouseOut={() => setFlag(false)}
            >
              {unitList[settingParams.totalUnit]}
              <Image src='/arrow.svg' alt='arrow' width={20} height={20} className={`transition-[rotate.2s_linear] ${flag ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />

              <ul className={`absolute right-[8%] top-[100%] text-white text-center bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${flag ? 'max-h-[128px]' : 'max-h-0'}`}>
                <li className='py-1 hover:text-sky-200' onClick={() => setSettingParams((old) => ({ ...old, totalUnit: 0 }))}>
                  天
                </li>
                <li className='py-1 hover:text-sky-200' onClick={() => setSettingParams((old) => ({ ...old, totalUnit: 1 }))}>
                  小时
                </li>
                <li className='py-1 hover:text-sky-200' onClick={() => setSettingParams((old) => ({ ...old, totalUnit: 2 }))}>
                  分钟
                </li>
                <li className='py-1 hover:text-sky-200' onClick={() => setSettingParams((old) => ({ ...old, totalUnit: 3 }))}>
                  秒
                </li>
              </ul>
            </div>
          </div>

          {/* 插入时间日期的属性名 */}
          {/* <div className='flex items-start gap-2'>
                        <span>插入时间日期的属性名:</span>
                        <label className='cursor-pointer'>
                            <input type='text' id='keyName'
                                className={`w-[312px] rounded-[8px] cursor-pointer outline-none pl-2 ${settingParams.keyNull ? 'placeholder:text-red-500 caret-red-500 [border:1px_red_solid]' : '[border:1px_skyblue_solid]'}`}
                                placeholder='在这里输入你要插入到的属性名'
                                value={settingParams.keyName} onChange={e => setSettingParams(params => ({ ...params, keyName: e.target.value, keyNull: false }))} />
                        </label>
                    </div> */}

          <button
            className='w-[88px] px-6 h-[38px] bg-sky-500 text-white rounded-[8px] absolute bottom-3 right-4'
            onClick={() => {
              // if (!settingParams.type && settingParams.fixedValue.trim() === '') {
              //     setSettingParams(params => ({ ...params, fixedNull: true }))
              //     document.getElementById('fixedValue').focus()
              // } else if (settingParams.keyName.trim() === '') {
              //     setSettingParams(params => ({ ...params, keyNull: true }))
              //     document.getElementById('keyName').focus()
              // } else

              if (!settingParams.type && settingParams.fixedValue.trim() === '') {
                setSettingParams((params) => ({ ...params, fixedNull: true }))
                document.getElementById('fixedValue').focus()
              } else setShowModal(false)
            }}
          >
            确定
          </button>
        </div>
      </div>
    </div>
  )
}

export default Format
