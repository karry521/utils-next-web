import dynamic from 'next/dynamic';
import { useRef, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
const CustomEditor = dynamic(() => import('@/components/custom-editor'), { ssr: false });

const Home = () => {

  const editorRef = useRef(null)
  const [width1, setWidth1] = useState(70)
  const [width2, setWidth2] = useState(98)

  const [unit1, setUnit1] = useState('%')
  const [unit2, setUnit2] = useState('%')
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

  const copyCode = () => {
    const code = editorRef.current.getData()

    const parser = new DOMParser()
    const doc = parser.parseFromString(code, 'text/html')

    const figure = doc.querySelectorAll('figure')[0]

    if (figure) {

      if (!isChecked) {
        const className = 'table' + new Date().getTime()

        figure.innerHTML += `<style>
        @media (max-width:768px){
          .${className}{
            width:${document.getElementById('phoneWidth').getAttribute('value') + unit2} !important;
          }
        }
        </style>`

        figure.setAttribute('class', className)

        figure.style.width = document.getElementById('pcWidth').getAttribute('value') + unit1

        copyToClipboard(figure.outerHTML)
      } else {
        copyToClipboard(figure.outerHTML + `<style>
        .table{
          width:${document.getElementById('pcWidth').getAttribute('value') + unit1} !important;
        }
        @media (max-width:768px){
          .table{
            width:${document.getElementById('phoneWidth').getAttribute('value') + unit2} !important;
          }
        }
        </style>`)
      }


    } else {
      copyToClipboard(code)
    }
  }

  const copyToClipboard = async (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        alert('复制成功');
      } catch (err) {
        console.error('复制失败', err);
        alert('复制失败');
      }
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = text
      try {
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        alert('复制成功')
        document.body.removeChild(textarea)
      } catch (err) {
        console.error('复制失败', err);
        alert('复制失败')
      }
      console.log('Clipboard API not supported');
    }
  };

  return (
    <>
      <Head>
        <title>表格编辑器</title>
      </Head>
      <div className='w-[1440px] mx-auto mt-20 flex flex-col items-center gap-4'>

        <div className='w-full flex justify-center items-center gap-[5rem]'>
          <div className='flex justify-center items-center gap-2'>
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="checkbox" className="select-none cursor-pointer">
              宽度是否应用于本文章所有表格
            </label>
          </div>
          <div className='flex justify-center items-center'>
            PC端宽度：<input type='number' id='pcWidth' className='w-[99px] [border:1px_skyblue_solid] rounded-[8px] pl-4 mr-2' value={width1} onChange={(e) => setWidth1(e.target.value)} />
            <div
              className='w-[36px] flex justify-between relative cursor-pointer select-none'
              onMouseOver={() => setFlag1(true)}
              onMouseOut={() => setFlag1(false)}
            >
              {unit1}
              <Image src='/arrow.svg' width={20} height={20} className={`transition-[rotate.2s_linear] ${flag1 ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />
              <ul className={`absolute right-[8%] top-[100%] text-white bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${flag1 ? 'max-h-[64px]' : 'max-h-0'}`}>
                <li className='py-1 hover:text-sky-200' onClick={() => setUnit1('%')}>%</li>
                <li className='py-1 hover:text-sky-200' onClick={() => setUnit1('px')}>px</li>
              </ul>
            </div>
          </div>
          <div className='flex justify-center items-center select-none'>
            移动端宽度：<input type='number' id='phoneWidth' className='w-[99px] [border:1px_skyblue_solid] rounded-[8px] pl-4 mr-2' value={width2} onChange={(e) => setWidth2(e.target.value)} />
            <div
              className='w-[36px] flex justify-between relative cursor-pointer'
              onMouseOver={() => setFlag2(true)}
              onMouseOut={() => setFlag2(false)}
            >
              {unit2}
              <Image src='/arrow.svg' width={20} height={20} className={`transition-[rotate.2s_linear] ${flag2 ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />
              <ul className={`absolute right-[8%] top-[100%] text-white bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${flag2 ? 'max-h-[64px]' : 'max-h-0'}`}>
                <li className='py-1 hover:text-sky-200' onClick={() => setUnit2('%')}>%</li>
                <li className='py-1 hover:text-sky-200' onClick={() => setUnit2('px')}>px</li>
              </ul>
            </div>
          </div>
          <button className='w-[120px] h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => copyCode()}>复制代码</button>
        </div>

        <div className="w-full mt-12 editor-container">
          <CustomEditor editorRef={editorRef} />
        </div>
      </div>
    </>
  )
}

export default Home