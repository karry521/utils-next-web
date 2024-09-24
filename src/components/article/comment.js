import dayjs from 'dayjs'
import Image from 'next/image'
import { useState } from 'react'

function Comment({ Data, texts }) {
  const [CommentState, setCommentState] = useState(false)

  const [commentData, setCommentData] = useState([])

  const [comment, setComment] = useState('')

  const [name, setName] = useState('')

  const CommentHandler = e => {
    setComment(e.target.value)
  }

  const NameHandler = e => {
    setName(e.target.value)
  }


  const [email, setEmail] = useState('')

  const EmailHandler = e => {
    setEmail(e.target.value)
  }

  //评论
  const HandlerSubmit = async e => {
    e.preventDefault()

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/article-comment/add`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        content: comment,
        articleId: Data.id,
        email: email
      })
    })

    const res = await response.json()

    if (res.code === 0) {
      setComment('')
      setName('')
      setEmail('')
      setCommentState(true)
    }
  }

  return (
    <div className='bg-[#f8f8f8] mt-[50px] p-8 Fsm:p-4 rounded-sm w-full'>
      <form onSubmit={HandlerSubmit} className=''>
        {commentData.length !== 0 && (
          <>
            <p className='text-[20px] font-[600] text-black text-opacity-90'>{commentData.length} {texts.comments}</p>

            {/* 评论展示 */}
            {commentData.map((item, index) => {
              return (
                <>
                  <div key={index} className='mt-8 bg-white'>
                    <div className='p-6 '>
                      <div className='flex items-center'>
                        <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full border-2 border-blue-800'>
                          <Image
                            alt='img'
                            src={item.pic === null ? '/images/telegram/14.jpg' : item.pic}
                            width={100}
                            height={100}
                            className='w-[46px] h-[46px] rounded-full '
                          />
                        </div>
                        <div className='ml-5 text-black text-opacity-80'>
                          <p className='text-[15px] font-[600]'>{item.name === null ? 'Anonymous' : item.name}</p>
                          <span className='text-[12px] text-black font-[600] text-opacity-50'>
                            {dayjs(item.createAt).format('YYYY-MM-DD HH:mm')}
                          </span>
                        </div>
                      </div>
                      <div className='mt-8 text-[14px] text-black text-opacity-90'>
                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                      </div>
                    </div>
                  </div>

                  {item.reply !== null && item.reply !== '' && (
                    <div className='mt-4 bg-white ml-10 sm:ml-4'>
                      <div className='p-6 '>
                        <div className='flex items-center'>
                          <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full border-2 border-blue-800'>
                            <Image
                              alt='img'
                              src={
                                Data.attributes.tsafely_article_author.data.attributes.profile_photo.data.attributes.url
                              }
                              width={100}
                              height={100}
                              className='w-[46px] h-[46px] rounded-full '
                            />
                          </div>
                          <div className='ml-5 text-black text-opacity-80'>
                            <p className='text-[15px] font-[600]'>
                              {Data.attributes.tsafely_article_author.data.attributes.name}
                            </p>
                            <span className='text-[12px] text-black font-[600] text-opacity-50'>
                              {dayjs(item.createAt).add(5, 'hour').format('YYYY-MM-DD HH:mm')}
                            </span>
                          </div>
                        </div>
                        <div className='mt-8 text-[14px] text-black text-opacity-90'>
                          <div dangerouslySetInnerHTML={{ __html: item.reply }} />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )
            })}
          </>
        )}

        <p
          className={`text-[20px] font-[600] text-black text-opacity-90 ${commentData.length === 0 ? 'mt-4  Fsm:mt-2' : ' mt-20 Fsm:mt-14'
            }`}
        >
          {texts.leaveAReply}
        </p>

        <p className='text-[13px] mt-8'>{texts.content}</p>

        <p className='mt-8 text-[15px]'>{texts.comment}</p>

        <textarea
          value={comment}
          onChange={CommentHandler}
          required
          className='w-full h-[150px] p-4 mt-3 border-[1px] outline-none'
        />

        <div className='grid grid-cols-2 gap-x-8 Fsm:gap-x-4 mt-6'>
          <div className='w-full relative'>
            <p className=' absolute text-[12px] -top-[10px] left-2 bg-white px-1'>{texts.name}</p>
            <input
              type='text'
              className='outline-none w-full border-[#4fe3c075] border-[1px] rounded-md h-[40px] pl-2'
              value={name}
              onChange={NameHandler}
              required
            />
          </div>
          <div className='w-full relative'>
            <p className=' absolute text-[12px] -top-[10px] left-2 bg-white px-1'>{texts.email}</p>
            <input
              type='email'
              className='outline-none w-full border-[#4fe3c075] border-[1px] rounded-md h-[40px] pl-2'
              value={email}
              onChange={EmailHandler}
              required
            />
          </div>
        </div>

        <button
          type='submit'
          className='w-[220px] h-[40px] mt-6 flex items-center justify-center bg-[#4fe3c1] rounded-md text-white font-[600]'
        >
          {texts.postComment}
        </button>
        {CommentState && (
          <p className='text-blue-700 text-[14px] mt-4'>
            {texts.content2}
          </p>
        )}
      </form>
    </div>
  )
}

export default Comment
