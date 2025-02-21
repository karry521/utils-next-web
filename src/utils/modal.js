const Modal = ({ type = 'info' }) => {
    const showSmallMessage = () => {
        const smallMessage = document.getElementsByClassName('smallMessage')[0]
        smallMessage.style.top = '20px'

        setTimeout(() => {
            smallMessage.style.top = '-78px'
        }, [3000])
    }

    return (
        <div className='smallMessage max-w-fit flex gap-2 text-[14px] font-[ROboto] p-[9px_12px] shadow-[0px_0px_22px_3px_#0000001F] rounded-[8px] absolute z-[999999999] -top-[78px] left-[50%] -translate-x-[50%] transition-[top_.1s_linear]'>
            <Image src='/message/success.svg' width={16} height={16} />
            <p>This is a success message</p>
        </div>
    )
}

export default Modal