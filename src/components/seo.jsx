import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, banner }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      defaultTitle,
      defaultDescription,
      siteUrl,
      siteLanguage,
      author,
      defaultBanner,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname}`,
  }

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: "2021",
    creator: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Person",
      name: author,
    },
    datePublished: "2021-05-16T23:30:00+02:00",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${defaultBanner}`,
    },
  }

  return (
    <Helmet title={seo.title} titleTemplate={title}>
      <html lang={siteLanguage} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <script type='application/ld+json'>
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      {seo.image && <meta property='og:image' content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  banner: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl: url
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        siteLanguage
        author
      }
    }
  }
`
