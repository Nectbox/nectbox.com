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
