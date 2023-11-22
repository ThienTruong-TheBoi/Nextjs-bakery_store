import '@/app/product/banhmi/id01/banhmi.css';
import Image from 'next/image';
import AppFooter from '@/components/app.footer';
import AppHeader from '@/components/app.header';
import AppCategory from '@/components/app.category';
const id03 = () => {
    return (
    <div className="main">
        <AppHeader></AppHeader>

        <div className="main__container">
            <div className="grid">
                <div className="grid__row main__content">
                    <AppCategory></AppCategory>
                    
                    <div className="grid__column-10">
                        <div className="product-wrap">
                             <div className="product-item__sale">
                                 <span className="product-item__sale-percent">Giảm</span>
                                 <span className="product-item__sale-label">giá!</span>
                             </div>   

                             <div className="product_info">

                                <div className="product-item__img">
                                    <Image src="https://banhmigachdo.com/storage/2023/01/12ac359f8c53b3a8d7a69e43d94e1d41-500x500.jpg" width={350} height={350} alt="banh mi" className="product-img"/>
                                </div>

                                <div className="product-detail">
                                    <h3 className="product_title">
                                    Bánh Mì Hạt Lúa Mạch Nảy Mầm Mlem 450g
                                    </h3>

                                    <div className="product-item__price">
                                        <span className="product-item__price-old"> 210.000đ </span>
                                        <span className="product-item__price-cur"> 85.000đ </span>
                                    </div>

                                    <form className="product-qa-buy">
                                        <div className="product-quantity">
                                            <button type="button" className="minus btn">-</button>
                                            <div className="quantity">
                                                <input
                                                // type="number"
                                                inputMode='numeric'
                                                className="in-quantity"
                                                value="1"
                                                min="1"
                                                step="1"
                                                />
                                            </div>
                                            <button type="button" className="plus btn">+</button>
                                        </div>
                                        <button type="submit" className="btn btn--primary">
                                        Thêm vào giỏ
                                        </button>
                                    </form>
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

export default id03;