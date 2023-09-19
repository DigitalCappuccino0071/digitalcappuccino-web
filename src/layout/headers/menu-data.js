const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Our Services",
    link: "./website-development-company-gurgaon",
    sub_menus: [
      { link: "./website-development-company-gurgaon", title: "Website Development Company" },
      {
        link: "/digital-marketing-company-gurgaon",
        title: "Digital Marketing Company",
      },
      {
        link: "./social-media-marketing-services-gurgaon",
        title: "Social Media Marketing Company",
      },
      { link: "./seo-services-gurgaon", title: "SEO Company" },
      { link: "/ppc-marketing-comapny-gurgaon", title: "PPC Marketing Company" },
      { link: "/email-marketing-services-gurgaon", title: "Email Marketing Company" },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blogs",
    link: "/blogs",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about-us",
  },
];
export default menu_data;
