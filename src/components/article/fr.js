import { blogHeaderDictionaries, blogHeaderStyles } from "@/components/article/header_fr"
import { footerDictionaries, footerStyles } from "@/components/article/footer_fr"

export const articleDictionaries = {
  prefixPath: '/fr',
  lang: 'fr',
  home: 'Home',
  tableOfContents: 'Table des matières',
  cat: {
    title1: "Le choix numéro 1 pour assurer la sécurité de vos enfants - en toute sécurité",
    title2: "Moins d'inquiétude, plus de contrôle",
    button: "Essayez Msafely maintenant",
    href: '/'
  },
  texts: {
    comments: 'Commentaires',
    leaveAReply: 'Laissez une réponse :',
    content: `Votre adresse électronique ne sera pas publiée. Les champs obligatoires sont marqués *`,
    comment: 'Commentaire',
    name: 'Nom *',
    email: 'Courriel *',
    postComment: 'Post Commentaire',
    content2: `Publié avec succès ! Votre commentaire sera visible une fois approuvé.`
  },
  relatedArticles: 'Articles connexes',
  Share: 'Partager',
  TableOfContents: 'Table des matières',
  ReadMore: 'En savoir plus',
  ReadMoreLink: '/fr/blog',
  category: [
    { key: 'teen-slang', value: "langage d'ado" },
    { key: 'tips', value: 'conseils' },
    { key: 'phone-monitor', value: 'moniteur téléphone' },
    { key: 'parental-controls', value: 'Contrôle Parental' },
    { key: 'spy-app', value: 'application-espion' }
  ],
  blogHeader: blogHeaderDictionaries,
  indexFooter: footerDictionaries,
  StartLink: "/fr/inscription",
  copy: "Copie",
  copied: 'Copié',
  categoryList: [
    { name: 'Vos enfants sont-ils en sécurité en ligne ?', category: 'Découvrez la vérité avec Msafely !', button: 'Essayez Msafely Maintenant' },
    { name: 'Plus de secrets !', category: 'Il n’existe pas de meilleure solution de surveillance.', button: 'Essayez Msafely Maintenant' },
    { name: "Avec Msafely, vous disposez d'une application de surveillance complète, tout en un.", category: 'Démarrage facile en 2 minutes', button: 'Commencer à Surveiller' },
    { name: "Avec Msafely, vous disposez d'une application de surveillance complète, tout en un.", category: 'Démarrage facile en 2 minutes', button: 'Commencer à Surveiller' },
  ],
  categoryArray: [
    'controle-parental',
    'meilleur',
    'avis',
    'guides-pratiques',
  ]
}

export const articleStyles = {
  blogHeader: blogHeaderStyles,
  indexFooter: footerStyles
}
