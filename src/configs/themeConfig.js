/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */
const themeConfig = {
  // ** Layout Configs
  templateName: process.env.NEXT_PUBLIC_NAME === 'spyx' ? 'Spyx' : 'Msafely' /* App Name */,
  layout: 'vertical' /* vertical | horizontal */,
  mode: 'light' /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  direction: 'ltr' /* ltr | rtl */,
  skin: 'default' /* default | bordered */,
  contentWidth: 'boxed' /* full | boxed */,
  footer: 'static' /* fixed | static | hidden */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: 'mdi:circle' /* Icon */,
  verticalNavToggleType: 'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  navCollapsed: false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize: 280 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 68 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  afterVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
  beforeVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
  horizontalMenuToggle: 'hover' /* click | hover /*! Note: This is for Horizontal navigation menu only */,
  horizontalMenuAnimation: true /* true | false */,
  // ** AppBar Configs
  appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarBlur: true /* true | false */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
  disableCustomizer: false /* true | false */,
  toastPosition: 'top-right' /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */,
  Head: {
    dashboards: {
      Title: process.env.NEXT_PUBLIC_NAME === 'spyx' ? 'View Demo for Free, Learn about Spyx Tracking Features -Spyx' : 'View Msafely Demo for Free before Purchasing a Plan',
      Description: process.env.NEXT_PUBLIC_NAME === 'spyx' ? 'View Spyx demo for free before purchasing a plan. You can view all features of Spyx easily.' : 'The dashboard shows you the demo of Msafely. You can view demo for more tracking features supported by Msafely.',
      Keyword: process.env.NEXT_PUBLIC_NAME === 'spyx' ? 'phone tracker, iphone tracker, phone tracking app, phone monitoring app' : 'Msafely phone tracker'
    },
    contacts: {
      Title: 'Contact Spy | Contact Track | Trace Contact Number Online-Msafely',
      Description: "Msafely allows you to track the detailed content of the target device's contact list, including names, numbers, emails, and more.",
      Keyword: 'view contacts, contact spy, contact track, hack contact'
    },
    textmessages: {
      Title: "view Sent and Received Text Messages Online with Msafely",
      Description: "With Msafely, you can view a complete record of all sent and received text messages, check the sender’s information and view time and date stamps.",
      Keyword: "track text messages, SMS tracker",
    },
    calls: {
      Title: " Call Tracker: Track Call Logs & Call History Online - Msafely",
      Description: "Msafely is a comprehensive, easy-to-use call tracking software package for you to track callers and even identify the location from which they make those calls! Msafely allows you to instantly view the complete call history on a monitored phone. Review the time stamps and information on your child’s calls.",
      Keyword: "track phone calls, track call logs",
    },
    notes: {
      Title: " Spy on Notes/Reminders/Memo in 3 Simple Steps-Msafely",
      Description: "Msafely allows you to see all details in Notes, including content, events, location and description. You can also track voice and images attached to Notes, Voice Memo and Reminders. You can see the date and time stamp at the same time.",
      Keyword: "spy on notes, track notes",
    },
    reminders: {
      Title: "Spy on Someone’s Reminders Remotely with Msafely",
      Description: "Do you want to access someone’s Reminders and get to know your partner’s plan and schedule? Msafely enables you to track Reminders with details remotely.",
      Keyword: "track reminders",
    },
    photos: {
      Title: "Spy on Cell Phone Pictures on iPhone/Android-Msafely",
      Description: "With Msafely, you can spy on all screenshots, sent and received photos and live photos the device’s camera takes. ",
      Keyword: "track photos, photo spy",
    },
    video: {
      Title: "Videos Spy| Watch and Download the Device’s Videos Remotely",
      Description: "Msafely can help you see all videos, including recorded, sent and received. You can also download these videos from dashboard. And Msafely supports all video formats on the device.",
      Keyword: "track videos, videos spy",
    },
    wifinetworks: {
      Title: "WiFi History View on the Target Devices Remotely-Msafely",
      Description: "You are able to know when your children or employee connect their iOS devices to Wifi so as to find out more secrets and problems about them.",
      Keyword: "view wifi history, wifi history view, log wifi history",
    },
    apps: {
      Title: " Installed Apps Monitoring | Find the Most Used Apps -Msafely",
      Description: "Msafely enables you to see a complete list of all the installed apps on the target phone. It allows you to view the installation time, detect newly installed apps, and check detailed app reports.",
      Keyword: "track installed apps, installed apps monitoring",
    },
    calendars: {
      Title: "How to Spy on Calendars Online - Msafely",
      Description: "With Msafely, you can spy on calendar events, view all calendar even entries including all details, see the event expected start time and end time,check event’s description.",
      Keyword: "spy on calendars",
    },
    browserhistory: {
      Title: "Track Web Browsing History on Safari/Chrome of the Targeted Device",
      Description: "Msafely allows you to track browser history, including titles, URLs, date and time stamp when websites are visited. ",
      Keyword: "track browser history, track web browsing history, internet history tracker",
    },
    browserbookmark: {
      Title: "Spy on Bookmark | Track & Monitor Bookmarked Websites-Msafely",
      Description: " Msafely can help you see all sites the target user has bookmarked, view the bookmarj time an dates and sync bookmarks on time to the dashboard.",
      Keyword: "spy on browser bookmarks, track browser bookmark",
    },
    email: {
      Title: "The Best Hidden Email Tracker | View Incoming and Outgoing Emails",
      Description: "Msafely email tracker allows you to track all incoming and outgoing emails, see the date and time of each email and view the information of the email’s recipient.",
      Keyword: "track email, spy on email",
    },
    applications: {
      Title: "App Block | Block or Unblock Any App You Feel Inappropriate",
      Description: "You can use Msafely app blocker to check whether your children install inappropriate apps or not. If yes, you can restrict the app without your kid ever finding out about it. You can block social media apps if they are consuming an unhealthy amount of time there.",
      Keyword: "block apps, app blocker",
    },
    appTimeline: {
      Title: "Set Screen Time Limit on iPhone/iPad/Android Phones/ Tablets- Msafely",
      Description: "Msafely allows parents to limit children’s time spent on iOS and Android devices so that children can stay away from smartphone addiction.",
      Keyword: "set screen time limit, set app time limit",
    },
    gps: {
      Title: "GPS Phone Tracker | Track GPS Location in Real-time",
      Description: "Msafely enable you to track accurate address of the mobile phone’s location, see the date and time of the device’s location. You can track both live location and movement history.",
      Keyword: "track gps location, gps phone tracker",
    },
    geo: {
      Title: "Mobile Geo-Fencing | Set up Geofencing for Android & iOS",
      Description: "Msafely enables you to set up geofencing on the children’s phone. When your children enter or leave the restricted area, you can receive notification.",
      Keyword: "geofencing",
    },
    whatsapp: {
      Title: "WhatsApp Tracker | Best WhatsApp Spy App-Msafely",
      Description: "With Msafely, you can view all sent and received private and group messages, check every media file attached with messages, including photos, videos and docs. You can also monitor WhatsApp calls, contact list , keystrokes and locations.",
      Keyword: "whatsapp tracker, track whatsapp messages",
    },
    facebook: {
      Title: "Facebook Spy & Hack | Track Facebook Online - Msafely",
      Description: "Msafely lets you view every message sent and received on Facebook. You can also download the media files shared in Messenger, including photos, videos and audio, check friend list and all Facebook notification.",
      Keyword: "facebook messenger spy, track facebook, hack facebook",
    },
    line: {
      Title: "Monitor Line Chat History Online with Msafely",
      Description: "You can use Msafely to monitor Line chat on your kids’ or employees’ devices by logging keystrokes inputted, recording both-side text messages, capturing screenshots, and recording voice messages.",
      Keyword: "track line, hack line, monitor line chat",
    },
    telegram: {
      Title: "Telegram Spy | Telegram Online Tracker - Msafely",
      Description: "You can useTsafely to monitor Telegram chat history on your children’s iPhone, iPad and Android phones and tablets. Msafely allows you to capture keystrokes input on the Telegram, view incoming and outgoing Telegram messages.",
      Keyword: "monitor telegram messages, hack telegram, telegram spy",
    },
    skype: {
      Title: "Skype Tracker: How to Spy on Skype Online - Msafely",
      Description: "You can use Msafely to keep an eye on Skype chat that happens on the iOS/Android devices of your children or employees. Msafely can help you log keystrokes and view text messages.",
      Keyword: "monitor skype chat, spy on skype, skype tracker, hack skype",
    },
    viber: {
      Title: "Viber Spy & Hack | Track Viber Activities Online - Msafely",
      Description: "With Msafely, you can read the complete Viber chat history, including sent and received texts, view the call log and contact list. You can download the photos, videos and audio files available on Viber",
      Keyword: "viber spy, hack viber, viber monitoring",
    },
    tinder: {
      Title: "Tinder Spy| Monitor Tinder Messages and Chat History",
      Description: "Msafely can monitor someone’s Tinder messages, including incoming, outgoing and even deleted. You can view and download Tinder media files including photos and videos.",
      Keyword: "tinder spy, hack tinder, track tinder",
    },
    kik: {
      Title: "Kik Spy|Monitor Kik Messages in Stealth Mode",
      Description: "You can use Msafely to access all Kik messages both sent and received in chats, view all media shared via Kik, photos, videos. You can also spy on contact details and access location movements.",
      Keyword: "kik spy, hack kik, monitor kik messages",
    },
    snapchat: {
      Title: "Snapchat Spy | Hack Snapchat Account-Msafely",
      Description: "With Msafely, you can view all sent and received messages and media, including the deleted ones. You can view the contact or friend .",
      Keyword: "snapchat spy, hack snapchat, monitor snapchat messages",
    },
    youtube: {
      Title: "YouTube Spy | How to Spy YouTube Activities -Msafely",
      Description: "Msafely allows you to track YouTube screen time and search history. You can also check all the YouTube notifications that the target user receives on their phones.",
      Keyword: "youtube spy, spy on youtube activity, track youtube screen time",
    },

  }
}

export default themeConfig
