import Link from 'next/link'

function Cat({ cat }) {
    return (
        <>
            {
                cat.type === 'bold' ?
                    <div className=' box-border mb-6' style={{ overflow: 'hidden' }}>
                        <div className=' w-full  mx-auto'>
                            <div className='flex justify-center bg-[#012032] rounded-[10px] items-center py-[30px] px-[10px] Bsm:flex-col Bsm:justify-between'>
                                <div className=' pr-[80px] flex flex-col items-center justify-center Bsm:p-0'>
                                    <p className='text-[#FFFFFF] font-semibold text-[17px]  text-center mb-4'>{cat.title1}</p>
                                    <p className='text-[#fff]  text-[16px] opacity-70 text-center'>{cat.title2}</p>
                                </div>
                                <div className=' bg-[#4fe3c1] rounded-[10px] text-[#fff] cursor-pointer font-semibold h-[40px] text-center px-[10px]  Bsm:w-full  Bsm:mt-[20px]'>
                                    <Link href={cat.href} className=' leading-[40px]'>{cat.button}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='bg-[#012032] rounded-[10px] py-[18px] px-[30px] my-[6px]'>
                        <div className='w-full mx-auto flex Mlg:flex-col items-center justify-between'>
                            <div className='w-[60%] smj:w-full text-[#fff]/70 text-center'>
                                <p className='mt-[17px] mb-[13.6px]'>{cat.title1}</p>
                                <p className='mt-[2px] mb-[12px]'>{cat.title2}</p>
                            </div>

                            <Link
                                href={cat.href}
                                className='w-auto px-4 text-nowrap text-white bg-[#4fe3c1] h-[40px] rounded-[10px] flex items-center font-[600] text-[14px] Sixmd:justify-center Mlg:mt-2'
                            >
                                {cat.button}
                            </Link>
                        </div>
                    </div>
            }
        </>
    )
}

export default Cat
