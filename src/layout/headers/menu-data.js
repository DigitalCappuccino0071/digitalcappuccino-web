const menu_data = [
  {
    id:1,
    mega_menu:false,
    has_dropdown:false,
    title:'Home',
    link:'/',
  },

  {
    id:2,
    mega_menu:false,
    has_dropdown:true,
    title:'Our Services',
     link:'./website-development-company',
     sub_menus:[
      {link:'./website-development-company',title:'Website Development'},
          {link:'/digital-marketing-company',title:'digital Marketing'},
      {link:'./social-media-marketing-services',title:'Social Media Marketing'},
      {link:'./seo-services',title:'SEO Services'},
           {link:'/ppc-marketing-comapny',title:'PPC Marketing'},
      {link:'/email-marketing-services',title:'Email Marketing'},



    ]
  },
  {
    id:5,
    mega_menu:false,
    has_dropdown:false,
    title:'Blogs',
    link:'/blogs',
  },
  {
    id:4,
    mega_menu:false,
    has_dropdown:false,
    title:'Contact Us',
    link:'/contact-us',
  },
    {
    id:3,
    mega_menu:false,
    has_dropdown:false,
    title:'About Us',
    link:'/about-us',
  },
   
]
export default menu_data;

