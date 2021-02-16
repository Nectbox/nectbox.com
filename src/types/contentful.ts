import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

export interface ContentfulLayout {
  defaultLayout: {
    nodes: [
      {
        contentModules: HeaderModule[];
      }
    ];
  };
}

export interface HeaderModule {
  title: string;
  ctaLink: string;
  ctaTitle: string;
  navigation: {
    menues: NavigationMenu[];
  };
}

export interface NavigationMenu {
  id: string;
  title: string;
  slug: string;
  megaMenu: {
    menuItems: MenuItem[];
  };
}

export interface MenuItem {
  id: string;
  slug: string;
  heading: string;
  subHeading: string;
}

export interface HomepageData {
  services: ContentfulHomeData<SectionModel<ServicesContentType>>;
  technologies: ContentfulHomeData<SectionModel<TechContentType>>;
  phases: ContentfulHomeData<SectionModel<PhasesContentType>>;
}

export interface ContentfulHomeData<T> {
  edges: [
    {
      node: {
        sectionModel: T;
      };
    }
  ];
}

export interface SectionModel<T> {
  id: string;
  caption: string;
  title: string;
  subTitle: string;
  colorScheme: string;
  variant: 'transparent' | 'background';
  ctaModal: CtaModal;
  sectionContent: SectionContent<T>;
}

export interface CtaModal {
  id: string;
  ctaName: string;
  ctaLink: string;
  content: string;
  colorScheme: string;
}

export interface SectionContent<T> {
  id: string;
  title: string;
  contentType: T[];
}

export interface ServicesContentType {
  id: string;
  title: string;
  text: string;
  ctaName: string;
  ctaLink: string;
}

export interface TechContentType {
  id: string;
  title: string;
  techIcon: ContentfulIcon[];
}

export interface PhasesContentType {
  id: string;
  title: string;
  icon: string;
  text: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

export interface ContentfulIcon {
  id: string;
  alternateText: string;
  image: {
    title: string;
    file: {
      url: string;
    };
  };
}
