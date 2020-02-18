import { FluidObject } from 'gatsby-image';
import { DeepPartial, DeepReadonly } from 'utility-types';

export type Frontmatter = DeepReadonly<
  Partial<{
    slug: string;
    title: string;
    date: string;
    tags: string[];
    cover: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  }>
>;

export type UseAllPosts = DeepReadonly<{
  allMdx: {
    nodes: {
      body: string;
      excerpt: string;
      frontmatter: Frontmatter;
    }[];
  };
}>;

export type PostsByTag = {
  [key: string]: { frontmatter: Frontmatter; excerpt: string }[];
};

export type UseAllTags = DeepReadonly<{
  allMdx: {
    nodes: {
      frontmatter: {
        tags: string[];
      };
    }[];
  };
}>;

export type UseAnyImage = DeepReadonly<{
  allFile: Partial<{
    nodes: {
      relativePath: string;
      childImageSharp: {
        fluid: FluidObject;
      };
    }[];
  }>;
}>;

export type UseSiteBuildtime = DeepReadonly<{
  site: {
    buildTime: string;
  };
}>;

export type UseSiteMetadata = DeepReadonly<{
  site: {
    siteMetadata: DeepPartial<{
      siteTitle: string;
      siteTitleAlt: string;
      siteHeadline: string;
      siteUrl: string;
      siteDescription: string;
      siteLanguage: string;
      author: string;
      social: {
        twitter: string;
        github: string;
        qiita: string;
      };
    }>;
  };
}>;

export type JsonLdConfig = Partial<{
  '@context': string;
  '@type': string;
  inLanguage: string;
  url: string;
  headline: string;
  name: string;
  alternateName: string;
  description: string;
  author: Partial<{
    '@type': string;
    name: string;
    sameas: string;
    url: string;
    image: Partial<{
      '@type': string;
      url: string;
      width: number;
      height: number;
    }>;
  }>[];
  publisher: Partial<{
    '@type': string;
    name: string;
    description: string;
    logo: Partial<{
      '@type': string;
      url: string;
      width: number;
      height: number;
    }>;
  }>;
  image:
    | Partial<{
        '@type': string;
        url: string;
      }>
    | string;
  itemListElement: [
    Partial<{
      '@type': string;
      position: number;
      item: Partial<{
        '@id': string;
        name: string;
        image: string;
      }>;
    }>
  ];
  datePublished: string;
  dateModified: string;
  potentialAction: {};
  mainEntityOfPage: Partial<{
    '@type': string;
    '@id': string;
  }>;
}>[];

export type UseHpprcThemeConfig = {
  hpprcBlogThemeConfig: DeepReadonly<{
    assetsPath: string;
    backgroundColor: string;
    basePath: string;
    blogPath: string;
    googleAnalyticsTrackingId: string;
    iconPath: string;
    id: string;
    mdx: boolean;
    postsPath: string;
    siteDescription: string;
    gatsbyRemarkPlugins: string[];
    siteTitle: string;
    siteUrl: string;
    tagsPath: string;
    themeColor: string;
    webpackBundleAnalyzer: boolean;
  }>;
};

export type AllPosts = DeepReadonly<
  {
    body: string;
    excerpt: string;
    frontmatter: Frontmatter;
  }[]
>;
