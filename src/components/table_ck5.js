
import { useRef, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const CustomEditor = dynamic(() => import('@/components/custom-editor'), { ssr: false, loading: () => <p className='w-full h-[440px] bg-[rgba(0,0,0,.05)] flex justify-center items-center text-sky-500'>Loading...</p> })
import { copyCode, preview } from '@/utils'

const Ck5 = () => {
    const [ckeditorShow, setCkeditorShow] = useState(false)

    const editorRef = useRef(null)
    const [width1, setWidth1] = useState(98)
    const [width2, setWidth2] = useState(98)

    const [unit1, setUnit1] = useState('%')
    const [unit2, setUnit2] = useState('%')
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)

    const [isChecked, setIsChecked] = useState(false)

    const generateCode = (type = 0) => {
        const code = editorRef.current.getData()

        const parser = new DOMParser()
        const doc = parser.parseFromString(code, 'text/html')

        const figure = doc.querySelectorAll('figure')[0]

        if (figure) {
            const pcWidth = document.getElementById('pcWidth').getAttribute('value')
            const phoneWidth = document.getElementById('phoneWidth').getAttribute('value')

            if (!isChecked) {
                const classUUID = 'table' + new Date().getTime()

                if (pcWidth !== phoneWidth) {
                    figure.innerHTML += `<style>
            @media (max-width:768px){
              .${classUUID}{
                width:${document.getElementById('phoneWidth').getAttribute('value') + unit2} !important;
              }
            }
            </style>`
                }

                figure.classList.add(classUUID)

                figure.style.width = document.getElementById('pcWidth').getAttribute('value') + unit1

                const ck5 = document.getElementById('ck5Element')
                ck5.innerHTML = figure.outerHTML

                if (type !== 0) copyCode('ck5Element')
            } else {
                figure.removeAttribute('style')

                const ck5 = document.getElementById('ck5Element')
                ck5.innerHTML = figure.outerHTML + `<style>
                .table{
                  width:${document.getElementById('pcWidth').getAttribute('value') + unit1} !important;
                }
                ${pcWidth !== phoneWidth &&
                    `@media (max-width:768px){
                  .table{
                    width:${document.getElementById('phoneWidth').getAttribute('value') + unit2} !important;
                  }
                }`}
                </style>`

                if (type !== 0) copyCode('ck5Element')
            }


        } else {
            const ck5 = document.getElementById('ck5Element')
            ck5.innerHTML = code

            if (type !== 0) copyCode('ck5Element')
        }
    }

    return (
        <div className='w-full p-4 shadow-[0px_8px_22px_0px_#0000001F] rounded-[8px]'>
            <div className='w-full h-[50px] flex justify-between items-center box-border mr-12 cursor-pointer' onClick={() => setCkeditorShow(!ckeditorShow)}>
                <h3>表格宽度适配</h3>
                <Image src='/arrow.svg' alt='arrow' width={36} height={36} className={`[transition:all_.3s_linear] ${ckeditorShow ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />
            </div>

            <div className={`overflow-hidden [transition:max-height_.3s_linear] ${ckeditorShow ? 'max-h-[1200px]' : 'max-h-0'}`}>
                <div className='w-full flex justify-center items-center gap-[5rem] m-4'>
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
                        PC端宽度：<input type='number' id='pcWidth' className='w-[99px] [border:1px_skyblue_solid] rounded-[8px] pl-4 mr-2'
                            value={width1} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) setWidth1(e.target.value) }} />
                        <div
                            className='w-[36px] flex justify-between relative cursor-pointer select-none'
                            onMouseOver={() => setFlag1(true)}
                            onMouseOut={() => setFlag1(false)}
                        >
                            {unit1}
                            <Image src='/arrow.svg' alt='arrow' width={20} height={20} className={`transition-[rotate.2s_linear] ${flag1 ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />
                            <ul className={`absolute right-[8%] top-[100%] text-white bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${flag1 ? 'max-h-[64px]' : 'max-h-0'}`}>
                                <li className='py-1 hover:text-sky-200' onClick={() => setUnit1('%')}>%</li>
                                <li className='py-1 hover:text-sky-200' onClick={() => setUnit1('px')}>px</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center items-center select-none'>
                        移动端宽度：<input type='number' id='phoneWidth' className='w-[99px] [border:1px_skyblue_solid] rounded-[8px] pl-4 mr-2'
                            value={width2} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) setWidth2(e.target.value) }} />
                        <div
                            className='w-[36px] flex justify-between relative cursor-pointer'
                            onMouseOver={() => setFlag2(true)}
                            onMouseOut={() => setFlag2(false)}
                        >
                            {unit2}
                            <Image src='/arrow.svg' alt='arrow' width={20} height={20} className={`transition-[rotate.2s_linear] ${flag2 ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />
                            <ul className={`absolute right-[8%] top-[100%] text-white bg-sky-500 px-2 overflow-hidden transition-[max-height_.2s_linear] ${flag2 ? 'max-h-[64px]' : 'max-h-0'}`}>
                                <li className='py-1 hover:text-sky-200' onClick={() => setUnit2('%')}>%</li>
                                <li className='py-1 hover:text-sky-200' onClick={() => setUnit2('px')}>px</li>
                            </ul>
                        </div>
                    </div>
                    <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => { generateCode(); preview('ck5Element') }}>文章效果预览</button>
                    <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => generateCode(1)}>复制代码</button>
                </div>

                <div className="w-full mt-12 editor-container p-4">
                    <CustomEditor editorRef={editorRef} />
                </div>

                <div id='ck5Element' className='opacity-0 absolute -top-[9999px]'></div>
            </div>
        </div >
    )
}

export default Ck5