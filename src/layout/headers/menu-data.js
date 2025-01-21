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
        has_dropdown: false,
        title: "About Us",
        link: "/about-us",
    },

    {
        id: 3,
        mega_menu: false,
        has_dropdown: true,
        title: "Our Services",
        link: "/web-development-company-gurgaon",
        sub_menus: [
            {
                link: "/web-development-company-gurgaon",
                title: "Website Development ",
            },
            {
                link: "/digital-marketing-company-gurgaon",
                title: "Digital Marketing ",
            },
            {
                link: "/social-media-marketing-services-gurgaon",
                title: "Social Media Marketing ",
            },
            { link: "/seo-company-gurgaon", title: "SEO Company" },
            {
                link: "/ppc-marketing-company-gurgaon",
                title: "PPC Marketing ",
            },
            {
                link: "/email-marketing-company-gurgaon",
                title: "Email Marketing ",
            },
            {
                link: "/influencer-marketing-company",
                title: "Influencer marketing ",
            },
        ],
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "Blogs",
        link: "/blogs",
    },

    {
        id: 5,
        mega_menu: false,
        has_dropdown: true,
        title: "Location",
        link: "",
        sub_menus: [
            {
                link: "https://digitalcappuccino.ca/",
                title: "Canada",
            },
            {
                link: "/",
                title: "London",
            },
            {
                link: "/",
                title: "Dubai",
            },
        ],
    },
];
export default menu_data;
