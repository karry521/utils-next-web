import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import IndexHeader from '@/components/article/header'
import IndexFooter from '@/components/article/footer'
import { blogHeaderDictionaries, blogHeaderStyles } from '@/components/article/header_fr'
import { footerDictionaries, footerStyles } from '@/components/article/footer_fr'
import Article from '@/components/article'
import { articleDictionaries, articleStyles } from '@/components/article/fr'

const Demo = ({ data, related }) => {
    return (
        <>
            {/* <IndexHeader dictionaries={blogHeaderDictionaries} styles={blogHeaderStyles} />
            <IndexFooter dictionaries={footerDictionaries} styles={footerStyles} /> */}
            <Article dictionaries={articleDictionaries} styles={articleStyles} i18='fr' data={data} related={related} />
        </>
    )
}

export default Demo

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: `https://strapi.msafely.com/graphql`,
        cache: new InMemoryCache()
    })

    const query1 = `
        query {
          tsafelyArticles(
            locale:"fr"
            filters: {
              slug: { eq:"snapchat-cest-dangereux-pour-enfants-vrai-ou-faux"}
              isBlog:  { eq: null }
            }
          ) {
            data {
              id
              attributes {
                title
                content
                createdAt
                updatedAt
                subtitle
                slug
                seo {
                metaTitle
                metaDescription
                keywords
              }
              style
              li_meta
                tsafely_article_author {
                  data {
                    id
                    attributes {
                      name
                      slug
                      profile_photo {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                tsafely_category {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
                image {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
        }`

    const { data: res } = await client.query({
        query: gql(query1)
    })

    const query2 = `
        query {
          tsafelyArticles(
            sort: "updatedAt:desc"
            pagination: { page: 1, pageSize: 3 }
            locale:"fr"
            filters: {
              tsafely_category: { name: { eq: "controle-parental" } }
              slug: { ne:"snapchat-cest-dangereux-pour-enfants-vrai-ou-faux"}
              isBlog: { eq: null } 
            }
          ) {
            data {
              id
              attributes {
                title
                content
                updatedAt
                subtitle
                slug
                seo {
                metaTitle
                metaDescription
                keywords
              }
              style
              li_meta
                tsafely_article_author {
                  data {
                    id
                    attributes {
                      name
                      slug
                      profile_photo {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                tsafely_category {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
                image {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
        }`

    const { data: related } = await client.query({
        query: gql(query2)
    })

    return {
        props: {
            data: res.tsafelyArticles,
            related: related.tsafelyArticles,
        }
    }
}