import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { copyCode, hexToRgba, preview } from '@/utils'
import dynamic from "next/dynamic"
const Modal = dynamic(() => import('antd').then(mod => mod.Modal), { ssr: false })

const Cta = () => {
    // 是否默认展开此组件
    const [ckeditorShow, setCkeditorShow] = useState(true)

    // PC端style
    const [pcStyleSettings, setPcStyleSettings] = useState({
        bgColor: '#012032',
        bgTrans: 1,
        bgShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 },
        ctaRounded: 10,
        padding: [18, 30, 18, 30],
        leftFlag: false,
        leftColor: '#FFFFFE',
        leftTrans: 0.7,
        leftMargin: [0, 0, 0, 0],
        leftWidth: 65,
        leftSize: 16,
        leftLineHeight: 28,
        leftBold: false,
        btnBgColor: '#4fe3c1',
        btnBgTrans: 1,
        btnPadding: [0, 16, 0, 16],
        btnColor: '#012032',
        btnTrans: 1,
        btnSize: 16,
        btnHeight: 40,
        btnBold: true,
        btnRounded: 10,
        btnShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 }
    })

    // MB端style
    const [mbStyleSettings, setMbStyleSettings] = useState({
        bgColor: '#012032',
        bgTrans: 1,
        bgShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 },
        ctaRounded: 10,
        padding: [18, 30, 18, 30],
        leftFlag: false,
        leftColor: '#FFFFFE',
        leftTrans: 0.7,
        leftMargin: [0, 0, 0, 0],
        leftSize: 16,
        leftLineHeight: 28,
        leftBold: false,
        btnBgColor: '#4fe3c1',
        btnBgTrans: 1,
        btnPadding: [0, 16, 0, 16],
        btnColor: '#012032',
        btnTrans: 1,
        btnSize: 16,
        btnHeight: 40,
        btnBold: true,
        btnRounded: 10,
        btnShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 }
    })

    // 文案设置
    const [textParams, setTextParams] = useState([
        { text: `La première choix pour protéger vos enfants - Msafely`, bold: false, lineHeight: 28, fontSize: 16, color: '#FFFFFE', trans: 0.7, margin: [12, 0, 0, 0] },
        { text: `Moins d'inquiétude, plus de surveillance`, bold: false, lineHeight: 28, fontSize: 16, color: '#FFFFFE', trans: 0.7, margin: [0, 0, 12, 0] }
    ])
    const [buttonValue, setButtonValue] = useState('Essayez Msafely Maintenant')
    const [buttonUrl, setButtonUrl] = useState('https://msafely.com/fr')

    // 效果预览
    const [previewView, setPreviewView] = useState(<></>)
    const [previewView2, setPreviewView2] = useState(<></>)

    // 弹窗设置显示
    const [showPCSettings, setShowPCSettings] = useState({ bgShow: true, shadowShow: false, leftShow: false, buttonShow: false, btnShadow: false, flag: false })
    const [showMBSettings, setShowMBSettings] = useState({ bgShow: true, shadowShow: false, leftShow: false, buttonShow: false, btnShadow: false, flag: false })
    const [showLineSettings, setShowLineSettings] = useState({ index: 0, flag: false })

    // 生成pc端预览
    useEffect(() => {
        const ctaElement = document.createElement('nav')
        const contentElement = document.createElement('div')
        const leftElement = document.createElement('div')
        const ctaName = `cta${new Date().getTime()}`

        // 单行文案样式
        if (pcStyleSettings.leftFlag) {
            textParams.forEach(obj => {
                const pElement = document.createElement('p')
                pElement.innerText = obj.text
                if (pcStyleSettings.leftBold) pElement.style.fontWeight = 'bold'

                pElement.style.setProperty('font-size', `${pcStyleSettings.leftSize}px`)
                pElement.style.setProperty('color', hexToRgba(pcStyleSettings.leftColor, pcStyleSettings.leftTrans))
                pElement.style.setProperty('padding', '0', 'important')
                pElement.style.setProperty('margin', `${pcStyleSettings.leftMargin[0]}px ${pcStyleSettings.leftMargin[1]}px ${pcStyleSettings.leftMargin[2]}px ${pcStyleSettings.leftMargin[3]}px`)
                pElement.style.setProperty('line-height', `${pcStyleSettings.leftLineHeight}px`)
                pElement.setAttribute('class', 'leftElement')

                leftElement.appendChild(pElement)
            })
        } else {
            textParams.forEach(obj => {
                const pElement = document.createElement('p')
                pElement.innerText = obj.text
                if (obj.bold) pElement.style.fontWeight = 'bold'

                pElement.style.setProperty('font-size', `${obj.fontSize}px`)
                pElement.style.setProperty('color', hexToRgba(obj.color, obj.trans))
                pElement.style.setProperty('padding', '0', 'important')
                pElement.style.setProperty('margin', `${obj.margin[0]}px ${obj.margin[1]}px ${obj.margin[2]}px ${obj.margin[3]}px`)
                pElement.style.setProperty('line-height', `${obj.lineHeight}px`)
                pElement.setAttribute('class', 'leftElement')

                leftElement.appendChild(pElement)
            })
        }

        // 左侧文案样式
        leftElement.style.setProperty('width', `${pcStyleSettings.leftWidth}%`, 'important')
        leftElement.style.setProperty('text-align', 'center', 'important')
        leftElement.setAttribute('class', 'leftContent')

        // 右侧按钮样式
        const rightElement = document.createElement('a')
        rightElement.innerText = buttonValue
        rightElement.setAttribute('href', buttonUrl)
        rightElement.style.setProperty('width', 'auto', 'important')
        rightElement.style.setProperty('height', `${pcStyleSettings.btnHeight}px`)
        rightElement.style.setProperty('display', 'flex', 'important')
        rightElement.style.setProperty('justif-content', 'center', 'important')
        rightElement.style.setProperty('align-items', 'center', 'important')
        rightElement.style.setProperty('padding', `${pcStyleSettings.btnPadding[0]}px ${pcStyleSettings.btnPadding[1]}px ${pcStyleSettings.btnPadding[2]}px ${pcStyleSettings.btnPadding[3]}px`)
        rightElement.style.setProperty('margin', '0 auto', 'important')
        rightElement.style.setProperty('text-wrap', 'nowrap', 'important')
        rightElement.style.setProperty('color', hexToRgba(pcStyleSettings.btnColor, pcStyleSettings.btnTrans))
        rightElement.style.setProperty('font-size', `${pcStyleSettings.btnSize}px`)
        rightElement.style.setProperty('background-color', hexToRgba(pcStyleSettings.btnBgColor, pcStyleSettings.btnBgTrans))
        rightElement.style.setProperty('border-radius', `${pcStyleSettings.btnRounded}px`)
        rightElement.style.setProperty('text-decoration', 'none', 'important')

        if (pcStyleSettings.btnBold) rightElement.style.setProperty('font-weight', 'bold')

        if (pcStyleSettings.btnShadow.flag) {
            const bgShadow = pcStyleSettings.btnShadow
            rightElement.style.setProperty('box-shadow', `${bgShadow.inOut === 1 ? 'inset' : ''} ${bgShadow.x}px ${bgShadow.y}px ${bgShadow.blur}px ${bgShadow.spread}px  ${hexToRgba(bgShadow.color, bgShadow.trans)}`)
        }

        rightElement.setAttribute('class', 'btnContent')


        // 左侧右侧小整体样式
        contentElement.appendChild(leftElement)
        contentElement.appendChild(rightElement)
        contentElement.style.setProperty('width', '100%', 'important')
        contentElement.style.setProperty('margin', '0 auto', 'important')
        contentElement.style.setProperty('display', 'flex', 'important')
        contentElement.style.setProperty('justify-content', 'center', 'important')
        contentElement.style.setProperty('align-items', 'center', 'important')
        contentElement.style.setProperty('font-family', 'Roboto', 'important')
        contentElement.setAttribute('class', 'bigContent')


        // 移动端适配
        const styleElement = document.createElement('style')
        styleElement.innerHTML = `
        @media (max-width: 768px) {
            .${ctaName} {
                padding:${mbStyleSettings.padding[0]}px ${mbStyleSettings.padding[1]}px ${mbStyleSettings.padding[2]}px ${mbStyleSettings.padding[3]}px !important;
				background-color:${hexToRgba(mbStyleSettings.bgColor, mbStyleSettings.bgTrans)} !important;
				border-radius:${mbStyleSettings.ctaRounded}px !important;
				${mbStyleSettings.bgShadow.flag && `box-shadow:${mbStyleSettings.bgShadow.inOut === 1 ? 'inset' : ''} ${mbStyleSettings.bgShadow.x}px ${mbStyleSettings.bgShadow.y}px ${mbStyleSettings.bgShadow.blur}px ${mbStyleSettings.bgShadow.spread}px  ${hexToRgba(mbStyleSettings.bgShadow.color, mbStyleSettings.bgShadow.trans)} !important;`}
            }
			.${ctaName} .bigContent .btnContent {
				background-color:${hexToRgba(mbStyleSettings.btnBgColor, mbStyleSettings.btnBgTrans)} !important;
				padding:${mbStyleSettings.btnPadding[0]}px ${mbStyleSettings.btnPadding[1]}px ${mbStyleSettings.btnPadding[2]}px ${mbStyleSettings.btnPadding[3]}px !important;
				color:${hexToRgba(mbStyleSettings.btnColor, mbStyleSettings.btnTrans)} !important;
				height:${mbStyleSettings.btnHeight}px !important;
				font-size:${mbStyleSettings.btnSize}px !important;
				border-radius:${mbStyleSettings.btnRounded}px !important;
				${mbStyleSettings.btnBold ? 'font-weight:bold !important;' : ''}
				${mbStyleSettings.btnShadow.flag && `box-shadow:${mbStyleSettings.btnShadow.inOut === 1 ? 'inset' : ''} ${mbStyleSettings.btnShadow.x}px ${mbStyleSettings.btnShadow.y}px ${mbStyleSettings.btnShadow.blur}px ${mbStyleSettings.btnShadow.spread}px  ${hexToRgba(mbStyleSettings.btnShadow.color, mbStyleSettings.btnShadow.trans)} !important;`}
			}
            .${ctaName} .bigContent .leftContent {
                width:100% !important;
            }
            ${mbStyleSettings.leftFlag ? `
                .${ctaName} .bigContent .leftContent .leftElement {
                    ${mbStyleSettings.leftBold ? 'font-weight:bold !important;' : ''}
                    font-size:${mbStyleSettings.leftSize}px !important;
                    color:${hexToRgba(mbStyleSettings.leftColor, mbStyleSettings.leftTrans)} !important;
                    margin:${mbStyleSettings.leftMargin[0]}px ${mbStyleSettings.leftMargin[1]}px ${mbStyleSettings.leftMargin[2]}px ${mbStyleSettings.leftMargin[3]}px !important;
                    line-height:${mbStyleSettings.leftLineHeight}px !important;
                }
            ` : ''}
            .${ctaName} .bigContent {
                flex-direction:column !important;
            }
        }
        `

        // 整个cta模版样式
        ctaElement.appendChild(contentElement)
        ctaElement.appendChild(styleElement)
        ctaElement.style.setProperty('width', '100%', 'important')
        ctaElement.style.setProperty('padding', `${pcStyleSettings.padding[0]}px ${pcStyleSettings.padding[1]}px ${pcStyleSettings.padding[2]}px ${pcStyleSettings.padding[3]}px`)
        ctaElement.style.setProperty('margin', '6px 0', 'important')
        ctaElement.style.setProperty('background-color', hexToRgba(pcStyleSettings.bgColor, pcStyleSettings.bgTrans))
        ctaElement.style.setProperty('border-radius', `${pcStyleSettings.ctaRounded}px`)

        if (pcStyleSettings.bgShadow.flag) {
            const bgShadow = pcStyleSettings.bgShadow
            ctaElement.style.setProperty('box-shadow', `${bgShadow.inOut === 1 ? 'inset' : ''} ${bgShadow.x}px ${bgShadow.y}px ${bgShadow.blur}px ${bgShadow.spread}px  ${hexToRgba(bgShadow.color, bgShadow.trans)}`)
        }

        ctaElement.setAttribute('class', ctaName)

        // leftElement.style.width = '100%'
        // rightElement.style.marginTop = '0.5rem'
        // contentElement.style.flexDirection = 'column'

        phoneView()

        setPreviewView(
            <div className="w-full bg-[rgba(0,0,0,.05)]">
                <div id='ctaElement' className="w-[660px] mx-auto flex justify-center mt-6 py-8 rounded-[8px]" dangerouslySetInnerHTML={{ __html: ctaElement.outerHTML }}>
                </div>
            </div>
        )
    }, [pcStyleSettings, mbStyleSettings, textParams, buttonValue, buttonUrl])

    // 生成移动端预览
    const phoneView = () => {
        const ctaElement = document.createElement('nav')
        const contentElement = document.createElement('div')
        const leftElement = document.createElement('div')

        // 单行文案样式
        if (mbStyleSettings.leftFlag) {
            textParams.forEach(obj => {
                const pElement = document.createElement('p')
                pElement.innerText = obj.text
                if (mbStyleSettings.leftBold) pElement.style.fontWeight = 'bold'

                pElement.style.setProperty('font-size', `${mbStyleSettings.leftSize}px`, 'important')
                pElement.style.setProperty('color', hexToRgba(mbStyleSettings.leftColor, mbStyleSettings.leftTrans), 'important')
                pElement.style.setProperty('padding', '0', 'important')
                pElement.style.setProperty('margin', `${mbStyleSettings.leftMargin[0]}px ${mbStyleSettings.leftMargin[1]}px ${mbStyleSettings.leftMargin[2]}px ${mbStyleSettings.leftMargin[3]}px`, 'important')
                pElement.style.setProperty('line-height', `${mbStyleSettings.leftLineHeight}px`, 'important')

                leftElement.appendChild(pElement)
            })
        } else {
            textParams.forEach(obj => {
                const pElement = document.createElement('p')
                pElement.innerText = obj.text
                if (obj.bold) pElement.style.fontWeight = 'bold'

                pElement.style.setProperty('font-size', `${obj.fontSize}px`, 'important')
                pElement.style.setProperty('color', hexToRgba(obj.color, obj.trans), 'important')
                pElement.style.setProperty('padding', '0', 'important')
                pElement.style.setProperty('margin', `${obj.margin[0]}px ${obj.margin[1]}px ${obj.margin[2]}px ${obj.margin[3]}px`, 'important')
                pElement.style.setProperty('line-height', `${obj.lineHeight}px`, 'important')

                leftElement.appendChild(pElement)
            })
        }

        // 左侧文案样式
        leftElement.style.width = '100%'
        leftElement.style.setProperty('color', hexToRgba(mbStyleSettings.leftColor, mbStyleSettings.leftTrans), 'important')
        leftElement.style.setProperty('text-align', 'center', 'important')
        leftElement.setAttribute('class', 'leftContent')

        // 右侧按钮样式
        const rightElement = document.createElement('a')
        rightElement.innerText = buttonValue
        rightElement.setAttribute('href', buttonUrl)
        rightElement.style.setProperty('width', 'auto', 'important')
        rightElement.style.setProperty('height', `${mbStyleSettings.btnHeight}px`, 'important')
        rightElement.style.setProperty('display', 'flex', 'important')
        rightElement.style.setProperty('justif-content', 'center', 'important')
        rightElement.style.setProperty('align-items', 'center', 'important')
        rightElement.style.setProperty('padding', `${mbStyleSettings.btnPadding[0]}px ${mbStyleSettings.btnPadding[1]}px ${mbStyleSettings.btnPadding[2]}px ${mbStyleSettings.btnPadding[3]}px`, 'important')
        rightElement.style.setProperty('margin', '0 auto', 'important')
        rightElement.style.setProperty('text-wrap', 'nowrap', 'important')
        rightElement.style.setProperty('color', hexToRgba(mbStyleSettings.btnColor, mbStyleSettings.btnTrans), 'important')
        rightElement.style.setProperty('font-size', `${mbStyleSettings.btnSize}px`, 'important')
        rightElement.style.setProperty('background-color', hexToRgba(mbStyleSettings.btnBgColor, mbStyleSettings.btnBgTrans), 'important')
        rightElement.style.setProperty('border-radius', `${mbStyleSettings.btnRounded}px`, 'important')
        rightElement.style.setProperty('text-decoration', 'none', 'important')

        if (mbStyleSettings.btnBold) rightElement.style.setProperty('font-weight', 'bold', 'important')

        if (mbStyleSettings.btnShadow.flag) {
            const bgShadow = mbStyleSettings.btnShadow
            rightElement.style.setProperty('box-shadow', `${bgShadow.inOut === 1 ? 'inset' : ''} ${bgShadow.x}px ${bgShadow.y}px ${bgShadow.blur}px ${bgShadow.spread}px  ${hexToRgba(bgShadow.color, bgShadow.trans)}`, 'important')
        }

        rightElement.setAttribute('class', 'btnContent')


        // 左侧右侧小整体样式
        contentElement.appendChild(leftElement)
        contentElement.appendChild(rightElement)
        contentElement.style.setProperty('width', '100%', 'important')
        contentElement.style.setProperty('margin', '0 auto', 'important')
        contentElement.style.setProperty('display', 'flex', 'important')
        contentElement.style.setProperty('justify-content', 'center', 'important')
        contentElement.style.setProperty('align-items', 'center', 'important')
        contentElement.style.setProperty('font-family', 'Roboto', 'important')
        contentElement.style.setProperty('flex-direction', 'column', 'important')
        contentElement.setAttribute('class', 'bigContent')

        // 整个cta模版样式
        ctaElement.appendChild(contentElement)
        ctaElement.style.setProperty('width', '100%', 'important')
        ctaElement.style.setProperty('padding', `${mbStyleSettings.padding[0]}px ${mbStyleSettings.padding[1]}px ${mbStyleSettings.padding[2]}px ${mbStyleSettings.padding[3]}px`, 'important')
        ctaElement.style.setProperty('margin', '6px 0', 'important')
        ctaElement.style.setProperty('background-color', hexToRgba(mbStyleSettings.bgColor, mbStyleSettings.bgTrans), 'important')
        ctaElement.style.setProperty('border-radius', `${mbStyleSettings.ctaRounded}px`, 'important')

        if (mbStyleSettings.bgShadow.flag) {
            const bgShadow = mbStyleSettings.bgShadow
            ctaElement.style.setProperty('box-shadow', `${bgShadow.inOut === 1 ? 'inset' : ''} ${bgShadow.x}px ${bgShadow.y}px ${bgShadow.blur}px ${bgShadow.spread}px  ${hexToRgba(bgShadow.color, bgShadow.trans)}`, 'important')
        }

        setPreviewView2(
            <div className="w-full bg-[rgba(0,0,0,.05)]">
                <div className="w-[360px] mx-auto px-[15px] flex justify-center mt-6 py-8 rounded-[8px]" dangerouslySetInnerHTML={{ __html: ctaElement.outerHTML }}>
                </div>
            </div>
        )
    }

    // 修改文案内容
    const changeTextValue = (e, index) => {
        console.log(e.target.value, index)
        setTextParams(values =>
            values.map((text, i) => {
                if (i === index) return { ...text, text: e.target.value }
                else return text
            })
        )
    }

    // 删除当前行文案
    const removeTextValue = (index) => {
        setTextParams(values => values.filter((_, i) => i !== index))
    }

    // 动态操作文案
    const showInputByText = useMemo(() => {
        return (
            textParams.map((item, index) => (
                <div className='flex'>
                    第{index + 1} 行文案：
                    <input type="text" className='w-[521px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder='在这里输入你的文案' value={item.text} onChange={(e) => changeTextValue(e, index)} />
                    <button className='w-auto px-2 h-[30px] bg-sky-500 text-white rounded-[8px]' onClick={() => { if (confirm('确定要删除本行文案吗？')) removeTextValue(index) }}>删除本行</button>
                    <button className='w-auto px-2 h-[30px] bg-sky-500 text-white rounded-[8px] ml-4' onClick={() => setShowLineSettings(() => ({ index, flag: true }))}>当前行设置项</button>
                </div>
            )
            )
        )
    }, [textParams])

    // 设置单行文案样式
    const changeTextParams = (type, value, index) => {

        // 关闭pc总样式和移动总样式
        setPcStyleSettings(pc => ({ ...pc, leftFlag: false }))
        setMbStyleSettings(mb => ({ ...mb, leftFlag: false }))

        switch (type) {
            case 0: // 字体颜色
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, color: value }
                        else return item
                    }))
                break
            case 1: // 字体透明度
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, trans: value }
                        else return item
                    }))
                break
            case 2.1: // 上边距
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, margin: [value, item.margin[1], item.margin[2], item.margin[3]] }
                        else return item
                    }))
                break
            case 2.2: // 右边距
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, margin: [item.margin[0], value, item.margin[2], item.margin[3]] }
                        else return item
                    }))
                break
            case 2.3: // 下边距
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, margin: [item.margin[0], item.margin[1], value, item.margin[3]] }
                        else return item
                    }))
                break
            case 2.4: // 左边距
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, margin: [item.margin[0], item.margin[1], item.margin[2], value] }
                        else return item
                    }))
                break
            case 3: // 字体大小
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, fontSize: value }
                        else return item
                    }))
                break
            case 4: // 文案行高
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, lineHeight: value }
                        else return item
                    }))
                break
            case 5: // 字体加粗
                setTextParams(params =>
                    params.map((item, i) => {
                        if (i === index) return { ...item, bold: !item.bold }
                        else return item
                    }))
                break
        }
    }

    // 设置pc端总样式
    const changePcStyleSettings = (type, value = 0) => {
        switch (type) {
            case 0: // cta背景颜色
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgColor: value
                }))
                break
            case 1: // cta背景颜色透明度
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgTrans: value
                }))
                break
            case 2.0: // 上边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    padding: [value, setting.padding[1], setting.padding[2], setting.padding[3]]
                }))
                break
            case 2.1: // 右边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    padding: [setting.padding[0], value, setting.padding[2], setting.padding[3]]
                }))
                break
            case 2.2: // 下边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    padding: [setting.padding[0], setting.padding[1], value, setting.padding[3]]
                }))
                break
            case 2.3: // 左边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    padding: [setting.padding[0], setting.padding[1], setting.padding[2], value]
                }))
                break
            case 3: // cta边框圆角
                setPcStyleSettings(setting => ({
                    ...setting,
                    ctaRounded: value
                }))
                break
            case 4.0: // cta启用阴影
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, flag: !setting.bgShadow.flag }
                }))
                break
            case 4.1: // cta阴影效果
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, inOut: value }
                }))
                break
            case 4.2: // cta阴影颜色
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, color: value }
                }))
                break
            case 4.3: // cta阴影颜色透明度
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, trans: value }
                }))
                break
            case 4.4: // cta阴影X轴偏移量
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, x: value }
                }))
                break
            case 4.5: // cta阴影Y轴偏移量
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, y: value }
                }))
                break
            case 4.6: // cta阴影模糊半径
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, blur: value }
                }))
                break
            case 4.7: // cta阴影扩展半径
                setPcStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, spread: value }
                }))
                break
            case 5.0: // 启用左侧统一文案样式
                const leftFlag = pcStyleSettings.leftFlag
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftFlag: !leftFlag
                }))
                break
            case 5.1: // 左侧文案行高
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftLineHeight: value
                }))
                break
            case 5.2: // 左侧字体颜色
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftColor: value
                }))
                break
            case 5.3: // 左侧字体颜色透明度
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftTrans: value
                }))
                break
            case 5.31: // 左侧文案上边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [value, setting.leftMargin[1], setting.leftMargin[2], setting.leftMargin[3]]
                }))
                break
            case 5.32: // 左侧文案右边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [setting.leftMargin[0], value, setting.leftMargin[2], setting.leftMargin[3]]
                }))
                break
            case 5.33: // 左侧文案下边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [setting.leftMargin[0], setting.leftMargin[1], value, setting.leftMargin[3]]
                }))
                break
            case 5.34: // 左侧文案左边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [setting.leftMargin[0], setting.leftMargin[1], setting.leftMargin[2], value]
                }))
                break
            case 5.4: // 左侧字体大小
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftSize: value
                }))
                break
            case 5.5: // 左侧字体加粗
                const flag = pcStyleSettings.leftBold
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftBold: !flag
                }))
                break
            case 5.6: // 左侧宽度
                setPcStyleSettings(setting => ({
                    ...setting,
                    leftWidth: value
                }))
                break
            case 6: // 按钮背景颜色
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnBgColor: value
                }))
                break
            case 7: // 按钮背景颜色透明度
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnBgTrans: value
                }))
                break
            case 8.0: // 按钮上边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [value, setting.btnPadding[1], setting.btnPadding[2], setting.btnPadding[3]]
                }))
                break
            case 8.1: // 按钮右边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [setting.btnPadding[0], value, setting.btnPadding[2], setting.btnPadding[3]]
                }))
                break
            case 8.2: // 按钮下边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [setting.btnPadding[0], setting.btnPadding[1], value, setting.btnPadding[3]]
                }))
                break
            case 8.3: // 按钮左边距
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [setting.btnPadding[0], setting.btnPadding[1], setting.btnPadding[2], value]
                }))
                break
            case 9.0: // 按钮字体颜色
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnColor: value
                }))
                break
            case 9.1: // 按钮字体颜色透明度
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnTrans: value
                }))
                break
            case 9.2: // 按钮高度
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnHeight: value
                }))
                break
            case 9.3: // 按钮字体大小
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnSize: value
                }))
                break
            case 9.4: // 按钮字体加粗
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnBold: !setting.btnBold
                }))
                break
            case 10: // 按键边框圆角
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnRounded: value
                }))
                break
            case 11.0: // 按钮启用阴影
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, flag: !setting.btnShadow.flag }
                }))
                break
            case 11.1: // 按钮阴影效果
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, inOut: value }
                }))
                break
            case 11.2: // 按钮阴影颜色
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, color: value }
                }))
                break
            case 11.3: // 按钮阴影颜色透明度
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, trans: value }
                }))
                break
            case 11.4: // 按钮阴影X轴偏移量
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, x: value }
                }))
                break
            case 11.5: // 按钮阴影Y轴偏移量
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, y: value }
                }))
                break
            case 11.6: // 按钮阴影模糊半径
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, blur: value }
                }))
                break
            case 11.7: // 按钮阴影扩展半径
                setPcStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, spread: value }
                }))
                break
        }
    }

    // 设置移动端总样式
    const changeMbStyleSettings = (type, value = 0) => {
        switch (type) {
            case 0: // cta背景颜色
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgColor: value
                }))
                break
            case 1: // cta背景颜色透明度
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgTrans: value
                }))
                break
            case 2.0: // 上边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    padding: [value, setting.padding[1], setting.padding[2], setting.padding[3]]
                }))
                break
            case 2.1: // 右边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    padding: [setting.padding[0], value, setting.padding[2], setting.padding[3]]
                }))
                break
            case 2.2: // 下边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    padding: [setting.padding[0], setting.padding[1], value, setting.padding[3]]
                }))
                break
            case 2.3: // 左边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    padding: [setting.padding[0], setting.padding[1], setting.padding[2], value]
                }))
                break
            case 3: // cta边框圆角
                setMbStyleSettings(setting => ({
                    ...setting,
                    ctaRounded: value
                }))
                break
            case 4.0: // cta启用阴影
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, flag: !setting.bgShadow.flag }
                }))
                break
            case 4.1: // cta阴影效果
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, inOut: value }
                }))
                break
            case 4.2: // cta阴影颜色
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, color: value }
                }))
                break
            case 4.3: // cta阴影颜色透明度
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, trans: value }
                }))
                break
            case 4.4: // cta阴影X轴偏移量
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, x: value }
                }))
                break
            case 4.5: // cta阴影Y轴偏移量
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, y: value }
                }))
                break
            case 4.6: // cta阴影模糊半径
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, blur: value }
                }))
                break
            case 4.7: // cta阴影扩展半径
                setMbStyleSettings(setting => ({
                    ...setting,
                    bgShadow: { ...setting.bgShadow, spread: value }
                }))
                break
            case 5.0: // 启用左侧统一文案样式
                const leftFlag = mbStyleSettings.leftFlag
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftFlag: !leftFlag
                }))
                break
            case 5.1: // 左侧文案行高
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftLineHeight: value
                }))
                break
            case 5.2: // 左侧字体颜色
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftColor: value
                }))
                break
            case 5.3: // 左侧字体颜色透明度
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftTrans: value
                }))
                break
            case 5.31: // 左侧文案上边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [value, setting.leftMargin[1], setting.leftMargin[2], setting.leftMargin[3]]
                }))
                break
            case 5.32: // 左侧文案右边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [setting.leftMargin[0], value, setting.leftMargin[2], setting.leftMargin[3]]
                }))
                break
            case 5.33: // 左侧文案下边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [setting.leftMargin[0], setting.leftMargin[1], value, setting.leftMargin[3]]
                }))
                break
            case 5.34: // 左侧文案左边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftMargin: [setting.leftMargin[0], setting.leftMargin[1], setting.leftMargin[2], value]
                }))
                break
            case 5.4: // 左侧字体大小
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftSize: value
                }))
                break
            case 5.5: // 左侧字体加粗
                const flag = mbStyleSettings.leftBold
                setMbStyleSettings(setting => ({
                    ...setting,
                    leftBold: !flag
                }))
                break
            case 6: // 按钮背景颜色
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnBgColor: value
                }))
                break
            case 7: // 按钮背景颜色透明度
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnBgTrans: value
                }))
                break
            case 8.0: // 按钮上边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [value, setting.btnPadding[1], setting.btnPadding[2], setting.btnPadding[3]]
                }))
                break
            case 8.1: // 按钮右边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [setting.btnPadding[0], value, setting.btnPadding[2], setting.btnPadding[3]]
                }))
                break
            case 8.2: // 按钮下边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [setting.btnPadding[0], setting.btnPadding[1], value, setting.btnPadding[3]]
                }))
                break
            case 8.3: // 按钮左边距
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnPadding: [setting.btnPadding[0], setting.btnPadding[1], setting.btnPadding[2], value]
                }))
                break
            case 9.0: // 按钮字体颜色
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnColor: value
                }))
                break
            case 9.1: // 按钮字体颜色透明度
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnTrans: value
                }))
                break
            case 9.2: // 按钮高度
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnHeight: value
                }))
                break
            case 9.3: // 按钮字体大小
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnSize: value
                }))
                break
            case 9.4: // 按钮字体加粗
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnBold: !setting.btnBold
                }))
                break
            case 10: // 按键边框圆角
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnRounded: value
                }))
                break
            case 11.0: // 按钮启用阴影
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, flag: !setting.btnShadow.flag }
                }))
                break
            case 11.1: // 按钮阴影效果
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, inOut: value }
                }))
                break
            case 11.2: // 按钮阴影颜色
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, color: value }
                }))
                break
            case 11.3: // 按钮阴影颜色透明度
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, trans: value }
                }))
                break
            case 11.4: // 按钮阴影X轴偏移量
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, x: value }
                }))
                break
            case 11.5: // 按钮阴影Y轴偏移量
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, y: value }
                }))
                break
            case 11.6: // 按钮阴影模糊半径
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, blur: value }
                }))
                break
            case 11.7: // 按钮阴影扩展半径
                setMbStyleSettings(setting => ({
                    ...setting,
                    btnShadow: { ...setting.btnShadow, spread: value }
                }))
                break
        }
    }

    // 清空所有文案
    const closeTextValue = () => {
        setTextParams(params =>
            params.map(item => (
                { ...item, text: '' }
            ))
        )

        setButtonUrl('')
        setButtonValue('')
    }

    // 初始化所有文案
    const initTextValue = () => {
        setTextParams([
            { text: `La première choix pour protéger vos enfants - Msafely`, bold: false, lineHeight: 28, fontSize: 16, color: '#FFFFFE', trans: 0.7, margin: [12, 0, 0, 0] },
            { text: `Moins d'inquiétude, plus de surveillance`, bold: false, lineHeight: 28, fontSize: 16, color: '#FFFFFE', trans: 0.7, margin: [0, 0, 12, 0] }
        ])

        setButtonUrl('https://msafely.com/fr')
        setButtonValue('Essayez Msafely Maintenant')
    }

    // 初始化样式
    const initStyles = () => {
        setPcStyleSettings({
            bgColor: '#012032',
            bgTrans: 1,
            bgShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 },
            ctaRounded: 10,
            padding: [18, 30, 18, 30],
            leftFlag: false,
            leftColor: '#FFFFFE',
            leftTrans: 0.7,
            leftMargin: [0, 0, 0, 0],
            leftWidth: 65,
            leftSize: 16,
            leftLineHeight: 28,
            leftBold: false,
            btnBgColor: '#4fe3c1',
            btnBgTrans: 1,
            btnPadding: [0, 16, 0, 16],
            btnColor: '#012032',
            btnTrans: 1,
            btnSize: 16,
            btnHeight: 40,
            btnBold: true,
            btnRounded: 10,
            btnShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 }
        })

        setMbStyleSettings({
            bgColor: '#012032',
            bgTrans: 1,
            bgShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 },
            ctaRounded: 10,
            padding: [18, 30, 18, 30],
            leftFlag: false,
            leftColor: '#FFFFFE',
            leftTrans: 0.7,
            leftMargin: [0, 0, 0, 0],
            leftSize: 16,
            leftLineHeight: 28,
            leftBold: false,
            btnBgColor: '#4fe3c1',
            btnBgTrans: 1,
            btnPadding: [0, 16, 0, 16],
            btnColor: '#012032',
            btnTrans: 1,
            btnSize: 16,
            btnHeight: 40,
            btnBold: true,
            btnRounded: 10,
            btnShadow: { flag: false, inOut: 0, x: 0, y: 0, blur: 5, spread: 0, color: '#000000', trans: 1 }
        })
    }

    return (
        <div className='w-full p-4 mt-12 shadow-[0px_8px_22px_0px_#0000001F] rounded-[8px]'>
            <div className='w-full h-[50px] flex justify-between items-center box-border mr-12 cursor-pointer' onClick={() => setCkeditorShow(!ckeditorShow)}>
                <h3>CTA生成</h3>
                <Image src='/arrow.svg' alt="arrow" width={36} height={36} className={`[transition:all_.3s_linear] ${ckeditorShow ? 'rotate-[180deg]' : 'rotate[360deg]'}`} />
            </div>

            <div className={`overflow-hidden [transition:max-height_.3s_linear] ${ckeditorShow ? 'max-h-[1180px]' : 'max-h-0'} select-none`}>
                <div className="flex flex-col justify-start px-[88px] items-center gap-12">

                    {/* PC端样式 */}
                    <div className='w-full flex justify-start items-center'>
                        <strong className='text-nowrap mr-[10px]'>PC端样式：</strong>
                        <div className='flex flex-wrap gap-6 justify-start items-center'>
                            <button className='w-auto px-2 h-[35px] bg-sky-500 text-white rounded-[8px] ml-4' onClick={() => setShowPCSettings(settings => ({ ...settings, flag: true }))}>PC端样式设置项</button>
                        </div>
                    </div>

                    {/* 移动端样式*/}
                    <div className='w-full flex justify-start items-center'>
                        <strong className='text-nowrap'>移动端样式：</strong>
                        <div className='flex flex-wrap gap-6 justify-start items-center'>
                            <button className='w-auto px-2 h-[35px] bg-sky-500 text-white rounded-[8px] ml-4' onClick={() => setShowMBSettings(settings => ({ ...settings, flag: true }))}>移动端样式设置项</button>
                        </div>
                    </div>

                    {/* 文案设置 */}
                    <div className='w-full flex items-center'>
                        <strong>文案设置：</strong>
                        <div className='flex flex-col gap-6 justify-start items-center flex-grow'>
                            <div className='w-full ml-[3.9rem]'>
                                <button className='w-auto px-4 h-[35px] bg-sky-500 text-white rounded-[8px] mr-12' onClick={() => setTextParams(list => [...list, { text: '', bold: false, color: '#FFFFFE', trans: 0.7, margin: [0, 0, 0, 0] }])}>新增一行</button>
                                按钮文案：<input type="text" className='w-[521px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder='在这里输入按键文案' value={buttonValue} onChange={(e) => setButtonValue(e.target.value)} />
                            </div>
                            <div className='w-full ml-[19.7rem]'>
                                按钮跳转url：<input type="text" className='w-[521px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder='在这里输入跳转url' value={buttonUrl} onChange={(e) => setButtonUrl(e.target.value)} />
                            </div>
                            {showInputByText}
                        </div>
                    </div>
                </div>

                {/* 各种按钮 */}
                <div className="flex justify-center gap-6 mt-8">
                    <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => { if (confirm('确定要清除所有文案及url吗？')) closeTextValue() }}>清除所有文案及url</button>
                    <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => { if (confirm('确定要恢复默认文案及url吗？')) initTextValue() }}>恢复默认文案及url</button>
                    <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => { if (confirm('确定要恢复默认样式吗？')) initStyles() }}>恢复默认样式</button>
                    <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => preview('ctaElement')}>文章效果预览</button>
                    <button className='w-auto px-6 h-[50px] bg-sky-500 text-white rounded-[8px]' onClick={() => copyCode('ctaElement')}>复制代码</button>
                </div>

                <div className="flex justify-between items-center px-[210px] mt-8">
                    PC效果预览：
                </div>
                <div id='showContent'>
                    {previewView}
                </div>

                <div className="flex justify-between items-center px-[210px] mt-8">
                    移动端效果预览(Samsung Galaxy S8+&nbsp;&nbsp;&nbsp;屏幕宽高：360 X 740)：
                </div>
                {previewView2}
            </div>

            {/* PC端样式设置-弹窗 */}
            <Modal
                open={showPCSettings.flag}
                title='PC端样式设置'
                okText='确定'
                cancelText='取消'
                onClose={() => setShowPCSettings(settings => ({ ...settings, flag: false }))}
                onOk={() => setShowPCSettings(settings => ({ ...settings, flag: false }))}
                onCancel={() => setShowPCSettings(settings => ({ ...settings, flag: false }))}
                getContainer={false}
                width={600}
            >
                <div className='grid grid-cols-[repeat(2,1fr)] p-4 gap-4'>
                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowPCSettings(settings => ({ ...settings, bgShow: !showPCSettings.bgShow }))}>
                        cta背景相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showPCSettings.bgShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showPCSettings.bgShow ? 'max-h-[188px]' : 'max-h-0'} select-none`}>
                        <div className='w-[48%] flex items-center'>
                            背景颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={pcStyleSettings.bgColor} onChange={(e) => changePcStyleSettings(0, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            背景透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={pcStyleSettings.bgTrans} onChange={(e) => changePcStyleSettings(1, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{pcStyleSettings.bgTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            上边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="上边距"
                                value={pcStyleSettings.padding[0]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(2.0, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            右边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="右边距"
                                value={pcStyleSettings.padding[1]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(2.1, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            下边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="下边距"
                                value={pcStyleSettings.padding[2]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(2.2, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            左边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="左边距"
                                value={pcStyleSettings.padding[3]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(2.3, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            边框圆角：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="圆角"
                                value={pcStyleSettings.ctaRounded} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(3, e.target.value) }} />px
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowPCSettings(settings => ({ ...settings, shadowShow: !showPCSettings.shadowShow }))}>
                        背景阴影相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showPCSettings.shadowShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showPCSettings.shadowShow ? 'max-h-[148px]' : 'max-h-0'} select-none`}>
                        <label className='w-[48%] flex items-center cursor-pointer'>
                            启用阴影：
                            <input type="checkbox" className='cursor-pointer' checked={pcStyleSettings.bgShadow.flag} onChange={(e) => changePcStyleSettings(4.0, e.target.value)} />
                        </label>
                        <div className='w-[48%] flex items-center'>
                            阴影效果：
                            <label className='flex items-center mx-4 cursor-pointer'>外：<input type="radio" className='cursor-pointer' checked={pcStyleSettings.bgShadow.inOut === 0} onChange={() => changePcStyleSettings(4.1, 0)} /></label>
                            <label className='flex items-center cursor-pointer'>内：<input type="radio" className='cursor-pointer' checked={pcStyleSettings.bgShadow.inOut === 1} onChange={() => changePcStyleSettings(4.1, 1)} /></label>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            阴影颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={pcStyleSettings.bgShadow.color} onChange={(e) => changePcStyleSettings(4.2, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            颜色透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={pcStyleSettings.bgShadow.trans} onChange={(e) => changePcStyleSettings(4.3, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{pcStyleSettings.bgShadow.trans}</p>
                        </div>
                        <div className='w-[48%] flex items-center' title='这是水平偏移量，正数为向右移动，负数为向左移动,调整时可实时看到变化'>
                            X轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="X轴"
                                value={pcStyleSettings.bgShadow.x} onChange={(e) => changePcStyleSettings(4.4, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是垂直偏移量，正数为向下移动，负数为向上移动,调整时可实时看到变化'>
                            Y轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                                value={pcStyleSettings.bgShadow.y} onChange={(e) => changePcStyleSettings(4.5, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是模糊半径，表示阴影有 22 像素的模糊效果。值越大，阴影越模糊'>
                            模糊半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="模糊"
                                value={pcStyleSettings.bgShadow.blur} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(4.6, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是扩展半径，表示阴影的大小不向外或向内扩展。正值会扩大阴影，负值会缩小阴影'>
                            扩展半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="扩展"
                                value={pcStyleSettings.bgShadow.spread} onChange={(e) => changePcStyleSettings(4.7, e.target.value)} />px
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowPCSettings(settings => ({ ...settings, leftShow: !showPCSettings.leftShow }))}>
                        左侧文案相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showPCSettings.leftShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showPCSettings.leftShow ? 'max-h-[228px]' : 'max-h-0'} select-none`}>
                        <label className='w-[48%] flex items-center cursor-pointer'>
                            启用此样式：
                            <input type="checkbox" className='cursor-pointer' checked={pcStyleSettings.leftFlag} onChange={(e) => changePcStyleSettings(5.0, e.target.value)} />
                        </label>
                        <label className="w-[48%] flex items-center cursor-pointer select-none">
                            文本加粗：
                            <input type="checkbox" className='cursor-pointer' onChange={() => changePcStyleSettings(5.5)} />
                        </label>
                        <div className='w-[48%] flex items-center'>
                            字体颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={pcStyleSettings.leftColor} onChange={(e) => changePcStyleSettings(5.2, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={pcStyleSettings.leftTrans} onChange={(e) => changePcStyleSettings(5.3, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{pcStyleSettings.leftTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            上边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="上边距"
                                value={textParams.length > 0 && pcStyleSettings.leftMargin[0]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(5.31, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            右边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="右边距"
                                value={textParams.length > 0 && pcStyleSettings.leftMargin[1]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(5.32, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            下边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="下边距"
                                value={textParams.length > 0 && pcStyleSettings.leftMargin[2]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(5.33, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            左边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="左边距"
                                value={textParams.length > 0 && pcStyleSettings.leftMargin[3]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(5.34, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体大小：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="大小"
                                value={pcStyleSettings.leftSize} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(5.4, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            文案行高：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="行高"
                                value={pcStyleSettings.leftLineHeight} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(5.1, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            文案宽度：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="宽度"
                                value={pcStyleSettings.leftWidth} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(5.6, e.target.value) }} />%
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowPCSettings(settings => ({ ...settings, buttonShow: !showPCSettings.buttonShow }))}>
                        按钮相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showPCSettings.buttonShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showPCSettings.buttonShow ? 'max-h-[231px]' : 'max-h-0'} select-none`}>
                        <div className='w-[48%] flex items-center'>
                            背景颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={pcStyleSettings.btnBgColor} onChange={(e) => changePcStyleSettings(6, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            背景透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={pcStyleSettings.btnBgTrans} onChange={(e) => changePcStyleSettings(7, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{pcStyleSettings.btnBgTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            上边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="上边距"
                                value={pcStyleSettings.btnPadding[0]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(8.0, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            右边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="右边距"
                                value={pcStyleSettings.btnPadding[1]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(8.1, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            下边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="下边距"
                                value={pcStyleSettings.btnPadding[2]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(8.2, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            左边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="左边距"
                                value={pcStyleSettings.btnPadding[3]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(8.3, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={pcStyleSettings.btnColor} onChange={(e) => changePcStyleSettings(9.0, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={pcStyleSettings.btnTrans} onChange={(e) => changePcStyleSettings(9.1, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{pcStyleSettings.btnTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            按钮高度：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="高度"
                                value={pcStyleSettings.btnHeight} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(9.2, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体大小：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="大小"
                                value={pcStyleSettings.btnSize} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(9.3, e.target.value) }} />px
                        </div>
                        <label className="w-[48%] flex items-center cursor-pointer select-none">
                            文本加粗：
                            <input type="checkbox" className='cursor-pointer' checked={pcStyleSettings.btnBold} onChange={() => changePcStyleSettings(9.4)} />
                        </label>
                        <div className='w-[48%] flex items-center'>
                            边框圆角：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="圆角"
                                value={pcStyleSettings.btnRounded} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(10, e.target.value) }} />px
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowPCSettings(settings => ({ ...settings, btnShadow: !showPCSettings.btnShadow }))}>
                        按钮背景阴影相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showPCSettings.btnShadow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showPCSettings.btnShadow ? 'max-h-[148px]' : 'max-h-0'} select-none`}>
                        <div className='w-[48%] flex items-center'>
                            启用阴影：
                            <input type="checkbox" className='cursor-pointer' checked={pcStyleSettings.btnShadow.flag} onChange={(e) => changePcStyleSettings(11.0, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            阴影效果：
                            <label className='flex items-center mx-4 cursor-pointer'>外：<input type="radio" className='cursor-pointer' checked={pcStyleSettings.btnShadow.inOut === 0} onChange={() => changePcStyleSettings(11.1, 0)} /></label>
                            <label className='flex items-center cursor-pointer'>内：<input type="radio" className='cursor-pointer' checked={pcStyleSettings.btnShadow.inOut === 1} onChange={() => changePcStyleSettings(11.1, 1)} /></label>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            阴影颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={pcStyleSettings.btnShadow.color} onChange={(e) => changePcStyleSettings(11.2, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            颜色透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={pcStyleSettings.btnShadow.trans} onChange={(e) => changePcStyleSettings(11.3, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{pcStyleSettings.btnShadow.trans}</p>
                        </div>
                        <div className='w-[48%] flex items-center' title='这是水平偏移量，正数为向右移动，负数为向左移动,调整时可实时看到变化'>
                            X轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="X轴"
                                value={pcStyleSettings.btnShadow.x} onChange={(e) => changePcStyleSettings(11.4, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是垂直偏移量，正数为向下移动，负数为向上移动,调整时可实时看到变化'>
                            Y轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                                value={pcStyleSettings.btnShadow.y} onChange={(e) => changePcStyleSettings(11.5, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是模糊半径，表示阴影有 22 像素的模糊效果。值越大，阴影越模糊'>
                            模糊半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="模糊"
                                value={pcStyleSettings.btnShadow.blur} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changePcStyleSettings(11.6, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是扩展半径，表示阴影的大小不向外或向内扩展。正值会扩大阴影，负值会缩小阴影'>
                            扩展半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="扩展"
                                value={pcStyleSettings.btnShadow.spread} onChange={(e) => changePcStyleSettings(11.7, e.target.value)} />px
                        </div>
                    </div>
                </div>
            </Modal>

            {/* 移动端样式设置-弹窗 */}
            <Modal
                open={showMBSettings.flag}
                title='移动端样式设置'
                okText='确定'
                cancelText='取消'
                onClose={() => setShowMBSettings(settings => ({ ...settings, flag: false }))}
                onOk={() => setShowMBSettings(settings => ({ ...settings, flag: false }))}
                onCancel={() => setShowMBSettings(settings => ({ ...settings, flag: false }))}
                getContainer={false}
                width={600}
            >
                <div className='grid grid-cols-[repeat(2,1fr)] p-4 gap-4'>
                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowMBSettings(settings => ({ ...settings, bgShow: !showMBSettings.bgShow }))}>
                        cta背景相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showMBSettings.bgShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showMBSettings.bgShow ? 'max-h-[188px]' : 'max-h-0'} select-none`}>
                        <div className='w-[48%] flex items-center'>
                            背景颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={mbStyleSettings.bgColor} onChange={(e) => changeMbStyleSettings(0, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            背景透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={mbStyleSettings.bgTrans} onChange={(e) => changeMbStyleSettings(1, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{mbStyleSettings.bgTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            上边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="上边距"
                                value={mbStyleSettings.padding[0]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(2.0, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            右边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="右边距"
                                value={mbStyleSettings.padding[1]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(2.1, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            下边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="下边距"
                                value={mbStyleSettings.padding[2]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(2.2, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            左边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="左边距"
                                value={mbStyleSettings.padding[3]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(2.3, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            边框圆角：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="圆角"
                                value={mbStyleSettings.ctaRounded} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(3, e.target.value) }} />px
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowMBSettings(settings => ({ ...settings, shadowShow: !showMBSettings.shadowShow }))}>
                        背景阴影相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showMBSettings.shadowShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showMBSettings.shadowShow ? 'max-h-[148px]' : 'max-h-0'} select-none`}>
                        <label className='w-[48%] flex items-center cursor-pointer'>
                            启用阴影：
                            <input type="checkbox" className='cursor-pointer' checked={mbStyleSettings.bgShadow.flag} onChange={(e) => changeMbStyleSettings(4.0, e.target.value)} />
                        </label>
                        <div className='w-[48%] flex items-center'>
                            阴影效果：
                            <label className='flex items-center mx-4 cursor-pointer'>外：<input type="radio" className='cursor-pointer' checked={mbStyleSettings.bgShadow.inOut === 0} onChange={() => changeMbStyleSettings(4.1, 0)} /></label>
                            <label className='flex items-center cursor-pointer'>内：<input type="radio" className='cursor-pointer' checked={mbStyleSettings.bgShadow.inOut === 1} onChange={() => changeMbStyleSettings(4.1, 1)} /></label>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            阴影颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={mbStyleSettings.bgShadow.color} onChange={(e) => changeMbStyleSettings(4.2, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            颜色透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={mbStyleSettings.bgShadow.trans} onChange={(e) => changeMbStyleSettings(4.3, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{mbStyleSettings.bgShadow.trans}</p>
                        </div>
                        <div className='w-[48%] flex items-center' title='这是水平偏移量，正数为向右移动，负数为向左移动,调整时可实时看到变化'>
                            X轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="X轴"
                                value={mbStyleSettings.bgShadow.x} onChange={(e) => changeMbStyleSettings(4.4, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是垂直偏移量，正数为向下移动，负数为向上移动,调整时可实时看到变化'>
                            Y轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                                value={mbStyleSettings.bgShadow.y} onChange={(e) => changeMbStyleSettings(4.5, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是模糊半径，表示阴影有 22 像素的模糊效果。值越大，阴影越模糊'>
                            模糊半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="模糊"
                                value={mbStyleSettings.bgShadow.blur} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(4.6, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是扩展半径，表示阴影的大小不向外或向内扩展。正值会扩大阴影，负值会缩小阴影'>
                            扩展半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="扩展"
                                value={mbStyleSettings.bgShadow.spread} onChange={(e) => changeMbStyleSettings(4.7, e.target.value)} />px
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowMBSettings(settings => ({ ...settings, leftShow: !showMBSettings.leftShow }))}>
                        左侧文案相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showMBSettings.leftShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showMBSettings.leftShow ? 'max-h-[188px]' : 'max-h-0'} select-none`}>
                        <label className='w-[48%] flex items-center cursor-pointer'>
                            启用此样式：
                            <input type="checkbox" className='cursor-pointer' checked={mbStyleSettings.leftFlag} onChange={(e) => changeMbStyleSettings(5.0, e.target.value)} />
                        </label>
                        <label className="w-[48%] flex items-center cursor-pointer select-none">
                            文本加粗：
                            <input type="checkbox" className='cursor-pointer' onChange={() => changeMbStyleSettings(5.5)} />
                        </label>
                        <div className='w-[48%] flex items-center'>
                            字体颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={mbStyleSettings.leftColor} onChange={(e) => changeMbStyleSettings(5.2, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={mbStyleSettings.leftTrans} onChange={(e) => changeMbStyleSettings(5.3, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{mbStyleSettings.leftTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            上边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="上边距"
                                value={textParams.length > 0 && mbStyleSettings.leftMargin[0]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(5.31, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            右边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="右边距"
                                value={textParams.length > 0 && mbStyleSettings.leftMargin[1]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(5.32, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            下边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="下边距"
                                value={textParams.length > 0 && mbStyleSettings.leftMargin[2]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(5.33, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            左边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="左边距"
                                value={textParams.length > 0 && mbStyleSettings.leftMargin[3]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(5.34, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体大小：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="大小"
                                value={mbStyleSettings.leftSize} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(5.4, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            文案行高：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="行高"
                                value={mbStyleSettings.leftLineHeight} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(5.1, e.target.value) }} />px
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowMBSettings(settings => ({ ...settings, buttonShow: !showMBSettings.buttonShow }))}>
                        按钮相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showMBSettings.buttonShow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showMBSettings.buttonShow ? 'max-h-[231px]' : 'max-h-0'} select-none`}>
                        <div className='w-[48%] flex items-center'>
                            背景颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={mbStyleSettings.btnBgColor} onChange={(e) => changeMbStyleSettings(6, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            背景透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={mbStyleSettings.btnBgTrans} onChange={(e) => changeMbStyleSettings(7, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{mbStyleSettings.btnBgTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            上边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="上边距"
                                value={mbStyleSettings.btnPadding[0]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(8.0, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            右边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="右边距"
                                value={mbStyleSettings.btnPadding[1]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(8.1, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            下边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="下边距"
                                value={mbStyleSettings.btnPadding[2]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(8.2, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            左边距：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="左边距"
                                value={mbStyleSettings.btnPadding[3]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(8.3, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={mbStyleSettings.btnColor} onChange={(e) => changeMbStyleSettings(9.0, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={mbStyleSettings.btnTrans} onChange={(e) => changeMbStyleSettings(9.1, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{mbStyleSettings.btnTrans}</p>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            按钮高度：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="高度"
                                value={mbStyleSettings.btnHeight} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(9.2, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center'>
                            字体大小：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="大小"
                                value={mbStyleSettings.btnSize} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(9.3, e.target.value) }} />px
                        </div>
                        <label className="w-[48%] flex items-center cursor-pointer select-none">
                            文本加粗：
                            <input type="checkbox" className='cursor-pointer' checked={mbStyleSettings.btnBold} onChange={() => changeMbStyleSettings(9.4)} />
                        </label>
                        <div className='w-[48%] flex items-center'>
                            边框圆角：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="圆角"
                                value={mbStyleSettings.btnRounded} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(10, e.target.value) }} />px
                        </div>
                    </div>

                    <strong className='col-span-2 flex justify-between items-center cursor-pointer'
                        onClick={() => setShowMBSettings(settings => ({ ...settings, btnShadow: !showMBSettings.btnShadow }))}>
                        按钮背景阴影相关：
                        <Image src='/arrow.svg' alt="arrow" width={36} height={36}
                            className={`[transition:all_.2s_linear] ${showMBSettings.btnShadow ? 'rotate-[180deg]' : 'rotate[360deg]'} cursor-pointer`}
                        /></strong>
                    <div className={`col-span-2 flex flex-wrap gap-4 overflow-hidden [transition:max-height_.2s_linear] ${showMBSettings.btnShadow ? 'max-h-[148px]' : 'max-h-0'} select-none`}>
                        <div className='w-[48%] flex items-center'>
                            启用阴影：
                            <input type="checkbox" className='cursor-pointer' checked={mbStyleSettings.btnShadow.flag} onChange={(e) => changeMbStyleSettings(11.0, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            阴影效果：
                            <label className='flex items-center mx-4 cursor-pointer'>外：<input type="radio" className='cursor-pointer' checked={mbStyleSettings.btnShadow.inOut === 0} onChange={() => changeMbStyleSettings(11.1, 0)} /></label>
                            <label className='flex items-center cursor-pointer'>内：<input type="radio" className='cursor-pointer' checked={mbStyleSettings.btnShadow.inOut === 1} onChange={() => changeMbStyleSettings(11.1, 1)} /></label>
                        </div>
                        <div className='w-[48%] flex items-center'>
                            阴影颜色：
                            <input type='color' className='w-[23px] cursor-pointer' value={mbStyleSettings.btnShadow.color} onChange={(e) => changeMbStyleSettings(11.2, e.target.value)} />
                        </div>
                        <div className='w-[48%] flex items-center'>
                            颜色透明度：
                            <input type="range" className='w-[88px] cursor-pointer' min="0" max="1" step="0.1" value={mbStyleSettings.btnShadow.trans} onChange={(e) => changeMbStyleSettings(11.3, e.target.value)}>
                            </input><p className='w-[25px] ml-[5px]'>{mbStyleSettings.btnShadow.trans}</p>
                        </div>
                        <div className='w-[48%] flex items-center' title='这是水平偏移量，正数为向右移动，负数为向左移动,调整时可实时看到变化'>
                            X轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="X轴"
                                value={mbStyleSettings.btnShadow.x} onChange={(e) => changeMbStyleSettings(11.4, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是垂直偏移量，正数为向下移动，负数为向上移动,调整时可实时看到变化'>
                            Y轴
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                                value={mbStyleSettings.btnShadow.y} onChange={(e) => changeMbStyleSettings(11.5, e.target.value)} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是模糊半径，表示阴影有 22 像素的模糊效果。值越大，阴影越模糊'>
                            模糊半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="模糊"
                                value={mbStyleSettings.btnShadow.blur} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeMbStyleSettings(11.6, e.target.value) }} />px
                        </div>
                        <div className='w-[48%] flex items-center' title='这是扩展半径，表示阴影的大小不向外或向内扩展。正值会扩大阴影，负值会缩小阴影'>
                            扩展半径
                            <Image src='/message/info.svg' width={14} height={14} />
                            ：
                            <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="扩展"
                                value={mbStyleSettings.btnShadow.spread} onChange={(e) => changeMbStyleSettings(11.7, e.target.value)} />px
                        </div>
                    </div>
                </div>
            </Modal>

            {/* 单行文案样式设置-弹窗 */}
            <Modal
                open={showLineSettings.flag}
                title={`第${showLineSettings.index + 1}行文案设置`}
                onClose={() => setShowLineSettings(setting => ({ ...setting, flag: false }))}
                onOk={() => setShowLineSettings(setting => ({ ...setting, flag: false }))}
                onCancel={() => setShowLineSettings(setting => ({ ...setting, flag: false }))}
                getContainer={false}
                width={600}
            >

                <div className='grid grid-cols-[repeat(2,1fr)] p-4 gap-4'>
                    <div className='flex items-center'>
                        字体颜色：
                        <input type='color' className='w-[23px] cursor-pointer'
                            value={textParams.length > 0 && textParams[showLineSettings.index].color} onChange={(e) => changeTextParams(0, e.target.value, showLineSettings.index)} />
                    </div>
                    <div className='flex items-center'>
                        字体透明度：
                        <input type="range" className='cursor-pointer' min="0" max="1" step="0.1"
                            value={textParams.length > 0 && textParams[showLineSettings.index].trans} onChange={(e) => changeTextParams(1, e.target.value, showLineSettings.index)}></input><p className='w-[25px] ml-[5px]'>{textParams.length > 0 && textParams[showLineSettings.index].trans}</p>
                    </div>
                    <div className='flex items-center'>
                        上边距：
                        <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                            value={textParams.length > 0 && textParams[showLineSettings.index].margin[0]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeTextParams(2.1, e.target.value, showLineSettings.index) }} />px
                    </div>
                    <div className='flex items-center'>
                        右边距：
                        <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                            value={textParams.length > 0 && textParams[showLineSettings.index].margin[1]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeTextParams(2.2, e.target.value, showLineSettings.index) }} />px
                    </div>
                    <div className='flex items-center'>
                        下边距：
                        <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                            value={textParams.length > 0 && textParams[showLineSettings.index].margin[2]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeTextParams(2.3, e.target.value, showLineSettings.index) }} />px
                    </div>
                    <div className='flex items-center'>
                        左边距：
                        <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                            value={textParams.length > 0 && textParams[showLineSettings.index].margin[3]} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeTextParams(2.4, e.target.value, showLineSettings.index) }} />px
                    </div>

                    <div className='flex items-center'>
                        字体大小：
                        <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="Y轴"
                            value={textParams.length > 0 && textParams[showLineSettings.index].fontSize} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeTextParams(3, e.target.value, showLineSettings.index) }} />px
                    </div>

                    <div className='flex items-center'>
                        文案行高：
                        <input type='number' className='w-[52px] [border:1px_skyblue_solid] rounded-[8px] pl-2 mr-2' placeholder="行高"
                            value={textParams.length > 0 && textParams[showLineSettings.index].lineHeight} onChange={(e) => { if (e.target.value.length <= 3 && e.target.value >= 0) changeTextParams(4, e.target.value, showLineSettings.index) }} />px
                    </div>

                    <label className="flex items-center cursor-pointer select-none">
                        <strong>文本加粗：</strong>
                        <input type="checkbox" className='cursor-pointer' checked={textParams[showLineSettings.index].bold} onChange={() => changeTextParams(5, '', showLineSettings.index)} />
                    </label>
                </div>
            </Modal>
        </div>
    )
}

export default Cta