import { Fragment } from "react"
import axios from "axios"
import { error } from "console"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const StrapiTest = ({ data }) => {
    return (
        <Fragment>
            <div className='w-full h-[500px] flex flex-col justify-center items-center'>
                <strong>This is “strapi” Test Page</strong>

                <div>
                    <h1>以下是查询到的数据</h1>
                    <p>title:{data.title}</p>
                    <p>content:{data.content}</p>
                </div>
            </div>


        </Fragment>
    )
}

export default StrapiTest

export const getStaticProps = async () => {
    try {
        const { data: res } = await axios.get(process.env.STRAPI_URL + '/api/tests', {
            params: {
                'filters[title][$contains]': '第一个',

            }
        })

        const obj = { [`filters[${1}][${2}]`]: '第一個' }

        const query = `
        query{
            tests(
            locale:"zh-Hans"
            filters:{slug:{eq:"one-tw"}}
            ) {
            title
            slug
            content
            locale
            }
        }`

        const client = new ApolloClient(
            {
                uri: 'https://sublime-horn-b5c92e7fe5.strapiapp.com/graphql',
                cache: new InMemoryCache()
            }
        )

        const { data: test } = await client.query({
            query: gql(query)
        })

        console.log('test:::', test)

        return {
            props: {
                data: res.data[0]
            }
        }
    } catch {
        console.log(error)
        return {
            props: {
                data: null
            }
        }
    }
}