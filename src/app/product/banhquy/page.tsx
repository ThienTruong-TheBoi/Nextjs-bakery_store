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
                                    <Link className="home-product-item" href="/product/banhquy/id01">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/8c2f7cbc15e61dfb735cd233206cfcf0-500x500.jpeg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Combo Brownie Crackers 250Gr Và Bánh Ngói Hạnh Nhân 250gr Dành Cho Ăn Eatlean </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 248.000đ </span>
                                            <span className="home-product-item__price-cur"> 210.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhquy/id02">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/32a0b702a59857c89600ad80286fb34a.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Combo Siêu Hạt Granola Mix 11 Hạt 500Gr Và Bánh Ngói Hạnh Nhân 250Gr Healthy Dành Cho Eatclean </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 280.000đ </span>
                                            <span className="home-product-item__price-cur"> 240.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhquy/id03">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/040eebf965a69d20357c75692c410e93.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Ngói Hạnh Nhân 250g Không Đường, Không Tinh Bột, 100% Từ hạt, Chuẩn Keto </h4>
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
                                    <Link className="home-product-item" href="/product/banhquy/id04">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/sg-11134201-22120-7es4nk0rwxkv0c.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Combo 1 Hộp 10 Túi 5 Vị Granola Túi Tiện Lợi Ngũ Cốc Giảm Cân Và Bánh Ngói Hạnh Nhân 250gr Healthy </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 355.000đ </span>
                                            <span className="home-product-item__price-cur"> 265.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhquy/id05">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/a5cd2fb3d8ed9acc7c451a251bc1cdc6.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Brownie Crackers Hạnh Nhân 250GR Chuẩn Healthy Dành Cho Ăn Kiêng </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 180.000đ </span>
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
                                    <Link className="home-product-item" href="/product/banhquy/id06">
                                         <div className="home-product-item__img" style={{
                                          backgroundImage: 'url(https://banhmigachdo.com/storage/2023/01/bac863adacf32f192fc2197eb57d23a5.jpg)', }}
                                          ></div>
                                         <h4 className="home-product-item__name"> Bánh Cookie Ngũ Cốc Yến Mạch 300g, Không Đường, Không Bột Mì, Ít Calo, Giàu Dinh Dưỡng </h4>
                                         <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> 90.000đ </span>
                                            <span className="home-product-item__price-cur"> 80.000đ </span>
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



