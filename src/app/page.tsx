import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import AppFooter from '@/components/app.footer';

export default function Home() {
  return (
    <div className="main">
        <header className="header">
            <div className="grid">
                <nav className="header__navbar">
                    <ul className="header__navbar-list">
                       <li className="header__navbar-item">
                          <Link href="http://localhost:3000/" className="header__navbar-item-link">
                            <i className="fa-solid fa-cake-candles" ></i>
                            CAKES - Delicious cakes in your area!
                          </Link>
                       </li>
                    </ul>
                    <ul className="header__navbar-list">
                       <li className="header__navbar-item">
                         <Link href="/buyer/login" className="header__navbar-item-link"> 
                            <i className="fa-solid fa-bell" ></i>
                            THÔNG BÁO 
                         </Link>
                      </li>
                       <li className="header__navbar-item">
                         <Link href="/aboutus" className="header__navbar-item-link"> 
                            <i className="fa-solid fa-circle-question"></i>
                            ABOUT US </Link>
                       </li>

                       <li className="header__navbar-item">
                          <Link href="/buyer/register" className="header__navbar-item-link"> 
                            ĐĂNG KÝ </Link>
                        </li>

                       <li className="header__navbar-item"> 
                          <Link href="/buyer/login" className="header__navbar-item-link"> 
                            ĐĂNG NHẬP </Link>
                        </li>

                    </ul>
                </nav> 
                
                {/* <!-- Header-with-search --> */}

                <div className="header-with-search">
                    <div className="header__logo">
                        <Image src="https://logo.com/image-cdn/images/kts928pd/production/4caa8394095a12539f5b60355ae9413ad3ea99bc-731x731.jpg?w=1080&q=72" width={500} height={300} alt="LOGO" className="logo__img"/>
                    </div>
                    
                    {/* <!-- Search --> */}

                    <div className="header__search">
                        <div className="header__search-input-wrap">
                            <input type="text" className="header__search-input" placeholder="Nhập để tìm kiếm"/>
                        </div>
                        
                        <button className="header__search-btn">
                            <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    
                    {/* <!-- Cart --> */}
                    <div className="header__cart">
                        <div className="header__cart-wrap">
                            <i className="header__cart-icon fa-solid fa-cart-shopping"></i>
                            <span className="header__cart-notice"> 0 </span>

                            {/* <!-- No cart add : header__cart-list--nothing --> */}
                            <div className="header__cart-list header__cart-list--nothing">
                                <Image src="/img/no-cart.png" width={250} height={150} alt="" className="header__cart-img--nothing"/>
                                <span className="header__cart-list-mess--nothing"> Chưa có sản phẩm </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="main__container">
            <Image src="https://d33byq9npfy6u9.cloudfront.net/2/2014/07/cakes.jpg" width={1510} height={496} alt="banh mi" className="home-img"/>
        </div>

        <AppFooter></AppFooter>

    </div>
  )
}