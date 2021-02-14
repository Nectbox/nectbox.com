import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadeta } from '../../types';

export interface SeoProps {
  pathname: string;
  description?: string;
  lang?: string;
  meta?: Array<HTMLMetaElement>;
  title?: string;
  type?: string;
}

const SEO = (props: SeoProps) => {
  const { pathname, description, lang, meta, title, type } = props;

  const { site }: SiteMetadeta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          tagLine
          description
          siteUrl
          author
          twitter
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  console.log(type);
  console.log(pathname);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        defaultTitle
          ? `%s | ${defaultTitle} - ${site.siteMetadata.tagLine}`
          : null
      }
      link={[
        {
          rel: `canonical`,
          href: site.siteMetadata.siteUrl,
        },
      ]}
      meta={[
        {
          charSet: `utf-8`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          property: `og:locale`,
          content: lang,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type || pathname.includes('/blog') ? 'article' : 'website',
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter || ``,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:domain`,
          content: `nectbox.com`,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
