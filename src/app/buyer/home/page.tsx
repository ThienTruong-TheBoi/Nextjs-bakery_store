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
                                    <Link className="home-product-item" href="/product/banhmi/id01">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/18e56835481cd811fd153d502a71cde9-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 110.000đ </span>
                                            <span className="home-product-item__price-cur"> 65.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhmi/id02">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/64ad607c27ba8d3d047013b5e1564d1f.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 120.000đ </span>
                                            <span className="home-product-item__price-cur"> 65.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhmi/id03">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/813090157f673a4acd32f1b601d60792-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Mì Dưa Hấu Lá Dứa 600Gr Chuẩn Healthy </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 150.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhmi/id04">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/12ac359f8c53b3a8d7a69e43d94e1d41-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Mì Hạt Lúa Mạch Nảy Mầm Mlem 450g </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 210.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhmi/id05">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/393c6740b0aafb16c6fffc2dbd2e2f63.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Cake Chuối Chocolate 300Gr Chuẩn Healthy </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 120.000đ </span>
                                            <span className="home-product-item__price-cur"> 68.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhmi/id06">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/89672c74c92dad8fc0f8415ead765530-500x500.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Cake Carrot 300Gr Chuẩn Vị Anh Dành Cho Ăn Kiêng </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 120.000đ </span>
                                            <span className="home-product-item__price-cur"> 68.000đ </span>
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



