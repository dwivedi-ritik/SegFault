// theme.config.js
export default {
    projectLink: 'https://github.com/shuding/nextra', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
    titleSuffix: ' – ritik',
    nextLinks: true,
    prevLinks: true,
    search: true,
    darkMode: true,
    footer: true,
    footerText: "Created with 💖 in Next JS",
    footerEditLink: `visit my github page`,
    unstable_staticImage: true,
    logo: (
        <span>  <b> ⚡ Seg fault ⚡ </b> </span>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Blog and docs site" />
            <meta name="og:title" content=" Ritiks blogs" />
        </>
    ),
}