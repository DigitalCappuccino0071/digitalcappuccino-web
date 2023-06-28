import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/headers/menu-data';

const sidebar_contents = {

  title: <>We deploy world-class Creative <br /> on demand.</>,
  inst_imgs: [
    '/assets/img/offcanvas/1.jpeg',
    '/assets/img/offcanvas/2.jpeg',
    '/assets/img/offcanvas/4.jpg',
    '/assets/img/offcanvas/4.jpg',
  ]
}
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState('')

  const openMobileMenu = (menu) => {
    if(navTitle === menu){
      setNavTitle('')
    }
    else {
      setNavTitle(menu)
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <a>
                <img src="/assets/img/logo/logo-white.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="tpoffcanvas__close-btn" onClick={() => setIsOpen(false)}>
            <button className="close-btn"><i className="fal fa-times-hexagon"></i></button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                 <li key={i} className={!menu.has_dropdown ? '' : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown"}>
                    {menu.has_dropdown && <button  onClick={() => openMobileMenu(menu.title)}>{menu.title} </button>}
                    <ul className={navTitle === menu?.title ? "sub-menu active" : "sub-menu"}>
                      {menu?.sub_menus?.map((sub,i) => (
                      <li key={i}><Link href={`${sub.link}`}>{sub.title}</Link></li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && <Link href={menu.link}>{menu.title}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i> <a href="https://www.google.com/maps/place/Rider+House/
                  @28.4514806,77.0730605,17z/data=!4m7!3m6!1s0x390d18eb0ce0
                  8cd1:0x2406f413db6895ca!4b1!8m2!3d28.4515566!4d77.07524
                  37!16s%2Fg%2F11n6snwf9q" target="blank">Plot No. 136, 3rd Floor, Rider House, Sector 44, 122003</a>
              </li>
              <li><i className="fas fa-star"></i><a href="tel:919910190071">+91 9910190071</a></li>
              <li><i className="fas fa-star"></i><a href="mailto:(info@digitalcappuccino.com)">info@digitalcappuccino.com</a></li>
            </ul>
          </div>
          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
              <input type="text" placeholder="Enter mail" />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
          <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
            <div className="tp-insta">
              <div className="row">
                  <div  className="col-3 col-sm-3"><a target="_blank" href="https://www.instagram.com/p/CrIyTHnNiZf/" rel="noreferrer">
                    <img src='/assets/img/offcanvas/2.jpeg' alt="" /></a>
                  </div>
                  <div  className="col-3 col-sm-3"><a target="_blank" href="https://www.instagram.com/p/CsqcmISL8LY/" rel="noreferrer">
                    <img src='/assets/img/offcanvas/1.jpeg' alt="" /></a>
                  </div>
                  <div  className="col-3 col-sm-3"><a target="_blank" href="https://www.instagram.com/p/Cs3BnWvgnIz/" rel="noreferrer">
                    <img src='/assets/img/offcanvas/4.jpg' alt="" /></a>
                  </div>
  <div  className="col-3 col-sm-3"><a target="_blank" href="https://www.instagram.com/p/CstRxFFJYmV/" rel="noreferrer">
                    <img src='/assets/img/offcanvas/3.jpg' alt="" /></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen ? 'apply' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;
