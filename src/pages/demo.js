import Article from '@/components/article'
import { articleDictionaries, articleStyles } from '@/components/article/fr'

const Demo = () => {
  return (
    <Article dictionaries={articleDictionaries} styles={articleStyles} i18='fr' />
  )
}

export default Demo