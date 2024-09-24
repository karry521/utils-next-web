import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

function Index({ related, i18, relatedArticles, category, ReadMore, ReadMoreLink }) {

  // 获取文章分类url
  const handleCategoryHref = (category) => {
    let path = '/' + category.replace('jp-', 'jp/').replace('de-', 'de/')

    if (!(path.startsWith('/de/') || path.includes('/jp/')) && i18 !== '') path = i18 + path

    switch (path) {
      case '/best':
        path = '/top'
        break
      case '/alternatives':
        path = '/compare'
    }

    return path
  }

  return (
    <div className='Mlg:w-[90%] lg:smj:w-[690px] smjs:mt-[60px] smjs:Bxl:w-[930px] Bxls:w-[1200px] mx-auto flex flex-col justify-center' >
      {/* 副标题 */}
      < div className='w-full smjs:mx-[15px]' >
        <div className='flex justify-between items-center'>
          <h2 className='w-auto text-[#000] flex text-[19px] font-[600] my-2 mr-4'>{relatedArticles}</h2>
          <Link className='text-[15px] text-[#AAABAC] leading-[18px] font-[600] smjs:pr-[2.5%] hover:text-[#12D8AB]'
            href={ReadMoreLink}>{ReadMore}</Link>
        </div>
      </div >

      {/* 博客文章 */}
      <div className='grid grid-cols-3 smj:grid-cols-1 gap-4'>
        {
          related.data.map((item) => {
            return (
              <div key={item.id} className='px-[15px] py-3 transition delay-100 hover:shadow-[#c1c1c1] hover:shadow-blog Bld:shadow-gray Bld:shadow-2xl rounded-[8px]'>
                <a href={`${handleCategoryHref(item.attributes['tsafely_category'].data.attributes.name)}/${item.attributes.slug}`}>
                  <Image
                    width={100}
                    height={100}
                    alt={`tsafely_category${item.id}`}
                    className='h-[220px] w-full rounded smj:mb-1'
                    src={item.attributes.image.data[0].attributes.url}
                  />
                  <p className='text-[#000] smj:min-h-[70px] hover:text-[lightseagreen] text-[18px] leading-[27px] font-semibold text-left py-2'>{item.attributes.title}</p>
                </a>
                <div className='flex flex-col items-start text-[14px] my-2 text-left'>
                  <div className='mr-[20px] smj:mb-1'>
                    {/* 可以在这里添加作者和分类信息 */}
                  </div>
                  <div className='text-[12px] text-[#262626] leading-[18px]'>{dayjs(item.updateAt).format('YYYY-MM-DD')}</div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div >
  )
}

export default Index
