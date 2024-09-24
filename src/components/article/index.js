import React, { useEffect, useMemo, useRef, useState } from 'react'
import BlogHeader from '@/components/article/header'
import IndexFooter from '@/components/article/footer'
import Image from 'next/image'
import dayjs from 'dayjs'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import { Anchor, Col, Drawer, Progress, Row } from 'antd'
import styles1 from '@/styles/blog.module.scss'
// import Accordion from '@mui/material/Accordion'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import AccordionDetails from '@mui/material/AccordionDetails'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Cat from '@/components/article/cat'
import Comment from '@/components/article/comment'
import Related from '@/components/article/related'
import dynamic from 'next/dynamic'

const Anchor = dynamic(() => import('antd').then(mod => mod.Anchor), { ssr: false });
const Col = dynamic(() => import('antd').then(mod => mod.Col), { ssr: false });
const Drawer = dynamic(() => import('antd').then(mod => mod.Drawer), { ssr: false });
const Progress = dynamic(() => import('antd').then(mod => mod.Progress), { ssr: false });
const Row = dynamic(() => import('antd').then(mod => mod.Row), { ssr: false });
const Accordion = dynamic(() => import('@mui/material/Accordion'), { ssr: false });
const AccordionSummary = dynamic(() => import('@mui/material/AccordionSummary'), { ssr: false });
const AccordionDetails = dynamic(() => import('@mui/material/AccordionDetails'), { ssr: false });
const ExpandMoreIcon = dynamic(() => import('@mui/icons-material/ExpandMore'), { ssr: false });

const right = '>'

export default function Article({ dictionaries, styles, i18, data, related }) {
  const cat = {
    title1: "La première choix pour protéger vos enfants - Msafely",
    title2: "Moins de worries, plus de surveillance.",
    button: "Essayez Msafely Maintenant",
    href: '/fr'
  }

  const [Directory, setDirectory] = useState('Contrôle Parental')
  const [DirectoryUrl, setDirectoryUrl] = useState('controle-parental')
  const [Data, setData] = useState(data.data[0])
  const { query } = useRouter()

  useEffect(() => {
    setData(data.data[0])
  }, [data])

  const contentRef = useRef(null)

  //回到顶部按钮
  const [scrolled280px, setScrolled280px] = useState(false)

  const [scroll, setScroll] = useState('')

  const handleScroll2 = () => {
    // 获取当前滚动的垂直距离
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // 判断滚动距离是否大于等于50px
    if (scrollTop >= 210 && !scrolled280px) {
      setScrolled280px(true)
    } else if (scrollTop < 210 && scrolled280px) {
      setScrolled280px(false)
    }

    const container = document.getElementById('containerElement')

    if (container !== null) {
      setScroll(container.getBoundingClientRect().bottom)
    }
  }

  useEffect(() => {
    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll2)

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll2)
    }
  }, [scrolled280px, query])

  /* 左侧数据 */
  const [anchorList, setAnchorList] = useState([])
  const [anchorList2, setAnchorList2] = useState([])

  /* 嵌入锚点 */
  useEffect(() => {
    const container = document.getElementById('containerElement')

    if (container) {
      const headings = container.querySelectorAll('h2, h3')

      let data = []

      let data2 = []

      let index

      for (let i = 0; i < headings.length; i++) {
        data.push({
          title: headings[i].textContent.trim(),
          biggest: headings[i].tagName.toLowerCase(), // 获取标签名，可以是"h2"或"h3"
          key: i,
          href: `#id${i}`
        })

        if (headings[i].tagName.toLowerCase() === 'h2') {
          data2.push({
            title: headings[i].textContent.trim(),
            biggest: headings[i].tagName.toLowerCase(), // 获取标签名，可以是"h2"或"h3"
            key: i,
            href: `#id${i}`,
            data: []
          })
          index = i
        } else if (data2.length > 0) {
          data2[data2.length - 1].data.push({
            title: headings[i].textContent.trim(),
            biggest: headings[i].tagName.toLowerCase(), // 获取标签名，可以是"h2"或"h3"
            key: i,
            href: `#id${index + 1}`
          })
          index = i
        }
      }

      headings.forEach((element, index) => {
        element.setAttribute('id', data[index].href.substring(1))
      })

      setAnchorList(data2)
      setAnchorList2(data)
    }
  }, [query, Data])
  const [open3, setOpen3] = useState(false)

  const [queryId, setQueryId] = useState(2)

  useEffect(() => {
    if (queryId % 2 === 0 && window.location.hash) {
      setTimeout(() => {
        const currentScrollY = window.scrollY // 获取当前垂直滚动位置
        const targetScrollY = currentScrollY - 100 // 在当前位置的基础上向上移动80像素

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth' // 使用平滑滚动效果
        })
        setQueryId(Math.floor(Math.random() * 450) * 2 + 101)
      }, [200])
    }
  }, [queryId, query])

  useEffect(() => {
    // 获取所有<a>标签
    const anchorElements = document.querySelectorAll('a')

    // 为每个<a>标签添加点击事件监听器
    anchorElements.forEach(anchor => {
      anchor.addEventListener('click', handleClick)
    })

    // 在组件卸载时移除事件监听器
    return () => {
      anchorElements.forEach(anchor => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [])

  const handleClick = event => {
    if (event.target.href === undefined) {
      setQueryId(Math.floor(Math.random() * 450) * 2 + 100)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }

    return date.toLocaleDateString('en-US', options)
  }

  /* 头部 */
  const Cheader = (
    <div className=''>
      <div className='flex-col px-[15px] mt-[70px] relative w-[1450px] Bxl:w-[960px] Bxl:smj:w-[720px] Bxl:smj:Mlg:w-[540px] Bxl:smj:Mlg:Mses:w-full mx-auto'>
        <div className='max-w-[1450px] text-[#000] h-full w-full mx-auto pt-[20px] Dmd:pl-4 pl-4 text-[14px] Dmd:flex items-center '>
          <Link href={i18 === '' ? '/' : i18}><span className='font-[600] text-[#222222]'>{dictionaries.home}</span></Link>
          <span className='mx-1 mt-[2px] text-[#222222]'>{right}</span>
          <Link href={`${i18}/${DirectoryUrl}`}><span className='font-[600] text-[#222222]'>{Directory}</span></Link>
          <span className='mx-1 mt-[2px] text-[#222222]'>{right}</span>
          <span className='text-[#12D8AB] font-[600]'>{Data.attributes.title}</span>
        </div>
        {/*}
        <div className=' mx-auto '>
            <h1 className='text-[#0D244C] text-[36px] smj:text-[32px] font-[600] text-center leading-[70px] Logosm:leading-[40px] smj:leading-[43px] py-[30px] pr-0 pl-[150px] mx-auto smj:pl-0'>
              {Data.attributes.title}
            </h1>
          </div>
          <div className='flex items-center pt-[10px] pl-[270px] pb-[20px] justify-center smj:pl-0'>
            <Link
              href={`${i18}/author/${Data.attributes.tsafely_article_author.data.attributes.slug}`}
              className='w-[50px] h-[50px] smj:w-[34px] smj:h-[34px] rounded-full overflow-hidden border-blue-200 border-[2px] '
            >
              <Image
                width={100}
                height={100}
                src={Data.attributes.tsafely_article_author.data.attributes.profile_photo.data.attributes.url}
                className=''
                alt='photo'
              />
            </Link>
            <div className='ml-[20px] flex items-center'>
              <Link
                href={`${i18}/author/${Data.attributes.tsafely_article_author.data.attributes.slug}`}
                className='text-[#535460] text-[14px] flex-col justify-center items-center'
              >
                <div className='text-[18px] leading-[27px] font-medium'>{Data.attributes.tsafely_article_author.data.attributes.name}</div>
                <div className='text-[12px] leading-[18px] font-medium'>{formatDate(Data.attributes.updatedAt)}</div>
              </Link>
              <div className='flex text-[#535460] text-[13px] ml-[130px] Dsm:ml-[50px] items-center'>
                <Image width={100} height={100} alt='calendar' src='/blog/calendar.png' className='w-[30px] h-[30px]' />
                <p className='text-[14px] text-[#07273d] ml-2'>
                  {formatDate(Data.attributes.updatedAt)}
                </p>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  )

  const [expanded, setExpanded] = useState(0)
  const [flag, setFlag] = useState(0)

  const [innerWidth, setInnerWidth] = useState()

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const { asPath } = useRouter()
  const facebook = 'https://www.facebook.com/sharer/sharer.php?u=https://msafely.com' + asPath
  const Twitter = 'https://twitter.com/intent/tweet?text=' + Data.attributes.seo[0].metaTitle + '&url=https://msafely.com' + asPath

  const linkToCopy = `https://msafely.com${asPath}`;

  const [tooltipText, setTooltipText] = useState(dictionaries.copy);

  const handleCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = linkToCopy;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand(dictionaries.copy);
    document.body.removeChild(textarea);
    setTooltipText(dictionaries.copied);
  };
  const [leftNavs, setleftNavs] = useState(false)

  const onClose = () => {
    setOpen3(!open3)
    setleftNavs(!leftNavs)
  }

  const num = 2;

  /* pc锚点 */
  const leftAnchor = useMemo(() => {
    return (
      <div className={`Blog2 overflow-y-auto border-[#E5E7EB] border-r-[2px]`}>
        <Row>
          <Col span={8}>
            <div className='text-[18px] leading-[21px] pl-[30px] font-medium mb-[15px] mt-[5px]'>{dictionaries.TableOfContents}</div>
            {anchorList.map((item, index) => {
              if (item.data.length !== 0) {
                return (
                  <Accordion
                    key={index}
                    className='bg-[#fff]'
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <div className='flex items-center relative'>
                      <AccordionSummary className='p-0 w-full'>
                        <Anchor
                          targetOffset={70}
                          onClick={() => {
                            setQueryId(1)
                          }}
                          key={index}
                          items={[item]}
                          className=''
                        />
                      </AccordionSummary>

                      <div className='absolute right-0'>
                        <ExpandMoreIcon className='text-[18px] text-black/60' />
                      </div>
                    </div>

                    {item.data.map((item2, index2) => {
                      return (
                        <AccordionDetails key={index2}>
                          <Anchor
                            targetOffset={70}
                            onClick={() => {
                              setQueryId(1)
                            }}
                            key={index2}
                            items={[item2]}
                            className='ml-4'
                          />
                        </AccordionDetails>
                      )
                    })}
                  </Accordion>
                )
              } else {
                return (
                  <Anchor
                    targetOffset={70}
                    onClick={() => {
                      setQueryId(1)
                    }}
                    key={index}
                    items={[item]}
                    className='track-iphone-title'
                  />
                )
              }
            })}
          </Col>
        </Row>
      </div>
    )
  }, [expanded, anchorList, queryId, Data])

  /* 移动端锚点
  const leftAnchor2 = (
    <>
      <div className='Blog2'>
        <Row>
          <Col span={8}>
            {anchorList.map((item, index) => {
              if (item.data.length !== 0) {
                return (
                  <Accordion
                    key={index}
                    className='bg-[#fff]'
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <div className='flex items-center'>
                      <AccordionSummary className='p-0'>
                        <Anchor
                          targetOffset={110}
                          onClick={() => {
                            setQueryId(1);
                            setFlag(false)
                          }}
                          key={index}
                          items={[item]}
                          className='track-iphone-title'
                        />
                      </AccordionSummary>

                      <div className=' absolute right-1'>
                        <ExpandMoreIcon className='text-[18px] text-black/60' />
                      </div>
                    </div>

                    {item.data.map((item2, index2) => {
                      return (
                        <AccordionDetails key={index2}>
                          <Anchor
                            targetOffset={110}
                            onClick={() => {
                              setQueryId(1);
                              setFlag(false)
                            }}
                            key={index2}
                            items={[item2]}
                            className='track-iphone-title2 ml-4'
                          />
                        </AccordionDetails>
                      )
                    })}
                  </Accordion>
                )
              } else {
                return (
                  <Anchor
                    targetOffset={110}
                    onClick={() => {
                      setQueryId(1);
                      setFlag(false)
                    }}
                    key={index}
                    items={[item]}
                    className='track-iphone-title'
                  />
                )
              }
            })}
          </Col>
        </Row>
      </div>
    </>
  )*/
  const leftAnchor2 = (
    <>
      <Drawer
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open3}
        key="bottom"
        className="bg-[#012133] Slug h-[50vh] overflow-auto relative"
      >
        <Row className="h-[calc(50vh-85px)] mt-[10px] mr-[15px] overflow-auto">
          <Col className="h-full overflow-auto">
            {anchorList2.map((item, index) => {
              return item.biggest === "h2" ? (
                <Anchor
                  onClick={() => {
                    setQueryId(1), setleftNavs(!leftNavs), setOpen3(!open3)
                  }}
                  key={index}
                  targetOffset={110}
                  items={[item]}
                  className="track-iphone-title move-directory-h2 pr-[5px] my-[10px]"
                />
              ) : (
                <Anchor
                  onClick={() => {
                    setQueryId(1), setleftNavs(!leftNavs), setOpen3(!open3)
                  }}
                  key={index}
                  targetOffset={110}
                  items={[item]}
                  className="track-iphone-title2 my-2"
                />
              )
            })}
          </Col>
        </Row>
        <div className=" h-[80px] w-full flex items-center mx-auto justify-center py-4 bg-[#012133] fixed bottom-0">
          <button
            onClick={() => {
              setleftNavs(!leftNavs), setOpen3(!open3)
            }}
            className="w-[170px] h-[38px] bg-[#50E3C2] rounded-md text-[#1C1E53] font-[700] text-[15px]"
          >
            {dictionaries.tableOfContents}
          </button>
        </div>
      </Drawer>
    </>
  )


  /* 文章部分 */
  const Content = useMemo(() => {
    return (
      <>
        <div className='bg-[#fff] Anchor pb-[20px] Fsm:pb-[0px]'>
          {Cheader}
          <div className='max-w-[1450px] mx-auto Blds:pb-[25px] pb-[40px] smjs:flex justify-center relative'>
            {/* 左侧 */}
            <div className={`w-[20%] h-full smj:hidden ${scrolled280px && 'sticky top-[80px] left-[8%] Headers5:left-[2%] Headers5:w-[20%]'
              } ${scroll < 300 && scroll !== '' && 'invisible'}`}>
              <div
                className={`w-full h-full smj:hidden ${scrolled280px ? 'mt-[0px]' : 'mt-[282px]'} ${scrolled280px && 'sticky top-[80px] left-[8%] Headers5:left-[2%] Headers5:w-full'
                  } ${scroll < 300 && scroll !== '' && 'invisible'}`}
              >
                <div className='overflow-auto'>{leftAnchor}</div>
              </div>
              <div className='bg-[#E9E9E9] h-[1.5px] w-[90%] Bxl:hidden mx-auto mt-[15px]'></div>
              <div className={`pt-[25px] pl-[25px] Bxl:hidden h-[162px]`}>
                <p className='text-[17px] leading-[20px] text-[#5F6064]'>{dictionaries.Share}</p>
                <div className='flex justify-between items-center mt-[25px] w-[144px]'>
                  <div className='group w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                    <Link className='w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#EFF3F4] rounded-[50%]' href={Twitter} target='_blank'>
                      <Image
                        src={'/blog/Twitter.svg'}
                        height={18}
                        width={18}
                        alt='Twitter'
                        className='w-[18px] h-[18px]'
                      /></Link>
                  </div>
                  <div className='group w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                    <Link className='w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#EFF3F4] rounded-[50%]' href={facebook} target='_blank'>
                      <Image
                        src={'/blog/facebook.svg'}
                        height={22}
                        width={22}
                        alt='Facebook'
                        className='w-[22px] h-[22px]'
                      /></Link>
                  </div>
                  <div className='relative group w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                    <button className='w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#EFF3F4] rounded-[50%]' onClick={handleCopy}>
                      <Image
                        src={'/blog/copylink.svg'}
                        height={18}
                        width={18}
                        alt='instagram'
                        className='w-[18px] h-[18px]'
                      /></button>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2
                      bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 opacity-0 group-hover:opacity-100">
                      {tooltipText}
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-t-4 border-t-gray-800 border-r-transparent border-r-4 border-l-transparent border-l-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`smjs:hidden`}>
              {!leftNavs && (
                <div className="z-40 relative Hmd:hidden">
                  <div className="fixed bg-[#012133] w-full py-4 bottom-0">
                    <div className="w-[85%] Hsm:w-[95%] h-full flex items-center mx-auto justify-center">
                      <button
                        onClick={() => {
                          setleftNavs(!leftNavs), setOpen3(!open3)
                        }}
                        className="w-[170px] h-[38px] bg-[#50E3C2] rounded-md text-[#1C1E53] font-[700] text-[15px]"
                      >
                        {dictionaries.tableOfContents}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {leftNavs && leftAnchor2}
            </div>

            {/* 文章内容 */}
            <div className=' w-[60%] mx-auto Headers3:w-[52%] Headers3:smj:w-[92%] smjs:mx-10 smj:mx-auto pt-[20px] Mlg:pt-[10px]'>
              {/* 文章主内容 */}
              <div className='mb-[60px]' ref={contentRef} id='containerElement'>
                <div className=' mx-auto '>
                  <div className='flex'>
                    <h1 className='text-black text-[32px] smj:text-[22px] font-[600] text-center leading-[50px] Logosm:leading-[36px] smj:leading-[36px] py-[30px] mx-auto smj:pl-0'>
                      {Data.attributes.title}
                    </h1>
                  </div>
                  <div className='flex items-center pt-[10px] pb-[20px] justify-start smj:pl-0'>
                    <Link
                      href={`${i18}/author/${Data.attributes.tsafely_article_author.data.attributes.slug}`}
                      className='w-[50px] h-[50px] smj:w-[34px] smj:h-[34px] rounded-full overflow-hidden border-blue-200 border-[2px] '
                    >
                      <Image
                        width={100}
                        height={100}
                        src={Data.attributes.tsafely_article_author.data.attributes.profile_photo.data.attributes.url}
                        className=''
                        alt='photo'
                      />
                    </Link>
                    <div className='ml-[20px] flex items-center'>
                      <Link
                        href={`${i18}/author/${Data.attributes.tsafely_article_author.data.attributes.slug}`}
                        className='text-[#535460] text-[14px] flex-col justify-center items-center'
                      >
                        <div className='text-[18px] text-[#282938] leading-[27px] font-[600]'>{Data.attributes.tsafely_article_author.data.attributes.name}</div>
                        <div className='text-[12px] text-[#282938] leading-[18px] font-[600]'>{formatDate(Data.attributes.updatedAt)}</div>
                      </Link>
                    </div>
                  </div>
                </div>
                <Col className={styles1.ckContent} dangerouslySetInnerHTML={{ __html: Data.attributes.content }} />
              </div>
              <Cat cat={cat} />
              <div className='flex justify-between items-center mt-[30px] ml-[20px] w-[160px] smjs:hidden'>
                <div className='w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                  <Link className='w-[40px] h-[40px] flex justify-center items-center' href={Twitter} target='_blank'>
                    <Image
                      src={'/blog/Twitter.svg'}
                      height={18}
                      width={18}
                      alt='Twitter'
                      className='w-[18px] h-[18px]'
                    /></Link>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                  <Link className='w-[40px] h-[40px] flex justify-center items-center' href={facebook} target='_blank'>
                    <Image
                      src={'/blog/facebook.svg'}
                      height={22}
                      width={22}
                      alt='Facebook'
                      className='w-[22px] h-[22px]'
                    /></Link>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                  <button className='w-[40px] h-[40px] flex justify-center items-center' onClick={handleCopy}>
                    <Image
                      src={'/blog/copylink.svg'}
                      height={18}
                      width={18}
                      alt='instagram'
                      className='w-[18px] h-[18px]'
                    /></button>
                </div>
              </div>
              <div className='border-t my-4 border-[#858C9B] smjs:hidden'></div>

              {/* 评论 */}
              <Comment Data={data.data[0]} texts={dictionaries.texts} />
            </div>
            {/* 最右侧 */}
            <div className={`w-[310px] h-full smj:hidden ${scrolled280px ? 'sticky top-[0px] left-[8%] Headers5:left-[2%] Headers5:w-[20%]' : 'mt-[100px]'
              } ${scroll < 300 && scroll !== '' && 'invisible'}`}>
              <div className='min-h-[172px]'>
                <Image
                  src={'/blog/phone.svg'}
                  height={172}
                  width={172}
                  className='w-[172px] h-[172px] mx-auto translate-y-[85px]'
                  alt='2222'
                />
                <div className='bg-[#F9F5EA] w-[310px] h-auto rounded-[8px] pb-[25px] flex-col'
                  style={{ fontFamily: 'Roboto,sans-serif' }}>
                  <div className='w-[238px] text-[20px] leading-[24px] text-center font-semibold mx-auto pt-[80px]'>
                    {dictionaries.categoryList[num].name}
                  </div>
                  <div className='mt-[20px] text-[15px] leading-[18px] text-center'>
                    {dictionaries.categoryList[num].category}
                  </div>
                  <Link className='w-[225px] mt-[23px] py-[15px] h-auto bg-[#FF541C] rounded-[8px] mx-auto flex justify-center items-center'
                    href={dictionaries.StartLink} target="_blank">
                    <p className='text-[18px] leading-[18px] font-medium text-white text-center'>{dictionaries.categoryList[num].button}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='max-w-[1100px] mx-auto Blds:pb-[25px] pb-[40px] relative'>
            <Related related={related} i18={i18} relatedArticles={dictionaries.relatedArticles} ReadMore={dictionaries.ReadMore} ReadMoreLink={dictionaries.ReadMoreLink} category={dictionaries.category} />
          </div>
        </div>
      </>
    )
  }, [query, scrolled280px, scroll, open3, queryId, anchorList, expanded, flag, Data, tooltipText, num])

  useEffect(() => {
    // 获取包含所有子元素的父元素
    var featureElement = document.querySelector('.Guide')

    if (featureElement) {
      // 获取所有子元素
      var childElements = featureElement.querySelectorAll('.MuiPaper-root')

      // 遍历子元素并移除 class
      childElements.forEach(function (childElement) {
        childElement.classList.remove(
          'MuiButtonBase-root',
          'MuiAccordionSummary-root',
          'Mui-expanded',
          'MuiAccordionSummary-gutters',
          'css-1njo7bb-MuiButtonBase-root-MuiAccordionSummary-root',
          'MuiPaper-root',
          'MuiPaper-elevation',
          'MuiPaper-rounded',
          'MuiPaper-elevation1',
          'MuiAccordion-root',
          'MuiAccordion-rounded',
          'MuiAccordion-gutters',
          'pt-2',
          'pb-2',
          'bg-[#f5fafe]',
          'css-1s5gu51',
          'css-4qujed-MuiPaper-root-MuiAccordion-root'
        )
      })
    }
  }, [query, expanded])

  //百分比值
  const [percent, setPercent] = useState(0)
  const [crollRate, setScrollRate] = useState(0)

  /* 锚点检测 */
  useEffect(() => {
    const handleScroll = () => {
      var link = document.querySelectorAll('.ant-anchor-link-title')
      var active = document.querySelectorAll('.ant-anchor-link-title-active')

      let index

      setInnerWidth(window.innerWidth)

      if (window.innerWidth > 1000) {
        if (link.length !== 0) {
          // 对每个元素执行你的操作
          link.forEach(function (element) {
            element.style.borderRight = ''
            element.style.color = '#000'
          })
        }

        if (active.length !== 0) {
          // 对每个元素执行你的操作
          active.forEach(function (element) {
            element.style.borderRight = ''

            function findObjectWithHref(objArray, targetHref) {
              for (var i = 0; i < objArray.length; i++) {
                var currentObj = objArray[i]
                if (currentObj.href === targetHref) {
                  index = i
                  setExpanded(i)
                }

                if (currentObj.data && currentObj.data.length > 0) {
                  var nestedResult = findObjectWithHref(currentObj.data, targetHref)
                  if (nestedResult) {
                    index = i
                    setExpanded(i)
                  }
                }
              }

              return null
            }

            // 调用递归函数查找具有特定 href 的对象
            var foundItem = findObjectWithHref(anchorList, element.getAttribute('href'))

            // 如果找到了匹配的对象，输出它
            if (foundItem) {
            }
          })

          active[active.length - 1].style.borderRight = '0px solid #12D8AB'//pc锚点最右的边框线
        }

        /* setExpanded(0) */
      } else {
        if (link.length !== 0) {
          // 对每个元素执行你的操作
          link.forEach(function (element) {
            element.style.color = '#000'
          })
        }

        if (active.length !== 0) {
          // 对每个元素执行你的操作
          active.forEach(function (element) {
            element.style.color = '#000'
          })

          active[active.length - 1].style.color = '#12d8ab'
        }
      }

      // 获取当前屏幕的总高度
      var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

      // 获取文档的总高度
      var documentHeight = Math.max(
        document.body.scrollHeight || 0,
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0,
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0,
        document.documentElement.clientHeight || 0
      )

      // 获取滚动条的位置
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

      // 计算滚动百分比
      var scrollPercentage = (scrollTop / (documentHeight - screenHeight)) * 100

      setPercent(scrollPercentage)

      // 滚动低于200隐藏进度条，以防遮挡文字
      const currentScrollRate = window.scrollY
      setScrollRate(currentScrollRate)
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //进度条
  const Progresss = useMemo(() => {
    return (
      <Progress
        strokeLinecap='butt'
        strokeColor='#10d0a5'
        trailColor='#fff'
        percent={percent}
        showInfo={false}
        className={`${crollRate < 300 ? 'hidden' : 'block'}`}
      />
    )
  }, [percent])

  // 表格固定
  useEffect(() => {
    setTimeout(() => {
      try {
        let tableArr = document.getElementsByTagName('table')
        if (tableArr) {
          for (let i = 0; i < tableArr.length; i++) {
            let zIndex = 0
            for (let j = 0; j < tableArr[i].childNodes[0].childNodes.length; j++) {
              if (j == 0) {
                zIndex = tableArr[i].childNodes[0].childNodes[j].childNodes.length
              }

              if (zIndex == tableArr[i].childNodes[0].childNodes[j].childNodes.length) {
                tableArr[i].childNodes[0].childNodes[j].childNodes[0].style.zIndex = '31'
              }
            }
          }
        }
      } catch (error) { }
    }, 2000)
  }, [])

  const router = useRouter()

  const canonicalUrl = `https://msafely.com${router.asPath.replace(/\.html$/, "")}`

  // 更改字体大小
  const settingSize = () => {
    const content = Data.attributes.content
    var div = document.createElement("div")
    if (typeof content === 'string') div.innerHTML = content

    const arr = [
      { nodeName: 'h2', pcSize: '27px', size: '18px' },
      { nodeName: 'h2 span', pcSize: '27px', size: '18px' },
      { nodeName: 'h3', pcSize: '22px', size: '16px' },
      { nodeName: 'h3 span', pcSize: '22px', size: '16px' },
      { nodeName: 'h4', pcSize: '18px', size: '16px' },
      { nodeName: 'h4 span', pcSize: '18px', size: '16px' },
      { nodeName: 'p span', pcSize: '16px', size: '16px' }
    ]

    // 优化：根据窗口宽度设置字体大小
    const isWideScreen = window.innerWidth > 990
    const fontSizeProperty = isWideScreen ? 'pcSize' : 'size'

    arr.forEach(({ nodeName, [fontSizeProperty]: fontSize }) => {
      div.querySelectorAll(nodeName).forEach(dom => {
        dom.style.setProperty('font-size', fontSize, 'important')
      })
    })

    // 新内容
    const newContent = div.innerHTML;

    // 判断新内容是否与原内容不同
    if (newContent !== content) {
      // 创建一个新的数据对象，确保是一个新引用
      var newData = {
        ...data,
        data: [
          {
            ...data.data[0],
            attributes: {
              ...data.data[0].attributes,
              content: newContent, // 修改内容
            }
          }
        ]
      }

      // 更新状态
      setData(newData.data[0])
    }
  }

  useEffect(() => {
    settingSize()

    window.addEventListener('resize', settingSize)

    return () => {
      window.removeEventListener('resize', settingSize)
    }
  }, [])

  useEffect(() => {
    settingSize()
  }, [Data])

  const [searchData, setSearchData] = useState('')

  const blogHeaderProps = {
    dictionaries: dictionaries.blogHeader,
    styles: styles.blogHeader,
    setSearchData
  }

  return (
    <div className='relative'>
      <Head>
        <title>{Data.attributes.seo[0].metaTitle}</title>
        <meta name='description' content={Data.attributes.seo[0].metaDescription} />
        <meta name='keywords' content={Data.attributes.seo[0].keywords} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "http://schema.org",
              "@graph": [{
                "@type": "Article",
                "author": {
                  "@id": "https://msafely.com/author/${Data.attributes.tsafely_article_author.data.attributes.slug}",
                  "url": "https://msafely.com/author/${Data.attributes.tsafely_article_author.data.attributes.slug}",
                  "@type": "Person",
                  "name": "${Data.attributes.tsafely_article_author.data.attributes.name}"
                },
                "copyrightHolder": {
                  "@id": "https://msafely.com#identity"
                },
                "copyrightYear": "2024",
                "description": "${Data.attributes.seo[0].metaDescription}",
                "headline": "${Data.attributes.seo[0].metaTitle}",
                "image": {
                  "@type": "ImageObject",
                  "height": "210",
                  "url": "${Data.attributes.image.data[0].attributes.url}",
                  "width": "380"
                },
                "inLanguage": "en-us",
                "mainEntityOfPage": "${canonicalUrl}",
                "name": "${Data.attributes.seo[0].metaTitle}",
                "publisher": {
                  "@id": "https://msafely.com#creator"
                },
                "url": "${canonicalUrl}"
              }, {
                "@type": "BreadcrumbList",
                "description": "Breadcrumbs list",
                "itemListElement": [{
                  "@type": "ListItem",
                  "item": "https://msafely.com",
                  "name": "Homepage",
                  "position": 1
                }, {
                  "@type": "ListItem",
                  "item": "https://msafely.com/blog",
                  "name": "The Msafely Blog",
                  "position": 2
                }, {
                  "@type": "ListItem",
                  "item": "${canonicalUrl}",
                  "name": "${Data.attributes.seo[0].metaTitle}",
                  "position": 3
                }],
                "name": "Breadcrumbs"
              }]
            }`
          }}
        />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "${Data.attributes.title}",
          "datePublished": "${Data.attributes.createdAt}",
          "dateModified": "${Data.attributes.updatedAt}"
          }`}}
        />
      </Head>
      {/* <IndexHeader dictionaries={dictionaries.indexHeader} styles={styles.indexHeader} /> */}
      <BlogHeader {...blogHeaderProps} />

      <div className='top-[56px] h-[14px] fixed w-full z-[10]'>{Progresss}</div>

      {Content}
      <div className='smj:mb-[20px]'>
        <IndexFooter dictionaries={dictionaries.indexFooter} styles={styles.indexFooter} />
      </div>
    </div>
  )
}
