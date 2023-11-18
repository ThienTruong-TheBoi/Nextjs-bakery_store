import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/authenticate/nextauth/route";
import prisma from "@/app/libs/prisma";

const getCurrentUser = async () => {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.name) return;
        const currentUser = await prisma.user.findUnique({
            where: { name: session.user.name }
        });
        if (!currentUser) return;
        return currentUser;
    } catch (e: any) {
        // simply ignores if no user is logged in
        return;
    }
};

const userhome = () => {


  return (
    <div className="main">
        <header className="header">
            <div className="grid">
                <nav className="header__navbar">
                    <ul className="header__navbar-list">
                       <li className="header__navbar-item">
                          <Link href="/buyer/home" className="header__navbar-item-link">
                            <i className="fa-solid fa-cake-candles" ></i>
                            CAKES - Delicious cakes in your area!
                          </Link>
                       </li>
                    </ul>
                    <ul className="header__navbar-list">
                       <li className="header__navbar-item header__navbar-item-has-noti">
                         <Link href="" className="header__navbar-item-link"> 
                            <i className="fa-solid fa-bell" ></i>
                            THÔNG BÁO 
                         </Link>
                         <div className="header__notify">
                            <header className="header__notify-header">
                                <h3> Thông báo mới </h3>
                            </header>
                            <ul className="header__notify-list">
                                <li className="header__notify-item header__notify-item--unview">
                                    <Link href="" className="header__notify-link">
                                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRZv1FhlNLdfT5O8Lwir5UzCdyGrK1RsDxw&amp;usqp=CAU" width={48} height={48} alt="BANH SINH NHAT" className="header__notify-img"/>
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">
                                               Bánh sinh nhật
                                            </span>
                                            <span className="header__notify-descript"> Nhiều mẫu bánh sinh nhật mới với giá ưu đãi </span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="header__notify-item">
                                    <Link href="" className="header__notify-link">
                                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRZv1FhlNLdfT5O8Lwir5UzCdyGrK1RsDxw&amp;usqp=CAU" width={48} height={48} alt="BANH SINH NHAT" className="header__notify-img"/>
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">
                                               Bánh sinh nhật
                                            </span>
                                            <span className="header__notify-descript"> Nhiều mẫu bánh sinh nhật mới với giá ưu đãi </span>
                                        </div>
                                    </Link>
                                </li>

                                <li className="header__notify-item">
                                    <Link href="" className="header__notify-link">
                                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRZv1FhlNLdfT5O8Lwir5UzCdyGrK1RsDxw&amp;usqp=CAU" width={48} height={48} alt="BANH SINH NHAT" className="header__notify-img"/>
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">
                                               Bánh sinh nhật
                                            </span>
                                            <span className="header__notify-descript"> Nhiều mẫu bánh sinh nhật mới với giá ưu đãi </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <footer className="header__notify-footer">
                                <Link href="" className="header__notify-footer-btn"> Xem tất cả </Link>
                            </footer>
                         </div>
                      </li>
                       <li className="header__navbar-item">
                         <Link href="" className="header__navbar-item-link"> 
                            <i className="fa-solid fa-circle-question"></i>
                            ABOUT US </Link>
                       </li>

                       {/* <li className="header__navbar-item">
                          <Link href="/buyer/register" className="header__navbar-item-link"> 
                            ĐĂNG KÝ </Link>
                        </li>

                       <li className="header__navbar-item"> 
                          <Link href="/buyer/login" className="header__navbar-item-link"> 
                            ĐĂNG NHẬP </Link>
                        </li> */}

                       <li className="header__navbar-item header__navbar-user">
                           <Image src="data:image/png;base64,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" width={500} height={300} alt="user" className="header__navbar-user-img"/>
                           <span className="header__navbar-user-name"> Ha Vy </span>

                           <ul className="header__navbar-user-menu">
                              <li className="header__navbar-user-item">
                                  <Link href="/buyer/home/info"> Tài khoản của tôi </Link>
                              </li>
                              <li className="header__navbar-user-item">
                                 <Link href=""> Đơn mua </Link>
                              </li>
                              <li className="header__navbar-user-item">
                                 <Link href=""> Test </Link>
                              </li>
                              <li className="header__navbar-user-item header__navbar-user-item--separate">
                                <Link href="http://localhost:3000/"> Đăng xuất </Link>
                             </li>
                           </ul>

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

                            {/* <!-- Search history --> */}

                            <div className="header__search-history">
                                <h3 className="header__search-history-head"> Lịch sử tìm kiếm </h3>
                                <ul className="header__search-history-list">
                                    <li className="header__search-history-item">
                                        <Link href=""> Bông lan trứng muối </Link>
                                    </li>

                                    <li className="header__search-history-item">
                                        <Link href=""> Bánh mochi </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <button className="header__search-btn">
                            <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    
                    {/* <!-- Cart --> */}
                    <div className="header__cart">
                        <div className="header__cart-wrap">
                            <i className="header__cart-icon fa-solid fa-cart-shopping"></i>
                            <span className="header__cart-notice"> 3 </span>

                            {/* <!-- No cart add : header__cart-list--nothing --> */}
                            <div className="header__cart-list ">
                                <Image src="/img/no-cart.png" width={500} height={300} alt="" className="header__cart-img--nothing"/>
                                <span className="header__cart-list-mess--nothing"> Chưa có sản phẩm </span>

                                <h4 className="header__cart-heading"> Sản phẩm đã thêm </h4>
                                <ul className="header__cart-list-item">
                                    {/* <!-- Cart item  --> */}
                                    <li className="header__cart-item">
                                        <Image src="https://banhmigachdo.com/storage/2023/01/d639abd104bad9e6f7ac0c390cf2a138.jpg" width={500} height={300} alt="banh mi" className="header__cart-img"/>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name"> Bánh mì lúa mạch </h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-item-price"> 60.000đ </span>
                                                    <span className="header__cart-item-multiply"> x </span>
                                                    <span className="header__cart-item-qnt"> 2 </span>
                                                </div>
                                        
                                            </div>

                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-descript">
                                                    Vị: Socola
                                                </span>
                                                <span className="header__cart-item-remove"> Xóa </span>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="header__cart-item">
                                        <Image src="https://banhmigachdo.com/storage/2023/01/d639abd104bad9e6f7ac0c390cf2a138.jpg" width={500} height={300} alt="banh mi" className="header__cart-img"/>
                                        <div className="header__cart-item-info">
                                            <div className="header__cart-item-head">
                                                <h5 className="header__cart-item-name"> Bánh mì lúa mạch </h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-item-price"> 60.000đ </span>
                                                    <span className="header__cart-item-multiply"> x </span>
                                                    <span className="header__cart-item-qnt"> 2 </span>
                                                </div>
                                        
                                            </div>

                                            <div className="header__cart-item-body">
                                                <span className="header__cart-item-descript">
                                                    Vị: Socola
                                                </span>
                                                <span className="header__cart-item-remove"> Xóa </span>
                                            </div>

                                        </div>
                                    </li>

                                    

                                    
                                </ul>

                                <Link href="" className="header__cart-view-cart btn btn--primary"> Xem giỏ hàng </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="main__container">
            <div className="grid">
                <div className="grid__row main__content">
                    <div className="grid__column-2">
                        <nav className="category">
                         <h3 className="category__heading">
                             <i className="category__heading-icon fa-solid fa-list" ></i>
                             Danh mục 
                         </h3>
                         <ul className="category-list">
                             <li className="category-item category-item--active">
                                 <Link href="" className="category-item__link"> Bánh sinh nhật </Link>
                             </li>
                             <li className="category-item">
                                 <Link href="" className="category-item__link"> Bánh ăn kiêng </Link>
                             </li>
                             <li className="category-item">
                                 <Link href="" className="category-item__link"> Bánh mặn </Link>
                             </li>
                         </ul>
                        </nav>
                    </div>
                    
                    <div className="grid__column-10">
                        <div className="home-filter">
                            <span className="home-filter__label">
                                Sắp xếp theo
                            </span>
                            <button className="home-filter__btn btn"> Phổ biến </button>
                            <button className="home-filter__btn btn btn--primary"> Mới nhất </button>
                            <button className="home-filter__btn btn"> Bán chạy </button>

                            <div className="home-filter__page">
                                <span className="home-filter__page-num">
                                    <span className="home-filter__page-numcur">1</span>/14
                                </span>

                                <div className="home-filter__page-ctrl">
                                    <Link href="" className="home-filter__page-btn home-filter__page-btn-dis">
                                        <i className="home-filter__page-icon fas fa-angle-left"> </i>
                                    </Link>

                                    <Link href="" className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fas fa-angle-right"> </i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="home-product">
                            <div className="grid__row">
                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="/product/banhmi">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 70.000đ </span>
                                            <span className="home-product-item__price-cur"> 60.000đ </span>
                                         </div>
                                         <div className="home-product-item__action">
                                            <span className="home-product-item__like home-product-item__liked">
                                                <i className="home-product-item__likeicon far fa-heart"></i>
                                                <i className="home-product-item__likedicon fas fa-heart"></i>
                                            </span>
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="home-product-item__stargold fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>

                                            <span className="home-product-item__sold">17 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">10%</span>
                                            <span className="home-product-item__sale-label">GIẢM</span>
                                         </div>
                                    </Link>
                                </div>

                                

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer className="footer">
            <div className="grid">
                <div className="grid__row">
                    <p className="footer-text"> @GROUP6-CAKES: HATRIEUYENVY PHANVOTHIENTRUONG LEHOANGCAONGUYEN </p>
                </div>
            </div>

        </footer>

        <script>
            
        </script>
    </div>
    
    
    /* <!-- Modal layout -->

    <!-- <div className="modal">
        <div className="modal__overlay"> </div>
        <div className="modal__body">
           
            REGISTER FORM

           <div className="auth-form">
            <div className="auth-form__header">
                <h3 className="auth-form__heading"> ĐĂNG KÝ </h3>
                <span className="auth-form__switch-btn"> ĐĂNG NHẬP </span>
            </div>
            
            <div className="auth-form__form">
                <div className="auth-form__group">
                    <input type="text" className="auth-form__input" placeholder="Tên đăng nhập">
                </div>
                <div className="auth-form__group">
                    <input type="text" className="auth-form__input" placeholder="Mật khẩu">
                </div>
                <div className="auth-form__group">
                    <input type="text" className="auth-form__input" placeholder="Nhập lại mật khẩu">
                </div>
            </div>

            <div className="auth-form__controls">
                <button className="btn"> ĐÓNG </button>
                <button className="btn btn--primary"> ĐĂNG KÝ </button>
            </div>
          </div>

          LOGIN FORM

          <div className="auth-form">
            <div className="auth-form__header">
                <h3 className="auth-form__heading"> ĐĂNG NHẬP </h3>
                <span className="auth-form__switch-btn"> ĐĂNG KÝ </span>
            </div>
            
            <div className="auth-form__form">
                <div className="auth-form__group">
                    <input type="text" className="auth-form__input" placeholder="Tên đăng nhập">
                </div>
                <div className="auth-form__group">
                    <input type="text" className="auth-form__input" placeholder="Mật khẩu">
                </div>
            </div>
            <div className="auth-form__controls">
                <button className="btn"> ĐÓNG </button>
                <button className="btn btn--primary"> ĐĂNG NHẬP </button>
            </div>
          </div>
        </div>
    </div> --> */

  )
}

export default userhome;



