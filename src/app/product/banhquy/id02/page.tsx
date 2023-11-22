import '@/app/product/banhmi/id01/banhmi.css';
import Image from 'next/image';
import AppFooter from '@/components/app.footer';
import AppHeader from '@/components/app.header';
import AppCategory from '@/components/app.category';
const qid02 = () => {
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
                                    <Image src="https://banhmigachdo.com/storage/2023/01/32a0b702a59857c89600ad80286fb34a.jpg" width={350} height={350} alt="banh mi" className="product-img"/>
                                </div>

                                <div className="product-detail">
                                    <h3 className="product_title">
                                    Combo Siêu Hạt Granola Mix 11 Hạt 500Gr Và Bánh Ngói Hạnh Nhân 250Gr Healthy Dành Cho Eatclean
                                    </h3>

                                    <div className="product-item__price">
                                        <span className="product-item__price-old"> 280.000đ </span>
                                        <span className="product-item__price-cur"> 240.000đ </span>
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

export default qid02;