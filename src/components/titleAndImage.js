import Image from "next/image"
import { use, useEffect, useMemo, useState } from "react"

const TitleAndImage = () => {

    const [ckeditorShow, setCkeditorShow] = useState(true)
    const [titleType, setTitleType] = useState('h2')
    const [titleValue, setTitleValue] = useState('this is Title')
    const [isBlod, setIsBlod] = useState(true)

    const [imageUrl, setImageUrl] = useState('https://image.spyx.com/20240924/antivirus-security.jfif')
    const [iconWidth, setIconWidth] = useState(40)
    const [iconHeight, setIconHeight] = useState(40)
    const [iconGap, setIconGap] = useState(8)

    const [previewView, setPreviewView] = useState()

    useEffect(() => {
        if (titleValue.trim() === '' && imageUrl.trim() === '') document.getElementById('showContent').style.display = 'none'
        else document.getElementById('showContent').style.display = 'block'


        const titleElement = document.createElement(titleType)

        const span = document.createElement('span')

        if (isBlod) {
            const strong = document.createElement('strong')
            strong.innerHTML = titleValue
            span.appendChild(strong)
        } else {
            span.innerHTML = titleValue
        }

        titleElement.appendChild(span)

        const img = document.createElement('img')
        img.src = imageUrl
        img.alt = 'img'
        img.style.width = iconWidth + 'px'
        img.style.height = iconHeight + 'px'

        titleElement.appendChild(img)

        titleElement.style.display = 'flex'
        titleElement.style.gap = iconGap + 'px'
        titleElement.style.justifyContent = 'start'
        titleElement.style.alignItems = 'center'
        titleElement.style.maxWidth = '795px'

        // titleElement.setAttribute('id', `${titleType + new Date().getTime()}`)

        setPreviewView(
            <div id='titleElement' className="w-full flex justify-start pl-[210px] max-h-[100px] bg-[rgba(0,0,0,.05)] mt-6 py-8 rounded-[8px]" dangerouslySetInnerHTML={{ __html: titleElement.outerHTML }}>
            </div>
        )
    }, [titleType, titleValue, isBlod, imageUrl, iconWidth, iconHeight, iconGap])

    const copyCode = () => {
        const code = document.getElementById('titleElement').innerHTML
        copyToClipboard(code)
    }

    const copyToClipboard = async (text) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(text)
                alert('复制成功')
            } catch (err) {
                console.error('复制失败', err)
                alert('复制失败')
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
                console.error('复制失败', err)
                alert('复制失败')
            }
            console.log('Clipboard API not supported')
        }
    }

    return (
        <div className='w-full p-4 mt-12 shadow-[0px_8px_22px_0px_#0000001F] rounded-[8px]'>
            <div className='w-full h-[50px] flex justify-between items-center box-border mr-12 cursor-pointer' onClick={() => setCkeditorShow(!ckeditorShow)}>
                <h3>标题结合图标</h3>
                <Image src='/arrow.svg' width={36} height={36} className={`[transition:all_.3s_linear] ${ckeditorShow ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />
            </div>

            <div className={`overflow-hidden [transition:max-height_.3s_linear] ${ckeditorShow ? 'max-h-[400px]' : 'max-h-0'} select-none`}>
                <div className="flex justify-between px-[88px] items-center gap-6">
                    <div className="flex items-center gap-3">
                        标题类型：
                        <label className="flex flex-col justify-center items-center cursor-pointer"><h1 className="font-bold">h1</h1><input type="radio" name="titleType" value='h1' checked={titleType === 'h1' && true} onChange={() => setTitleType('h1')} /></label>
                        <label className="flex flex-col justify-center items-center cursor-pointer"><h2 className="font-bold">h2</h2><input type="radio" name="titleType" value='h2' checked={titleType === 'h2' && true} onChange={() => setTitleType('h2')} /></label>
                        <label className="flex flex-col justify-center items-center cursor-pointer"><h3 className="font-bold">h3</h3><input type="radio" name="titleType" value='h3' checked={titleType === 'h3' && true} onChange={() => setTitleType('h3')} /></label>
                        <label className="flex flex-col justify-center items-center cursor-pointer"><h4 className="font-bold">h4</h4><input type="radio" name="titleType" value='h4' checked={titleType === 'h4' && true} onChange={() => setTitleType('h4')} /></label>
                        <label className="flex flex-col justify-center items-center cursor-pointer"><h5 className="font-bold">h5</h5><input type="radio" name="titleType" value='h5' checked={titleType === 'h5' && true} onChange={() => setTitleType('h5')} /></label>
                        <label className="flex flex-col justify-center items-center cursor-pointer"><h6 className="font-bold">h6</h6><input type="radio" name="titleType" value='h6' checked={titleType === 'h6' && true} onChange={() => setTitleType('h6')} /></label>
                    </div>

                    <div>
                        标题文本：
                        <input type='text' id='titleValue' className='w-[521px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="在这里输入标题" value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                    </div>

                    <label className="flex justify-center items-center cursor-pointer">
                        标题是否加粗：
                        <input type="checkbox" checked={isBlod} onChange={() => setIsBlod(!isBlod)} />
                    </label>
                </div>

                <div className="flex justify-between items-center px-[88px] mt-8">
                    <div>
                        图标url：
                        <input type="text" id="titleIcon" className='w-[288px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="在这里粘贴图标的url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </div>

                    <div className="flex gap-6">
                        <div className="flex justify-center items-center">
                            图标宽度：
                            <input type='number' id='iconWidth' className='w-[66px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2'
                                value={iconWidth} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value > 0) setIconWidth(e.target.value) }} />px
                        </div>

                        <div className="flex justify-center items-center">
                            图标高度：
                            <input type='number' id='iconHeight' className='w-[66px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2'
                                value={iconHeight} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value > 0) setIconHeight(e.target.value) }} />px
                        </div>

                        <div className="flex justify-center items-center ml-8">
                            标题与图标的间距：
                            <input type='number' id='iconHeight' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2'
                                value={iconGap} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value > 0) setIconGap(e.target.value) }} />px
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-8">
                    <button className='w-[198px] h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => { setTitleValue(''); setImageUrl('') }}>清除标题文本跟图标url</button>
                    <button className='w-[228px] h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => { setTitleValue('this is Title'); setImageUrl('https://image.spyx.com/20240924/antivirus-security.jfif') }}>恢复默认标题文本跟图标url</button>
                    <button className='w-[120px] h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => copyCode()}>复制代码</button>
                </div>

                <div className="flex justify-between items-center px-[210px] mt-8">
                    效果预览：
                </div>
                <div id='showContent'>
                    {previewView}
                </div>
            </div>
        </div>
    )
}

export default TitleAndImage