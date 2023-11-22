import Link from 'next/link'
import Image from 'next/image';
import AppFooter from '@/components/app.footer';
import AppHeader from '@/components/app.header';
import AppCategory from '@/components/app.category';
import AppFilter from '@/components/app.filter';
const userhome = () => {
  return (
    <div className="main">
        <AppHeader></AppHeader>
        <div className="main__container">
            <div className="grid">
                <div className="grid__row main__content">
                    <AppCategory></AppCategory>
                    
                    <div className="grid__column-10">
                        <AppFilter></AppFilter>

                        <div className="home-product">
                            <div className="grid__row">
                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="/product/granola/id01">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/03/gran-2.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Ngũ Cốc Yến Mạch Giảm Cân Granola Phiên Bản Mới Ăn Kiêng Dinh Dưỡng Không Đường 500g </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 110.000đ </span>
                                            <span className="home-product-item__price-cur"> 85.000đ </span>
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
                                            <span className="home-product-item__sale-percent">Giảm</span>
                                            <span className="home-product-item__sale-label">giá!</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="/product/granola/id02">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/84e8d5b787eed2fa38d270095d7df0d6.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Thanh Gạo Lứt Ức Gà 250g Giòn Thơm Đậm Đà Chuẩn Ăn Kiêng </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 130.000đ </span>
                                            <span className="home-product-item__price-cur"> 120.000đ </span>
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

                                            <span className="home-product-item__sold">10 đã bán</span>
                                         </div>

                                         <div className="home-product-item__favor">
                                            <i className="fas fa-check"></i>  
                                            Yêu thích
                                         </div>

                                         <div className="home-product-item__sale">
                                            <span className="home-product-item__sale-percent">Giảm</span>
                                            <span className="home-product-item__sale-label">giá!</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="/product/granola/id03">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/8e1ac8d28a9141fbf864c29236825c32.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Granola Siêu Hạt Mix 11 Loại Hạt 500G, Ngũ Cốc Giảm Cân Chuẩn Ăn Kiêng </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 200.000đ </span>
                                            <span className="home-product-item__price-cur"> 140.000đ </span>
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
                                            <span className="home-product-item__sale-percent">Giảm</span>
                                            <span className="home-product-item__sale-label">giá!</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="/product/granola/id04">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/52f23bd52d18a90d9ad91053b6cec72f.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Granola Siêu Hạt Mix 11 Quả Hạt 100G, Ngũ Cốc Giảm Cân Chuẩn Ăn Kiêng </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 40.000đ </span>
                                            <span className="home-product-item__price-cur"> 29.000đ </span>
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
                                            <span className="home-product-item__sale-percent">Giảm</span>
                                            <span className="home-product-item__sale-label">giá!</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="/product/granola/id05">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/7921fd4d36e59575852f4d43cfe76248.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Thanh Năng Lượng Hương Thảo Mộc 400g Chuẩn Ăn Kiêng Nguyên Liệu Tự Nhiên </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 130.000đ </span>
                                            <span className="home-product-item__price-cur"> 95.000đ </span>
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
                                            <span className="home-product-item__sale-percent">Giảm</span>
                                            <span className="home-product-item__sale-label">giá!</span>
                                         </div>
                                    </Link>
                                </div>

                                <div className="grid__column-2-4">
                                    {/* <!-- Product items  --> */}
                                    <Link className="home-product-item" href="/product/granola/id06">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/sg-11134201-22120-xnk9nyrexxkv64.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Combo Biscotti Cao Cấp 250gr Siêu Healthy Và 1 Hộp 10 Túi Granola Tiện Lợi Ngũ Cốc Siêu Hạt Dành Cho Ăn Kiêng </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 365.000đ </span>
                                            <span className="home-product-item__price-cur"> 254.000đ </span>
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
                                            <span className="home-product-item__sale-percent">Giảm</span>
                                            <span className="home-product-item__sale-label">giá!</span>
                                         </div>
                                    </Link>
                                </div>

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AppFooter></AppFooter>
    </div>
  )
}

export default userhome;



