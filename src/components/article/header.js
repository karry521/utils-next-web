import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const IndexHeader = ({ dictionaries, styles }) => {

    const [open, setOpen] = useState(false)

    // 三条杠处的导航点击展开状态栏
    const showDrawer = () => {
        document.body.style.overflow = 'hidden'
        setOpen(true)
    }

    const onClose = () => {
        document.body.style.overflow = ''
        setOpen(false)
    }

    const toggleIcon = open ? (
        <Image
            onClick={onClose}
            src='/close.svg'
            className='Bxl:smj:w-[25px] Bxl:smj:h-[25px] hover: shadow-rigth'
            width={40}
            height={40}
        />
    ) : (
        <Image
            onClick={showDrawer}
            src='/open.svg'
            className='Bxl:smj:w-[25px] Bxl:smj:h-[25px] hover:text-[#10D1A5]'
            width={40}
            height={40}
        />
    )

    return (
        <div>
            <div className='bg-[#012133] justify-between fixed z-20 top-0 left-0 w-full transition-all duration-300 h-[70px]'>
                <div className='w-[1200px] Mses:w-full Msel:Mlg:w-[540px] lg:smj:w-[720px] smjs:Bxl:w-[960px] h-full mx-auto flex items-center smj:justify-between Bxls:justify-between smjs:px-[25px] se:p-[0_.5rem_0_4px] sse:smj:px-[26px]'>
                    <Link href='https://msafely.com/fr' className='flex items-center smj:mr-1'>
                        <Image
                            width={100}
                            height={100}
                            className='w-[150px] Bsd:w-[120px] Bsd:min-w-[120px]'
                            src='/logo-12d8ab.svg'
                            alt='logo'
                        />
                    </Link>

                    <ul className={`flex justify-around ${styles.gap ? styles.gap : 'gap-6'} smjs:Bxl:gap-2 smjs:Bxl:mx-12 text-white smj:hidden`}>
                        {
                            dictionaries.navigationList.map((item, index) => (
                                <li key={index} className='flex px-[10px]'>
                                    <Link
                                        href={'https://msafely.com' + item.url}
                                        className='whitespace-normal hover:text-[#10D1A5] px-[2px]  py-[21px] Bxl:py-[10px]  leading-[21px] '
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className='flex justify-end gap-6 xs:gap-0 Fours:gap-2 smjs:Bxl:gap-2 text-white'>
                        <div className=' flex items-center hover:text-[#10D1A5] mr-3 cursor-pointer' onClick={() => location.href = 'https://msafely.com/fr/blog'}>
                            <div className='flex items-center'>
                                <Image
                                    src='/search.svg'
                                    width={22}
                                    height={22}
                                    className=' hover:text-[#50e3c2] mr-[5px]'
                                />
                            </div>
                            <span className='Bxl:hidden'>{dictionaries.search.name}</span>
                        </div>

                        <div className='group flex font-medium Bxl:hidden text-white'>
                            <Link
                                href={'https://msafely.com' + dictionaries.signUpFreeHref}
                                className='w-auto border text-[#1C1E53] font-bold hover:text-black cursor-pointer py-[9px] px-2 border-[#50E3C2] bg-[#50E3C2] rounded-lg'
                            >
                                <span className='text-[14px] text-nowrap'>{dictionaries.signUpFree}</span>
                            </Link>
                        </div>

                        <div className='flex Bxls:hidden text-white xs:mr-2'>
                            <Link
                                href={dictionaries.tryNowHref2}
                                className='w-auto px-2 items-center h-[34px] text-center leading-[34px] text-[#1C1E53]  font-bold hover:text-black border-1 border-[#50E3C2] bg-[#50E3C2] rounded-lg text-[16px]'
                            >
                                <span className='text-[16px] text-nowrap'>{dictionaries.tryNow}</span>
                            </Link>
                        </div>

                        <div className='smj:flex items-center font-medium text-white smjs:hidden'>
                            {toggleIcon}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default IndexHeader