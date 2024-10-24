import React, { useEffect, useMemo, useRef, useState, Fragment } from 'react'
import BlogHeader from '@/components/article/header'
import IndexFooter from '@/components/article/footer'
import Image from 'next/image'
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

const Col = dynamic(() => import('antd').then(mod => mod.Col), { ssr: false });
const Drawer = dynamic(() => import('antd').then(mod => mod.Drawer), { ssr: false });
const Progress = dynamic(() => import('antd').then(mod => mod.Progress), { ssr: false });
const Row = dynamic(() => import('antd').then(mod => mod.Row), { ssr: false });
const ExpandLessIcon = dynamic(() => import('@mui/icons-material/ExpandLess'), { ssr: false });
const ExpandMoreIcon = dynamic(() => import('@mui/icons-material/ExpandMore'), { ssr: false });

export default function Article({ dictionaries, styles, i18 }) {
  const [data, setData] = useState({
    "__typename": "TsafelyArticleEntityResponseCollection",
    "data": [
      {
        "__typename": "TsafelyArticleEntity",
        "id": "842",
        "attributes": {
          "__typename": "TsafelyArticle",
          "title": "Snapchat c'est dangereux pour enfants : Vrai ou faux",
          "content": "<p>Snapchat est désormais une application largement utilisée en France. Le <a href=\"https://www.cyberghostvpn.com/fr/privacyhub/snapchat_dangereux/\" target=\"_blank\" rel=\"nofollow\">rapport Born Social</a> indique que Snapchat est le réseau social favori des enfants de 11-12 ans avec une proportion de 35 % et surpasse TikTok et Instagram. De ce fait, on peut affirmer qu’il existe un « âge Snapchat » et il est nécessaire pour les parents de prendre connaissance du fonctionnement de ce réseau social.</p><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:60%!important;\">\n                <img src=\"https://image.msafely.com/20240909/statistiques-d-utilisation-de-snapchat.webp\" alt=\"\n                Les plateformes sociales utilisées régulièrement par less 11-12 ans\">\n            \n    </figure>\n</div><p>Cet article vous détaille en quoi une utilisation abusive de l’application peut nous faire dire que <strong>Snapchat c'est dangereux </strong>et quelles sont les précautions à prendre pour une utilisation responsable de Snapchat par votre enfant.</p><h2><span style=\"font-size:18px;\"><strong>Partie 1. Qu'est-ce que Snapchat</strong></span></h2><h3><span style=\"font-size:16px;\"><strong>1.1. Comment fonctionne Snapchat</strong></span></h3><p>Qu'est-ce que SnapChat<strong> </strong>? Snapchat est une application que l’on peut télécharger avec les systèmes Android et iOS sur les appareils mobiles pour une installation Snapchat. Il est également possible d’acquérir Snapchat sur le site Internet. Le concept a été très rapidement populaire suite à sa création en 2011.</p><p>Le concept de cette application consiste à envoyer des photos, vidéos et messages qui seront automatiquement effacés après consultation. C’est là que réside le succès de ce réseau social qui est désormais prisé par la jeunesse.</p><p>Snapchat est ainsi une application où le contenu est éphémère, contrairement à des applications comme Facebook. En effet, il ne sera plus possible de consulter un Snap ou un message après sa visualisation, car il sera autodétruit. Les enfants aiment utiliser cette application et il existe un âge légal Snapchat.</p><h3><span style=\"font-size:16px;\"><strong>1.2. Les fonctionnalités de Snapchat</strong></span></h3><p>Snapchat dispose principalement de ces fonctionnalités :</p><ul><li><strong>Snaps :</strong> il est possible d’envoyer à un correspondant des messages, photos et vidéos avec des effets spéciaux et des filtres après une installation Snapchat. Il est notamment possible de sauvegarder ses snaps favoris avec la fonctionnalité Memories.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/snap.webp\" alt=\"\n                Snap\">\n            \n    </figure>\n</div><ul><li><strong>Stories :</strong> les stories constituent des snaps qui peuvent être visionnés par les contacts de votre enfant durant une période de 24 heures.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/stories.webp\" alt=\"\n                Stories\">\n            \n    </figure>\n</div><ul><li><strong>Parler à ses amis : </strong>votre enfant peut parler par chat vidéo en direct avec ses amis ou un groupe d’amis à condition de respecter les critères d’âge Snapchat<strong> </strong>pour une utilisation responsable.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/chat.webp\" alt=\"\n                Chat\">\n            \n    </figure>\n</div><ul><li><strong>Avatar :</strong> il est possible de créer un avatar personnalisé Bitmoji qui est à son image ou pas.</li><li><strong>Cart Snap Map : </strong>votre enfant peut donner sa position géographique avec la carte Snap Map.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/snap-map.webp\" alt=\"\n                Cart Snap Map\">\n            \n    </figure>\n</div><ul><li><strong>Discover :</strong> il s’agit d’une fonctionnalité qui présente du contenu issu de grands éditeurs.</li></ul><h2><span style=\"font-size:18px;\"><strong>Partie 2. Snapchat est-il dangereux pour les enfants</strong></span></h2><h3><span style=\"font-size:16px;\"><strong>2.1. Les inconvénients de Snapchat</strong></span></h3><p>Est-ce que SnapChat est dangereux ? Nous ne pouvons pas répondre à cette question par l’affirmative ou la négative, car à certains égards, tous les <a href=\"https://msafely.com/fr/controle-parental/les-dangers-des-reseaux-sociaux\">médias sociaux</a> peuvent être dangereux pour les enfants. Par exemple, les aspects suivants :</p><ul><li><strong>Contenu non adapté :</strong> il est possible que votre enfant puisse visionner du contenu choquant et violent. En effet, la fonctionnalité Discover peut exposer votre enfant à du contenu non adapté à un public jeune, comme des messages ou des images inappropriés.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/les-inconvenients-de-snapchat.webp\" alt=\"\n                Des contenu non adapté sur Snapchat\">\n            \n    </figure>\n</div><ul><li><strong>Dépendance :</strong> il s’agit d'un aspect sur les dangers de Snapchat en raison de l’aspect éphémère des échanges avec d’autres utilisateurs. Ce caractère éphémère peut amener à une forme de dépendance. Il est ainsi primordial de surveiller l’utilisation de Snapchat de votre enfant pour ne pas prendre le risque d’impacter sa santé mentale et physique. Il est à noter que Snapstreak est une fonctionnalité qui permet d’échanger en continu, avec un contact, à condition de maintenir une petite flamme. Cela peut ainsi rendre votre enfant dépendant de cette application et l’inciter à rester dessus et à utiliser d’autres services qui peuvent entraîner une certaine addiction à Snapchat.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/snapstreak.webp\" alt=\"\n                Snapstreak\">\n            \n    </figure>\n</div><ul><li><strong>Publicités cachées :</strong> les influenceurs sont désormais un phénomène de société et votre enfant peut visualiser les stories des influenceurs sur Snapchat, qui constitue un lieu idéal pour avoir de la visibilité. Ces influenceurs effectuent régulièrement des actions Snapchat avec des publicités que l’on nomme « placements de produit ». Le danger réside dans le fait que certains influenceurs ne respectent pas la réglementation relative à la publicité et n’indiquent pas que certains snaps sont sponsorisés par des marques ou des entreprises. Cela peut exposer votre enfant à des publicités cachées.</li><li><strong>Parler à des personnes malveillantes : </strong>les réseaux sociaux comme Snapchat peuvent être le terrain de chasse de personnes malveillantes ou encore d’escrocs. Ce réseau social peut être propice au cyberharcèlement; au développement d’activités illicites comme la vente de drogue ou encore au vol de données personnelles de votre enfant qui peut affirmer que Snapchat c'est dangereux.</li><li><strong>Vie privée : </strong>le partage de contenus personnels doit être encadré par les parents, car des personnes malveillantes peuvent éventuellement visionner les contenus de votre enfant. Il est essentiel que les contenus soient strictement limités à une audience que votre enfant connaît dans la vie réelle, comme les amis les plus proches ou la famille. Des personnes malveillantes peuvent capturer le contenu de votre enfant et le partager sur d’autres plateformes pouvant mener à des dérives comme le cyberharcèlement.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:50%!important;\">\n                <img src=\"https://image.msafely.com/20240909/snapchat-cyberharcelement.webp\" alt=\"\n                Snapchat cyberharcèlement\">\n            \n    </figure>\n</div><h3><span style=\"font-size:16px;\"><strong>2.2. Les avantages d’utiliser Snapchat pour un enfant</strong></span></h3><p>Il y a deux côtés à tout, et l’utilisation correcte de Snapchat peut également apporter certains avantages aux enfants.</p><ul><li><strong>Améliorer la communication avec le monde extérieur :</strong> l’enfant peut échanger de manière instantanée avec ses amis avec un « Snap ». C’est une fonctionnalité qui permet ainsi de partager son humeur de manière immédiate, ce qui est particulièrement plaisant pour les enfants qui aiment tout ce qui est instantané. L’application donne la possibilité aux enfants de maintenir et consolider leurs relations sociales et de rester connectés avec leurs amis et de ne pas les confronter à l’isolement social.</li><li><strong>Stimuler la créativité d'enfant :</strong> les enfants peuvent effectuer des retouches d’images grâce aux nombreux filtres disponibles sur l’application. L’enfant peut ainsi faire apparaître de nombreux effets spéciaux sur une image où il figure, comme une moustache, un chapeau, des étoiles, pouvant stimuler son sens de la créativité. Snapchat propose régulièrement de nouveaux filtres par rapport aux événements du moment ( Noël, Pâques…).</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:50%!important;\">\n                <img src=\"https://image.msafely.com/20240909/les-avantages-d-utiliser-snapchat-pour-un-enfant.webp\" alt=\"\n                Les avantages d’utiliser Snapchat pour un enfant\">\n            \n    </figure>\n</div><ul><li><strong>Développer des compétences numériques :</strong> une installation Snapchat<strong> </strong>est disponible uniquement sur les appareils mobiles, permettant à cette application d’être très populaire parmi un public jeune qui est féru de smartphones. L’enfant peut utiliser un service dédié lui permettant de développer ses aptitudes à utiliser les nouvelles technologies et de développer ses compétences dans le domaine numérique.</li><li><strong>Sensibiliser son enfant à la sécurité numérique :</strong> votre enfant peut apprendre comment façonner son identité numérique et protéger ses informations personnelles. Snapchat peut le sensibiliser sur le contenu qu’il peut partager et le responsabiliser pour une bonne utilisation des réseaux sociaux.</li></ul><p>Une bonne utilisation de cette application nécessite pour les parents d’être sensibilisés aux dangers de Snapchat. Les avantages sont multiples, mais il faut prendre connaissance des potentiels dangers auxquels l’enfant peut être exposé afin de ne pas rencontrer de problèmes inattendus et de se confronter à un danger snap.</p><h2><span style=\"font-size:18px;\"><strong>Partie 3. Comment rendre Snapchat plus sûr pour les enfants</strong></span></h2><p>Si votre enfant utilise Snapchat et que vous vous inquiétez, vous pouvez dissiper vos doutes et vos inquiétudes avec le <a href=\"https://msafely.com/fr/controle-parental/controle-parental-snapchat\">contrôle parental Snapchat</a>.</p><h3><span style=\"font-size:16px;\"><strong>Méthode 1 : Activer les contrôles parentaux de Snapchat</strong></span></h3><p>Il est possible de protéger la vie privée de votre enfant à travers la configuration de Family Center sur Snapchat. Voici les différentes étapes à suivre :</p><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/family-center-sur-snapchat.webp\" alt=\"\n                Family Center sur Snapchat\">\n            \n    </figure>\n</div><ol style=\"list-style-type:decimal;\"><li>Téléchargez l’application Snapchat.</li><li>Ajouter le nom d'utilisateur de votre enfant ou adolescent dans votre liste d’amis.</li><li>Accéder à Family Center nécessite de suivre les étapes suivantes : rendez-vous dans les paramètres puis Family Center.</li><li>Lorsque votre enfant aura accepté votre demande d’ajout, vous pourrez lancer le service Family Center.</li><li>Votre enfant devra accepter l'invitation et Snapchat vous informera de la mise à jour de l’invitation.</li><li>Il sera ainsi possible de surveiller l’activité de votre enfant et de procéder à la configuration du contrôle du contenu.</li></ol><p>C’est une bonne idée de configurer la confidentialité et de lui apprendre à le signaler.</p><ul><li><strong>Paramétrer les options de confidentialité pour restreindre l'accès aux contenus :</strong> il est important d’effectuer un réglage optimal des options de confidentialité de l’application Snapchat pour votre enfant. Cela permettra à votre enfant de partager du contenu à une liste de contact restreinte. Il est également préférable de désactiver la fonctionnalité de partage de localisation.</li></ul><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:40%;\">\n                <img src=\"https://image.msafely.com/20240909/desactiver-la-partage-de-localisation.webp\" alt=\"\n                Désactiver la partage de localisation avec d'autres personnes\">\n            \n    </figure>\n</div><ul><li><strong>Signaler tout comportement suspect ou inconfortable :</strong> Pour tous les parents dont un ou plusieurs enfants utilisent Snapchat, il est nécessaire de suivre leur activité sur le réseau social après une installation Snapchat. En tant que parent, vous devriez prendre l'initiative de parler plus souvent à votre enfant. Apprenez à connaître sa vie en ligne. Apprenez à votre enfant à peser correctement les avantages et les inconvénients de l'Internet et à signaler les personnes qui le harcèlent.</li></ul><h3><span style=\"font-size:16px;\"><strong>Méthode 2 : Utiliser une application de contrôle parental comme Msafely</strong></span></h3><p>En plus d’utiliser le contrôle parental de Snapchat, vous pouvez également utiliser un logiciel de surveillance parentale tiers. Msafely est une application qui permet de surveiller l’appareil mobile de votre enfant et de prévenir les dangers de Snapchat. En effet, Msafely donne la possibilité de surveiller l’activité de votre enfant à distance et en toute discrétion.</p><div class=\"raw-html-embed\">\n        \n    <figure class=\"image image_resized upright\" style=\"width:30%;\">\n                <img src=\"https://image.msafely.com/20240909/controle-parental-de-snapchat-msafely.webp\" alt=\"\n                Contrôle parental de Snapchat\">\n            \n    </figure>\n</div><p><strong>Fonctionnalités de Msafely</strong></p><p>Vous avez la possibilité d’accéder à une panoplie de fonctionnalités lorsque votre enfant aura effectué une installation Snapchat :</p><ul><li>Lecture des conversations Snapchat de votre enfant.</li><li>Surveillance de la liste des contacts et des amis présents sur le compte Snapchat de votre enfant.</li><li>Affichez le nom du destinataire et l’heure et la date d’envoi ainsi que la réception du message.</li><li>En outre, il est possible de suivre l’activité de votre enfant sur plus de 10 applications comme <a href=\"https://msafely.com/fr/guides-pratiques/lire-les-messages-whatsapp-de-quelquun-gratuit\">WhatsApp</a>, LINE, Facebook <a href=\"https://msafely.com/fr/guides-pratiques/conversation-secrete-messenger\">Messenger</a>, <a href=\"https://msafely.com/fr/guides-pratiques/voir-un-compte-instagram-prive\">Instagram</a>, Snapchat, Telegram, Tiktok, Kik, Skype, YouTube, WeChat, Viber, Tinder, Teams, QQ, Discord.</li><li>Suivi des applications installées : Msafely donne la possibilité de suivre les différentes applications que votre enfant a installées.</li></ul><p><strong>Étapes simples pour installer Msafely</strong></p><ol style=\"list-style-type:decimal;\"><li>Créer un compte sur le site Internet de Msafely avec votre adresse e-mail.</li><li>Sélectionnez le type d’appareil de votre enfant : Android ou iOS.</li><li>Il sera nécessaire de relier l’appareil mobile de votre enfant et de vous connecter sur le tableau de bord.</li><li>Vous pourrez suivre l’activité Snapchat de votre enfant.</li><li>Vous pouvez également afficher d’autres activités sur les réseaux sociaux via le tableau de bord.</li></ol><div class=\"raw-html-embed\"><div class=\"raw-html-embed\"><nav class=\"CTA\" style=\"\n    padding: 18px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 0.375rem;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n    margin: 6px auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n    background-color: #012133;\n  \">\n  <div class=\"CTA2\" style=\"width: 60%; text-align: center; margin: 0 auto\">\n    <p style=\"font-size: 17px;font-weight: 600;color: #fff;display: flex;flex-direction: column;\">\n    Trouver la meilleure solution de surveillance - Msafely\n    </p>\n\n    <p style=\"font-size: 15px; color: #a4b1b7; margin-top: 2px\">\n     Démarrage facile en 2 étapes !\n    </p>\n  </div>\n  <a href=\"/fr/inscription\" class=\"buy-group-btn\" style=\"\n      display: flex;\n      margin: 0 auto;\n      margin-right: 0;\n      align-items: center;\n      justify-content: center;\n      margin-top: 4px;\n      text-decoration:none\n    \">\n    <div>\n      <div style=\"\n          width: 140px;\n          height: 40px;\n          background-color: #50e3c2;\n          border-radius: 0.375rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          color: white;\n          font-weight: 600;\n          text-wrap: nowrap;\n          width: auto;\n          padding: 0 1rem;\n        \">\n       Essayez Msafely Maintenant\n      </div>\n    </div>\n  </a>\n</nav>\n\n<style>\n  @media (max-width: 768px) {\n    .CTA {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .CTA .CTA2 {\n      width: 100% !important;\n    }\n    .buy-group-btn {\n      margin-right: auto !important;\n    }\n  }\n</style>\n</div></div><h2><span style=\"font-size:18px;\"><strong>Partie 4. FAQ</strong></span></h2><p><strong>Q1. Est-ce que Snapchat est dangereux ?</strong></p><p>L’application Snapchat pour enfant présente des risques pour votre enfant dans le cas d’une utilisation non contrôlée. En effet, les risques sont réels. Comme le cyberharcèlement ou encore le risque de visualiser du contenu violent. Cependant, il est possible de faire en sorte que Snapchat ait un espace sécurisé par utilisation de la fonction Family Center ou par installation d’une application de surveillance des téléphones mobiles comme Msafely.</p><p><strong>Q2. À quel âge peut-on avoir Snapchat ?</strong></p><p>Il est vivement conseillé d’acquérir Snapchat à partir de l’âge de 13 ans ou plus afin de pouvoir créer un compte et utiliser les services de Snapchat. Il est à noter que Snapchat indique que son application n’est pas adaptée aux moins de 13 ans concernant l’âge légal de Snapchat.</p><p><strong>Q3. Comment être invisible sur Snapchat ?</strong></p><p>Pour pouvoir comment être invisible sur Snapchat, il est nécessaire d’utiliser le mode fantôme. Ce mode permet de cacher la localisation de votre enfant, mais le temps d’utilisation est limité et l’application va demander à votre enfant le temps souhaité. Pour pouvoir activer ce mode, il est nécessaire de se rendre sur la carte de Snapchat et d’appuyer sur le bouton destiné aux réglages en haut de l’écran. Le mode Fantôme pourra être activé.</p><p><strong>Q4. Quel est l'intérêt d'avoir Snapchat ?</strong></p><p>Snapchat donne la possibilité à votre enfant d'interagir avec ses amis et membres de sa famille à travers des messages, images et vidéos qui s’autodétruisent. Il est possible de partager des « stories » et ainsi de rester en contact avec ses proches. Cependant, il est nécessaire de sensibiliser votre enfant sur les dangers de Snapchat.</p><p><strong>Q5. Pourquoi les enfants aiment-ils autant Snapchat ?</strong></p><p>La principale raison est le divertissement et le fait de pouvoir parler à ses amis. Snapchat est une application très amusante à utiliser et il y a beaucoup à découvrir après une installation Snapchat. Snapstreaks et Stories ajoutent un élément de pression temporelle qui donne aux enfants l'impression qu'ils doivent s'enregistrer.</p><h2><span style=\"font-size:18px;\"><strong>Partie 5. Conclusion</strong></span></h2><p>L'application Snapchat peut être à la fois une application sûre, mais présente des risques pour les enfants, et il est nécessaire d’être bien informé sur l’âge<strong> Snapchat</strong>. Tout dépend de l’utilisation. Les risques sont nombreux, comme la cyberintimidation, le cyberharcèlement, le risque de visualiser du contenu choquant et inadapté pour les enfants ou encore le vol de données personnelles.</p><p>L'utilisation de Snapchat par votre enfant nécessite un encadrement et une sensibilisation sur le comportement à adopter et les réglages à effectuer pour protéger votre enfant des dérives de Snapchat. Une application comme Msafely peut être la solution idéale pour protéger votre enfant du <strong>danger Snapchat</strong>.</p>",
          "createdAt": "2024-09-11T07:00:37.091Z",
          "updatedAt": "2024-09-13T06:12:03.784Z",
          "subtitle": "Le rapport Born Social indique que Snapchat est le réseau social favori des enfants de 11-12 et voire surpasse TikTok et Instagram. Votre enfant utilise-t-il Snapchat ? Savez-vous quels dommages Snapchat peut causer à vos enfants ? Découvrons-le.",
          "slug": "snapchat-cest-dangereux-pour-enfants-vrai-ou-faux",
          "seo": [
            {
              "__typename": "ComponentSharedSeo",
              "metaTitle": "Snapchat C'est Dangereux pour Enfants : Vrai ou Faux",
              "metaDescription": "Le rapport Born Social indique que Snapchat est le réseau social favori des enfants de 11-12 et voire surpasse TikTok et Instagram. Votre enfant utilise-t-il Snapchat ? Savez-vous quels dommages Snapchat peut causer à vos enfants ? Découvrons-le.",
              "keywords": null
            }
          ],
          "style": true,
          "li_meta": null,
          "tsafely_article_author": {
            "__typename": "TsafelyArticleAuthorEntityResponse",
            "data": {
              "__typename": "TsafelyArticleAuthorEntity",
              "id": "16",
              "attributes": {
                "__typename": "TsafelyArticleAuthor",
                "name": "Luster Gaerten",
                "slug": "luster-gaerten-fr",
                "profile_photo": {
                  "__typename": "UploadFileEntityResponse",
                  "data": {
                    "__typename": "UploadFileEntity",
                    "id": "167",
                    "attributes": {
                      "__typename": "UploadFile",
                      "name": "luster-gaerten.jpg",
                      "url": "https://image.msafely.com/20231011/luster_gaerten_df521a2bfa.jpg"
                    }
                  }
                }
              }
            }
          },
          "tsafely_category": {
            "__typename": "TsafelyCategoryEntityResponse",
            "data": {
              "__typename": "TsafelyCategoryEntity",
              "id": "51",
              "attributes": {
                "__typename": "TsafelyCategory",
                "name": "controle-parental"
              }
            }
          },
          "image": {
            "__typename": "UploadFileRelationResponseCollection",
            "data": [
              {
                "__typename": "UploadFileEntity",
                "id": "2083",
                "attributes": {
                  "__typename": "UploadFile",
                  "name": "snapchat-cest-dangereux-pour-enfants-vrai-ou-faux.webp",
                  "url": "https://image.msafely.com/20240909/snapchat-cest-dangereux-pour-enfants-vrai-ou-faux.webp"
                }
              }
            ]
          }
        }
      }
    ]
  })

  const related = {
    "tsafelyArticles": {
      "__typename": "TsafelyArticleEntityResponseCollection",
      "data": [
        {
          "__typename": "TsafelyArticleEntity",
          "id": "910",
          "attributes": {
            "__typename": "TsafelyArticle",
            "title": "Acronyme IIRC : Signification et usage dans le langage des ados",
            "updatedAt": "2024-10-09T07:15:38.336Z",
            "subtitle": "Vous entendez souvent votre enfant utiliser l’argot IIRC et vous vous demandez ce que cela signifie vraiment ? Découvrez dans cet article son véritable sens et comment en discuter avec lui pour rester connecté !",
            "slug": "iirc",
            "style": true,
            "li_meta": null,
            "tsafely_article_author": {
              "__typename": "TsafelyArticleAuthorEntityResponse",
              "data": {
                "__typename": "TsafelyArticleAuthorEntity",
                "id": "14",
                "attributes": {
                  "__typename": "TsafelyArticleAuthor",
                  "name": "Allen Jake",
                  "slug": "allen-jake-fr",
                  "profile_photo": {
                    "__typename": "UploadFileEntityResponse",
                    "data": {
                      "__typename": "UploadFileEntity",
                      "id": "164",
                      "attributes": {
                        "__typename": "UploadFile",
                        "name": "allen-jake.jpg",
                        "url": "https://image.msafely.com/20231011/allen_jake_91b9119418.jpg"
                      }
                    }
                  }
                }
              }
            },
            "tsafely_category": {
              "__typename": "TsafelyCategoryEntityResponse",
              "data": {
                "__typename": "TsafelyCategoryEntity",
                "id": "51",
                "attributes": {
                  "__typename": "TsafelyCategory",
                  "name": "controle-parental"
                }
              }
            },
            "image": {
              "__typename": "UploadFileRelationResponseCollection",
              "data": [
                {
                  "__typename": "UploadFileEntity",
                  "id": "2436",
                  "attributes": {
                    "__typename": "UploadFile",
                    "name": "que-signifie-iirc.webp",
                    "url": "https://image.msafely.com/20241009/que-signifie-iirc.webp"
                  }
                }
              ]
            }
          }
        },
        {
          "__typename": "TsafelyArticleEntity",
          "id": "904",
          "attributes": {
            "__typename": "TsafelyArticle",
            "title": "Signification de l'argot OTP : les tenants et aboutissants de cet acronyme populaire",
            "updatedAt": "2024-10-08T09:06:17.349Z",
            "subtitle": "Que signifie vraiment l'argot OTP ? Pourquoi ce terme fascine-t-il tant les jeunes ? Comment cet argot a gagné en popularité et dans quelles situations l'utiliser. Explorez ensemble !",
            "slug": "que-signifie-otp",
            "style": true,
            "li_meta": null,
            "tsafely_article_author": {
              "__typename": "TsafelyArticleAuthorEntityResponse",
              "data": {
                "__typename": "TsafelyArticleAuthorEntity",
                "id": "15",
                "attributes": {
                  "__typename": "TsafelyArticleAuthor",
                  "name": "Hof Ma",
                  "slug": "hof-ma-fr",
                  "profile_photo": {
                    "__typename": "UploadFileEntityResponse",
                    "data": {
                      "__typename": "UploadFileEntity",
                      "id": "165",
                      "attributes": {
                        "__typename": "UploadFile",
                        "name": "hof-ma.jpg",
                        "url": "https://image.msafely.com/20231011/hof_ma_7eb31f8446.jpg"
                      }
                    }
                  }
                }
              }
            },
            "tsafely_category": {
              "__typename": "TsafelyCategoryEntityResponse",
              "data": {
                "__typename": "TsafelyCategoryEntity",
                "id": "51",
                "attributes": {
                  "__typename": "TsafelyCategory",
                  "name": "controle-parental"
                }
              }
            },
            "image": {
              "__typename": "UploadFileRelationResponseCollection",
              "data": [
                {
                  "__typename": "UploadFileEntity",
                  "id": "2394",
                  "attributes": {
                    "__typename": "UploadFile",
                    "name": "que-signifie-otp.webp",
                    "url": "https://image.msafely.com/20241008/que-signifie-otp.webp"
                  }
                }
              ]
            }
          }
        },
        {
          "__typename": "TsafelyArticleEntity",
          "id": "903",
          "attributes": {
            "__typename": "TsafelyArticle",
            "title": "GYAT : L’argot TikTok qui fait parler, à savoir pour les parents",
            "updatedAt": "2024-10-08T09:00:14.035Z",
            "subtitle": "Votre enfant parle-t-il de GYAT ? Savez-vous ce que ce mot signifie ? Entrez dans l'univers de vos enfants et explorez certains des mots à la mode qu'ils utilisent régulièrement sur Internet.",
            "slug": "que-signifie-gyat",
            "style": true,
            "li_meta": null,
            "tsafely_article_author": {
              "__typename": "TsafelyArticleAuthorEntityResponse",
              "data": {
                "__typename": "TsafelyArticleAuthorEntity",
                "id": "16",
                "attributes": {
                  "__typename": "TsafelyArticleAuthor",
                  "name": "Luster Gaerten",
                  "slug": "luster-gaerten-fr",
                  "profile_photo": {
                    "__typename": "UploadFileEntityResponse",
                    "data": {
                      "__typename": "UploadFileEntity",
                      "id": "167",
                      "attributes": {
                        "__typename": "UploadFile",
                        "name": "luster-gaerten.jpg",
                        "url": "https://image.msafely.com/20231011/luster_gaerten_df521a2bfa.jpg"
                      }
                    }
                  }
                }
              }
            },
            "tsafely_category": {
              "__typename": "TsafelyCategoryEntityResponse",
              "data": {
                "__typename": "TsafelyCategoryEntity",
                "id": "51",
                "attributes": {
                  "__typename": "TsafelyCategory",
                  "name": "controle-parental"
                }
              }
            },
            "image": {
              "__typename": "UploadFileRelationResponseCollection",
              "data": [
                {
                  "__typename": "UploadFileEntity",
                  "id": "2390",
                  "attributes": {
                    "__typename": "UploadFile",
                    "name": "que-signifie-gyat.webp",
                    "url": "https://image.msafely.com/20241008/que-signifie-gyat.webp"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }

  const cat = {
    title1: "La première choix pour protéger vos enfants - Msafely",
    title2: "Moins de worries, plus de surveillance.",
    button: "Essayez Msafely Maintenant",
    href: '/fr'
  }

  const [Directory, setDirectory] = useState('Contrôle Parental')
  const [DirectoryUrl, setDirectoryUrl] = useState('controle-parental')
  const [Data, setData2] = useState(data.data[0])
  const { query } = useRouter()

  useEffect(() => {
    setData2(data.data[0])
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
    <nav className='flex-col px-[15px] mt-[70px] relative w-[1200px] Bxl:w-[960px] Bxl:smj:w-[720px] Bxl:smj:Mlg:w-[540px] Bxl:smj:Mlg:Mses:w-full mx-auto'>
      <div className='max-w-[1200px] text-[#000] h-full w-full mx-auto pt-[20px] Dmd:pl-4 pl-4 text-[14px] flex items-center flex-wrap'>
        <Link href={i18 === '' ? '/' : i18}><span className='font-[600] text-[#222222]' title={dictionaries.home}>{dictionaries.home}</span></Link>
        <span><Image src='/blog/Union.svg' width={0} height={0} alt='Union' className='w-[7px] mx-2 mt-[2px] h-auto' /></span>
        <Link href={`${i18}/${DirectoryUrl}`}><span className='font-[600] text-[#222222]' title={Directory}>{Directory}</span></Link>
        <span><Image src='/blog/Union.svg' width={0} height={0} alt='Union' className='w-[7px] mx-2 mt-[2px] h-auto' /></span>
        <span className='text-[#12D8AB] font-[600]'>{Data.attributes.title}</span>
      </div>
    </nav>
  )

  const [expanded, setExpanded] = useState(0)
  const [flag, setFlag] = useState(0)

  const [innerWidth, setInnerWidth] = useState()

  const handleChange = (index) => {
    setExpanded(prev => (prev === index ? null : index));
  }

  const { asPath } = useRouter()
  const facebook = 'https://www.facebook.com/sharer/sharer.php?u=https://msafely.com' + asPath
  const Twitter = 'https://twitter.com/intent/tweet?text=' + Data.attributes.seo[0].metaTitle + '&url=https://msafely.com' + asPath

  const linkToCopy = `https://msafely.com${asPath}`

  const [tooltipText, setTooltipText] = useState(dictionaries.copy)

  // 复制分享链接
  const handleCopy = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(linkToCopy)

        // 设置复制成功文案
        setTooltipText(dictionaries.copied)
      } catch (err) {
        console.error('复制失败', err)
      }
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = linkToCopy
      try {
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)

        // 设置复制成功文案
        setTooltipText(dictionaries.copied)
      } catch (err) {
        console.error('复制失败', err)
      }
      console.log('Clipboard API not supported')
    }
  }

  const [leftNavs, setleftNavs] = useState(false)

  const onClose = () => {
    setOpen3(!open3)
    setleftNavs(!leftNavs)
  }

  const index = dictionaries.categoryArray.findIndex(category => asPath.includes(category));
  const num = index === -1 ? 0 : index;

  const [activeIds, setActiveIds] = useState([]);

  // 滚动处理函数
  const handleScroll = () => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const idsToHighlight = [];

    // 遍历每一个标题元素，检查它们是否应该被高亮
    headings.forEach((heading) => {
      // 获取当前标题元素距离页面顶部的垂直距离
      const offsetTop = heading.offsetTop;

      // 如果页面滚动的距离 >= 当前标题的距离顶部的距离，说明这个标题已经在可视区域或被滚动过去
      if (scrollY >= offsetTop) {
        // 获取当前标题的 id 属性，并将其加入到需要高亮的数组中
        idsToHighlight.push(heading.getAttribute("id"));
      }
    });

    // 添加类
    setActiveIds(idsToHighlight);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // 监听窗口滚动事件
    handleScroll(); // 初始化时调用一次，确保页面加载时显示正确的高亮

    return () => {
      window.removeEventListener("scroll", handleScroll); // 清除事件监听器
    };
  }, [])

  /* pc锚点 */
  const leftAnchor = useMemo(() => {
    return (
      <div className={`Blog2`}>
        <Row className='block'>
          <Col span={8} className='max-w-full'>
            <div className=' text-[18px] leading-[21px] pl-[11px] font-medium mb-[10px] mt-[5px]'>{dictionaries.TableOfContents}</div>
            {anchorList.map((item, index) => {
              if (item.data.length !== 0) {
                return (
                  <div
                    key={index}
                    className={`bg-[#fff] ${expanded === index ? 'expanded' : ''}`}
                  >
                    <div className='flex items-center relative' onClick={() => handleChange(index)}>
                      {/* 模拟 AccordionSummary 行为 */}
                      <div className='p-0 w-full'>
                        <div onClick={() => {
                          setQueryId(1);
                          const targetElement = document.querySelector(item.href);
                          const offset = targetElement.offsetTop + 270;
                          window.scrollTo({
                            top: offset,
                            behavior: 'smooth',
                          });
                        }}
                          key={index}
                          className={`w-full ant-link-title ${activeIds.includes(item.href.replace('#', '')) ? "ant-link-title-active" : ""}`}
                          style={{ color: 'initial' }}
                        >
                          {item.title}
                        </div>
                      </div>

                      {/* 折叠/展开图标 */}
                      <div className='absolute right-[6px] transition-all duration-300 ease-in-out'>
                        {expanded !== index ? <ExpandMoreIcon className='text-[18px] text-[#686868]' />
                          : <ExpandLessIcon className='text-[18px] text-[#686868]' />}
                      </div>
                    </div>

                    {/* 模拟 AccordionDetails 行为 */}
                    {expanded === index && (
                      <div className="accordion-content">
                        {item.data.map((item2, index2) => (
                          <div key={index2}>
                            <div onClick={() => {
                              setQueryId(1);
                              window.scrollTo({
                                top: document.querySelector(item2.href).offsetTop + 270,
                                behavior: 'smooth',
                              });
                            }}
                              key={index2}
                              className={`w-full pl-4 ant-link-title ${activeIds.includes(item2.href.replace('#', '')) ? "ant-link-title-active" : ""}`}
                              style={{ color: 'initial' }}
                            >
                              {item2.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              } else {
                return (
                  <div onClick={() => {
                    setQueryId(1);
                    window.scrollTo({
                      top: document.querySelector(item.href).offsetTop + 270,
                      behavior: 'smooth',
                    });
                  }}
                    key={index}
                    className={`w-full ant-link-title ${activeIds.includes(item.href.replace('#', '')) ? "ant-link-title-active" : ""}`}
                    style={{ color: 'initial' }}
                  >
                    {item.title}
                  </div>
                )
              }
            })}
          </Col>
        </Row>
      </div>
    )
  }, [expanded, anchorList, queryId, Data, activeIds])

  const leftAnchor2 = (
    <Fragment>
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
                <div onClick={() => {
                  setQueryId(1);
                  setleftNavs(!leftNavs);
                  setOpen3(!open3);
                  window.scrollTo({
                    top: document.querySelector(item.href).offsetTop + 200,
                    behavior: 'smooth',
                  });
                  console.log(document.querySelector(item.href).offsetTop + 200)
                }}
                  key={index}
                  className={`w-full ant-iphone-title ${activeIds.includes(item.href.replace('#', '')) ? "ant-iphone-title-active" : ""}`}
                  style={{ color: 'initial' }}
                >
                  {item.title}
                </div>
              ) : (
                <div onClick={() => {
                  setQueryId(1);
                  setleftNavs(!leftNavs);
                  setOpen3(!open3);
                  window.scrollTo({
                    top: document.querySelector(item.href).offsetTop + 200,
                    behavior: 'smooth',
                  });
                }}
                  key={index}
                  className={`w-full ant-iphone-title pl-5 ${activeIds.includes(item.href.replace('#', '')) ? "ant-iphone-title-active" : ""}`}
                  style={{ color: 'initial' }}
                >
                  {item.title}
                </div>
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
    </Fragment>
  )


  /* 文章部分 */
  const Content = (
    <div className='bg-[#fff] Anchor pb-[20px] Fsm:pb-[0px]'>
      <div className='max-w-[1355px] mx-auto Blds:pb-[25px] pb-[40px] smjs:flex justify-center relative'>
        {/* PC端左侧锚点导航 */}
        <nav className={`w-[24%] h-full smj:hidden ${scrolled280px && 'sticky top-[80px] left-[8%] Headers5:left-[2%] Headers5:w-[20%]'
          } ${scroll < 300 && scroll !== '' && 'invisible'}`}>
          <div
            className={`w-full h-full smj:hidden ${scrolled280px ? 'mt-[0px]' : 'mt-[280px]'} ${scrolled280px && 'sticky top-[80px] left-[8%] Headers5:left-[2%] Headers5:w-full'
              } ${scroll < 300 && scroll !== '' && 'invisible'}`}
          >
            <div className='overflow-auto'>{leftAnchor}</div>
          </div>
          <div className='bg-[#E9E9E9] h-[1.5px] w-[90%] Bxl:hidden mx-auto mt-[35px]'></div>
          <div className={`pt-[25px] pl-[13px] Bxl:hidden h-[162px]`}>
            <p className='text-[17px] leading-[20px] text-[#5F6064]'>{dictionaries.Share}</p>
            <div className='flex justify-between items-center pt-[25px] w-[144px]'>
              <div className='group w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                <Link className='w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#EFF3F4] rounded-[50%]' href={Twitter} target='_blank' title='Twitter'>
                  <Image
                    src={'/blog/Twitter.svg'}
                    height={18}
                    width={18}
                    alt='Twitter'
                    className='w-[18px] h-[18px]'
                  /></Link>
              </div>
              <div className='group w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
                <Link className='w-[40px] h-[40px] flex justify-center items-center group-hover:bg-[#EFF3F4] rounded-[50%]' href={facebook} target='_blank' title='Facebook'>
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
        </nav>

        {/* 移动端底部锚点导航 */}
        <nav className={`smjs:hidden`}>
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
        </nav>

        {/* 文章内容 */}
        <div className='w-[60%] max-w-[660px] mx-auto Headers3:w-[52%] Headers3:smj:w-[92%] smjs:mx-[60px] smj:mx-auto pt-[20px] Mlg:pt-[10px]'>
          {/* 文章主内容 */}
          <article className='mb-[60px]' ref={contentRef} id='containerElement'>
            <div className=' mx-auto '>
              <div className='flex'>
                <h1 className='text-black text-[32px] smj:text-[22px] text-center leading-[50px] Logosm:leading-[36px] smj:leading-[36px] smjs:py-[30px] smj:py-[10px] mx-auto smj:pl-0 font-bold'>
                  {Data.attributes.title}
                </h1>
              </div>
              <div className='flex items-center pt-[10px] smjs:pb-[20px] justify-start smj:pl-0'>
                <Link
                  href={`${i18}/author/${Data.attributes.tsafely_article_author.data.attributes.slug}`}
                  className='w-[50px] h-[50px] smj:w-[34px] smj:h-[34px] rounded-full overflow-hidden border-blue-200 border-[2px] '
                  title="photo"
                >
                  <Image
                    width={100}
                    height={100}
                    src={Data.attributes.tsafely_article_author.data.attributes.profile_photo.data.attributes.url}
                    alt='photo'
                  />
                </Link>
                <div className='ml-[20px] flex items-center'>
                  <Link
                    href={`${i18}/author/${Data.attributes.tsafely_article_author.data.attributes.slug}`}
                    className='text-[#535460] text-[14px] flex-col justify-center items-center'
                    title={Data.attributes.tsafely_article_author.data.attributes.name}
                  >
                    <div className='text-[18px] text-[#282938] leading-[27px] font-[600]'>{Data.attributes.tsafely_article_author.data.attributes.name}</div>
                    <div className='text-[12px] text-[#282938] leading-[18px] font-[600]'>{formatDate(Data.attributes.updatedAt)}</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* 文章頁第一屏放image */}
            {/* <Image src={Data.attributes.image.data[0].attributes.url} width={100} height={100} className="w-full h-auto" /> */}
            <div className='blog_ckContent__box' id='containerElement'>
              <Col className={styles1.ckContent} dangerouslySetInnerHTML={{ __html: Data.attributes.content }} />
            </div>
          </article>

          <aside>
            <Cat cat={cat} />
          </aside>

          <aside className='flex justify-between items-center mt-[30px] ml-[20px] w-[160px] smjs:hidden'>
            <div className='w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
              <Link className='w-[40px] h-[40px] flex justify-center items-center' href={Twitter} target='_blank' title="Twitter">
                <Image
                  src={'/blog/Twitter.svg'}
                  height={18}
                  width={18}
                  alt='Twitter'
                  className='w-[18px] h-[18px]'
                /></Link>
            </div>
            <div className='w-[40px] h-[40px] flex justify-center items-center border border-[#EFF3F4] rounded-[50%]'>
              <Link className='w-[40px] h-[40px] flex justify-center items-center' href={facebook} target='_blank' title="Facebook">
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
          </aside>
          {/* <div className='border-t my-4 border-[#EAEAEA] smjs:hidden'></div> */}

          {/* 评论 */}
          <aside>
            <Comment Data={data.data[0]} texts={dictionaries.texts} />
          </aside>
        </div>

        {/* 右侧广告cta */}
        <aside className={`w-[310px] h-full smj:hidden ${scrolled280px ? 'sticky top-[0px] left-[8%] Headers5:left-[2%] Headers5:w-[20%]' : 'mt-[100px]'
          } ${scroll < 300 && scroll !== '' && 'invisible'}`}>
          <div className='min-h-[172px]'>
            <Image
              src={'/blog/phone.svg'}
              height={172}
              width={172}
              className='w-[172px] h-[172px] mx-auto translate-y-[85px]'
              alt='phone'
            />
            <div className='bg-[#F9F5EA] w-[310px] h-auto rounded-[8px] pb-[25px] flex-col'
              style={{ fontFamily: 'Roboto,sans-serif' }}>
              <div className='w-[238px] text-[20px] leading-[24px] text-center mx-auto pt-[80px]'>
                <strong>{dictionaries.categoryList[num].name}</strong>
              </div>
              <div className='mt-[20px] text-[15px] leading-[22px] text-center px-[15px]'>
                {dictionaries.categoryList[num].category}
              </div>
              <Link className='w-[225px] mt-[23px] py-[15px] h-auto bg-[#FF541C] rounded-[8px] mx-auto flex justify-center items-center'
                href={dictionaries.StartLink} target="_blank" title={dictionaries.categoryList[num].button}>
                <p className='text-[18px] leading-[18px] font-medium text-white text-center'>{dictionaries.categoryList[num].button}</p>
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <aside className='max-w-[1100px] mx-auto Blds:pb-[25px] pb-[40px] relative'>
        <Related related={related.tsafelyArticles} i18={i18} relatedArticles={dictionaries.relatedArticles} ReadMore={dictionaries.ReadMore} ReadMoreLink={dictionaries.ReadMoreLink} category={dictionaries.category} />
      </aside>
    </div>
  )

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

          // active[active.length - 1].style.borderRight = '0px solid #12D8AB'//pc锚点最右的边框线
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

  // 更改字体大小&超链接新增title属性&section段落处理
  const settingStyleAndElement = () => {
    const content = Data.attributes.content
    var div = document.createElement("div")
    if (typeof content === 'string') div.innerHTML = content

    const arr = [
      { nodeName: 'h2', pcSize: '27px', size: '18px' },
      { nodeName: 'h2 span', pcSize: '27px', size: '18px' },
      { nodeName: 'h3', pcSize: '22px', size: '16px' },
      { nodeName: 'h3 span', pcSize: '22px', size: '16px' },
      { nodeName: 'h4', pcSize: '18px', size: '16px' },
      { nodeName: 'p', pcSize: '16px', size: '16px' },
      { nodeName: 'p span', pcSize: '16px', size: '16px' }
    ]

    // 优化：根据窗口宽度设置字体大小
    const isWideScreen = window.innerWidth > 990
    const fontSizeProperty = isWideScreen ? 'pcSize' : 'size'

    arr.forEach(({ nodeName, [fontSizeProperty]: fontSize }) => {
      div.querySelectorAll(nodeName).forEach(dom => {
        dom.style.setProperty('font-size', fontSize, 'important')
        if (nodeName === 'h2' || nodeName === 'h2 span') dom.style.setProperty('font-weight', 'bold', 'important')
      })
    })

    // 所有超链接增加title属性
    div.querySelectorAll('a').forEach(dom => {
      if (dom.getAttribute('title') === null || dom.getAttribute('title') === '' || dom.getAttribute('title') === undefined) dom.setAttribute('title', dom.innerText)
    })

    // 段落用section包起来
    const nodes = div.childNodes
    const newDiv = document.createElement('div')
    const sectionElement = document.createElement('section')

    sectionElement.innerHTML = ''
    Array.from(nodes).forEach((child) => {
      if (child.nodeName.toLowerCase() === 'h2') {
        newDiv.innerHTML += sectionElement.outerHTML

        sectionElement.innerHTML = ''
        sectionElement.innerHTML += child.outerHTML
      } else {

        sectionElement.innerHTML += child.outerHTML
      }
    })

    if (sectionElement.innerHTML !== '') newDiv.innerHTML += sectionElement.outerHTML

    // // 去除文章内容里多余的span标签
    // const eleList = ['h2', 'h3', 'h4', 'h5', 'h6', 'p']
    // eleList.forEach((name) => {

    //   // 删除hx跟p的span标签
    //   newDiv.querySelectorAll(name).forEach((child) => {
    //     const spans = child.querySelectorAll('span')

    //     // 遍历所有 span 标签
    //     spans.forEach(span => {
    //       // 用 span 的内容替换掉 span 自身
    //       while (span.firstChild) {
    //         span.parentNode.insertBefore(span.firstChild, span)
    //       }
    //       // 移除空的 span 标签
    //       span.parentNode.removeChild(span)
    //     })
    //   })

    //   if (name !== 'p') {
    //     // 删除hx的strong标签
    //     newDiv.querySelectorAll(name).forEach((child) => {
    //       const strongs = child.querySelectorAll('strong')

    //       strongs.forEach(strong => {
    //         while (strong.firstChild) {
    //           strong.parentNode.insertBefore(strong.firstChild, strong)
    //         }

    //         strong.parentNode.removeChild(strong)
    //       })
    //     })
    //   }
    // })


    // 预览模版
    const moduleElement = document.createElement('div')
    moduleElement.innerHTML = localStorage.getItem('testCode')

    arr.forEach(({ nodeName, [fontSizeProperty]: fontSize }) => {
      moduleElement.querySelectorAll(nodeName).forEach(dom => {
        if (nodeName !== 'p') dom.style.setProperty('font-size', fontSize, 'important')
      })
    })

    const childNode = newDiv.querySelectorAll('h2')[0]
    const parentNode = childNode.parentNode
    parentNode.insertBefore(moduleElement, childNode)

    // 新内容
    const newContent = newDiv.innerHTML



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
      setData2(newData.data[0])
    }
  }

  useEffect(() => {
    settingStyleAndElement()

    window.addEventListener('resize', settingStyleAndElement)

    return () => {
      window.removeEventListener('resize', settingStyleAndElement)
    }
  }, [])

  const [searchData, setSearchData] = useState('')

  const blogHeaderProps = {
    dictionaries: dictionaries.blogHeader,
    styles: styles.blogHeader,
    setSearchData
  }

  return (
    <Fragment>
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

      <header>
        <BlogHeader {...blogHeaderProps} />

        {Cheader}
      </header>

      <main>
        <aside className='top-[56px] h-[14px] fixed w-full z-[10]'>
          {Progresss}
        </aside>

        {Content}
      </main>

      <footer className='smj:mb-[20px]'>
        <IndexFooter dictionaries={dictionaries.indexFooter} styles={styles.indexFooter} />
      </footer>
    </Fragment>
  )
}
