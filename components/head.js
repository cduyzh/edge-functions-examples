export default function head({ title, metaDescription, url, openGraphImageName }) {
  return `
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Meta -->
    <title>${title} | Edge Functions on Netlify</title>
    <meta name="description" content="${metaDescription}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;900&display=swap" rel="stylesheet" />

    <!-- Favicons -->
    <meta name="theme-color" content="#ffffff" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#000000" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="/styles.css" />

    <!-- Open Graph -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@netlify" />
    <meta name="twitter:creator" content="@netlify" />

    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:locale" content="en_US" />

    <meta property="og:image" content="https://res.cloudinary.com/netlify/image/upload/c_fit,g_west,h_400,co_rgb:FFFFFFFF,l_text:netlify.com:Pacaembu-Bold.ttf_57:Netlify%20Edge%20Functions:%0A${encodeURI(
      title,
    )},w_1053,x_46/v1619123320/netlify.com/default-og-background-learn-more.png" />
    <meta property="og:image:alt" content="A Netlify branded open graph image representing ${title}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Edge Functions on Netlify" />

    <script src="/lib/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-X2FMMZSSS9"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-X2FMMZSSS9');
      
    </script>
    <script src="https://cdn.jsdelivr.net/npm/appwrite@10.1.0"></script>
    <script>
 const { Client, Databases, Account, ID, Permission, Role } = Appwrite;
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6455f0e0eb069138e169");

const account = new Account(client);
const databases = new Databases(client);
const accout = Date.now() + "@qq.com";

const promise = databases.listDocuments('6455fde8f21c72ad204b', '6455fdfe334eb9daa7af');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});


     
    </script>
  </head>
  `;
}
