import Head from 'next/head'
import TableCk5 from '@/components/table_ck5'
import TitleAndImage from '@/components/titleAndImage'
import Templates from '@/components/templates'

const Home = () => {

  return (
    <>
      <Head>
        <title>后台文章工具</title>
      </Head>
      <div className='w-[1440px] mx-auto mt-20 flex flex-col items-center gap-4'>

        {/* 富文本编辑 */}
        <TableCk5 />

        {/* 标题结合图标 */}
        <TitleAndImage />

        {/* <Templates /> */}
      </div>
    </>
  )
}

export default Home