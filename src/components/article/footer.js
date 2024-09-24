import Link from 'next/link'
import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const IndexFooter = ({ dictionaries, styles, isLang }) => {

    const [showMore, setShowMore] = useState(false)
    const [active, setActive] = useState(false)

    const router = useRouter()

    const handleToggleMore = () => {
        setShowMore(!showMore)
    }

    const menuItem = dictionaries.menuItem

    // 底部语言切换小白块

    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = index => {
        if (activeIndex === index) setActiveIndex(null)
        else {
            setActiveIndex(index)
            active ? setActive(false) : ''
        }
    }

    const handleClick2 = () => {
        if (active) setActive(false)
        else {
            setActive(true)
            setActiveIndex(null)
        }
    }

    const switchLang = lang => {
        return 'https://msafely.com/fr'
    }


    // 获取不同语言的路由链接
    const [enHref, setEnHref] = useState('/')
    const [deHref, setDeHref] = useState('/de')
    const [jpHref, setJpHref] = useState('/jp')
    const [frHref, setFrHref] = useState('/fr')
    const [esHref, setEsHref] = useState('/es')

    // 获取对应的语言跳转链接
    const handleHref = lang => {
        switch (lang) {
            case 'en': return enHref
            case 'jp': return jpHref
            case 'de': return deHref
            case 'fr': return frHref
            case 'es': return esHref
        }
    }

    useEffect(() => {
        setEnHref(switchLang('en'))
        setDeHref(switchLang('de'))
        setJpHref(switchLang('jp'))
        setFrHref(switchLang('fr'))
        setEsHref(switchLang('es'))
    }, [])

    return (
        <div style={{ overflow: 'hidden' }} className='bg-[#012133]' onClick={() => active ? setActive(false) : ''}>
            <div className='w-[1200px] Bxl:w-full m-auto h-auto Bxls:pt-[30px] pb-[60px]'>
                <div className={`flex Bxl:w-[100%] Bxl:justify-center py-[50px] Bsd:${isLang}`}>
                    <ul className='text-white text-center items-center w-[200px] px-[15px]'>
                        <li className='mb-2'>
                            <Image
                                width={100}
                                height={100}
                                className='w-[170px] Bxl:hidden'
                                src='/logo-bottom.svg'
                                alt='23232'
                            />
                        </li>

                        {
                            router.pathname === '/' ?
                                dictionaries.socialMedia
                                :
                                <li className='text-[17px] Bxl:hidden mb-4 font-medium text-white whitespace-nowrap'>{dictionaries.title}
                                </li>
                        }

                        <li className={isLang}>
                            {/* 切换语言 */}
                            <ul className='w-auto Bxl:flex Bxl:justify-center'>
                                <li
                                    className={`Bxl:border-gray-500 h-[38px] group flex ${dictionaries.lang === 'jp' ? 'justify-around' : 'justify-center'} bg-[#012133] border border-white rounded-md w-full text-center relative`} onClick={() => handleClick2()}
                                >
                                    <div className='mr-[20%] text-[14px] opacity-70 flex justify-center items-center'>
                                        {dictionaries.menuItem.title}
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            src='/footer_arrow.svg'
                                            className={`transform transition-transform ... ... ... ... duration-500 ${active ? 'smj:rotate-180' : ''} smjs:group-hover:rotate-180`}
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                    <ul className={`w-full rounded-lg text-[14px] absolute smjs:hidden ${active ? 'block' : 'hidden'} smjs:group-hover:block bg-white top-9 duration-3000`}>
                                        {dictionaries.menuItem.submenus.map((submenu, subIndex) => (
                                            <div
                                                className={`border px-2 text-[14px] text-black hover:text-[#50e3c2] hover:bg-[#F5F5F5]
                          ${subIndex === 0 ? 'rounded-t-lg' : ''} ${subIndex === menuItem.submenus.length - 1 ? 'rounded-b-lg' : ''
                                                    }`}
                                                key={subIndex}
                                            >
                                                <li
                                                    className='rounded-lg hover:bg-[#F5F5F5] text-black '
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <Link href={handleHref(submenu.lang)} className='w-full h-[45px] flex justify-start items-center hover:text-[#10D1A5]'>
                                                        {submenu.name}
                                                    </Link>
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* pc导航 */}
                    <div className='flex-grow flex justify-start ml-[100px] Bxl:hidden'>
                        {
                            dictionaries.navigation.map((item, index) => (
                                <div key={index} className={`text-white px-[15px] Bxl:hidden`}>
                                    <h6 className='font-bold mb-4 text-nowrap'>{item.name}</h6>
                                    <ul>
                                        {
                                            item.list.map((item2, index2) => (
                                                <li key={index2} className='opacity-70 pb-3 text-[15px] text-nowrap'>
                                                    <Link className='hover:text-[#10d191] pb-1' href={'https://msafely.com' + item2.url}>
                                                        {item2.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }

                        <div className='text-white px-[px] Bxl:hidden'>
                            {
                                dictionaries.smallNav.map((item, index) => (
                                    <Fragment key={index}>
                                        <div className='px-[15px]'>
                                            <h6 className='font-bold mb-4 text-nowrap'>{item.name}</h6>
                                            <ul>
                                                {
                                                    item.list.map((item2, index2) => (
                                                        <li key={index2} className='opacity-70 pb-3 text-[15px] text-nowrap'>
                                                            <Link className='hover:text-[#10d191] pb-1' href={'https://msafely.com' + item2.url}>
                                                                {item2.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>


                {/* 手机导航 */}
                <div className=' bg-[#07273d] box-border indexfooter footers hidden Bxl:block px-[15px]'>
                    {
                        dictionaries.mobileNav.map((item, index) => (
                            <div key={index} className='text-[#07273d]'>
                                <div className={` bg-[#012133] `} onClick={() => handleClick(index)}>
                                    <div className=' items-center border-b border-[#fff] cursor-pointer flex justify-between mx-[3%] py-[12px] px-[5px] w-[94%]'>
                                        <span className=' text-[#fff] text-[18px] font-medium leading-[-0.02em] transition-all duration-300'>
                                            {item.name}
                                        </span>
                                        <span className=' items-center flex h-[24px] w-[24px] justify-center transition-all duration-300'>
                                            <span
                                                className={`transition-all duration-300 border-r-2 border-t-2 border-[#9ca9b1] block h-[12px] w-[12px] ${activeIndex === index ? 'rotate-[315deg]' : ' rotate-[135deg]'
                                                    }`}
                                            ></span>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`bg-[#012133]  text-[#000] text-[16px] px-[30px]`}
                                    style={{
                                        maxHeight: activeIndex === index ? '288px' : '0px',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s'
                                    }}
                                >
                                    <ul className=' m-0 p-0'>
                                        {
                                            item.list.map((item2, index2) => (
                                                <li key={index2} className=' h-[40px]'>
                                                    <Link href={'https://msafely.com' + item2.url} className='text-[#fff] block text-[14px] h-[40px] leading-[40px]'>
                                                        {item2.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* 底部免责声明 */}
                <div className='px-[20px] mt-[20px]'>
                    <span className={`text-[12px] text-white opacity-60  ${showMore ? '' : 'line-clamp-2 Bxl:line-clamp-1'}`}>
                        <span className='text-white text-[12px] hidden Bxls:block'>{dictionaries.disclaimer}</span>
                        {dictionaries.disclaimerContent}
                    </span>
                    <div className='flex Bxl:justify-end justify-start'>
                        <button
                            className='text-[12px] opacity-80 text-white font-bold px-[6px] py-[1px]'
                            onClick={handleToggleMore}
                        >
                            {showMore ? dictionaries.less : dictionaries.more}
                        </button>
                    </div>
                    <p className='text-[14px] opacity-60 text-center text-white'>
                        {dictionaries.time && dictionaries.time}
                    </p>
                    <p className='text-[14px] opacity-60 text-center text-white'>
                        {dictionaries.address && dictionaries.address}
                    </p>

                    <p className='text-[15px] opacity-60 text-center text-white'>
                        {dictionaries.copyright}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IndexFooter