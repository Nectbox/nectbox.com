import { FluidObject } from 'gatsby-image';
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

export interface ContentfulData<T> {
  edges: [
    {
      node: T;
    }
  ];
}
export interface LayoutData {
  headerContent: ContentfulData<HeaderModule>;
  footerContent: ContentfulData<FooterModule>;
}

export interface HeaderModule {
  id: string;
  title: string;
  ctaLink: string;
  ctaTitle: string;
  navigation: {
    menues: NavigationMenu[];
  };
}

export interface FooterModule extends SectionModel {
  id: string;
  title: string;
  description: string;
  copyright: string;
  contact: string;
  socialMedia: ContentfulSocialMedia[];
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
  hero: ContentfulData<SplitSectionModel>;
  services: ContentfulData<SectionModel<ServicesContentType>>;
  technologies: ContentfulData<SectionModel<TechContentType>>;
  phases: ContentfulData<SectionModel<PhasesContentType>>;
}

export interface SplitSectionModel {
  sectionModel: {
    id: string;
    caption: string;
    subTitle: string;
    ctaLink: string;
    invertSection: boolean;
  };
}

export interface SectionModel<T extends {} = {}> {
  sectionModel: {
    id: string;
    component: React.ElementType<any>;
    variant: 'transparent' | 'background';
    colorScheme: string;
    backgroundColor: string;
    textColor: string;
    titleColor: string;
    isGradiant: boolean;
    caption: string;
    title: string;
    subTitle: string;
    ctaModal: CtaModal;
    sectionContent: SectionContent<T>;
  };
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

export interface ContentfulSocialMedia {
  id: string;
  slug: string;
  icon: {
    title: string;
    file: {
      url: string;
    };
  };
}
