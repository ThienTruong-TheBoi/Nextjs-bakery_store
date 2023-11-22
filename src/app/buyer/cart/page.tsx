import './cart.css';
import Image from 'next/image';
import AppFooter from '@/components/app.footer';
import AppHeader from '@/components/app.header';
import AppCategory from '@/components/app.category';
const cartout = () => {
    return (
    <div className="main">
        <AppHeader></AppHeader>

        <div className="main__container">
            <div className="grid">
                <div className="grid__row main__content">
                    <AppCategory></AppCategory>
                    
                    <div className="grid__column-10">
                        <div className="cartout-wrap">                                   
                                <form className="cartout">
                                    <div className="cartout-note">
                                        <h3 className="cartout-note-h">Thông tin bổ sung</h3>
                                        <div className="cartout-note-detail">                                            
                                            <label className="cartout-note-detail-l">Ghi chú đơn hàng (tuỳ chọn)</label>
                                            <textarea className="in-note" placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn." maxLength={200}></textarea>                      
                                        </div>
                                    </div>

                                    <div className="cartout-cart">
                                        <h3 className="cartout-cart-h">Đơn hàng của bạn</h3>
                                        <div className="cartout-cart-wtabl">
                                            <table className="cartout-cart-tabl">
                                                <thead>
                                                    <tr>
                                                        <th className="cartout-product">Sản phẩm</th>
                                                        <th className="cartout-total">Tạm tính</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                            Bánh English Muffin Hộp 6 Bánh Bánh Thuần Chay Dành Cho Eatclean Giảm Cân&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>
                                                            
                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                             Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>

                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                             Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                             Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                             Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                             Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                             Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cartout_item">
                                                        <td className="cartout-product">
                                                             Bánh Mì Nga Lúa Mạch Đen Men Tự Nhiên Chuẩn Eatclean&nbsp;<strong className="cartout-quantity">×&nbsp;1</strong></td>
                                                        <td className="cartout-total">
                                                            <span>65.000đ</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cartout-subtotal">
                                                        <th>Tạm tính</th>
                                                        <td className="cartout-totalp"><span>195.000đ</span></td>
                                                    </tr>
                                                    <tr className="cartout-ship">
                                                        <th>Giao hàng</th>
                                                        <td className="cartout-totalp">                                                   
                                                            <label>30.000đ</label>					                                                                                                
                                                        </td>
                                                    </tr>
                                                    <tr className="cartout-order-total">
                                                        <th>Tổng</th>
                                                        <td className="cartout-totalp"><strong><span>225.000đ</span></strong></td>
                                                    </tr>                                                                                                                                                                                                         
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="cartout-payment">
                                            <div>
                                                <label className="cartout-payment-l"> Trả tiền mặt khi nhận hàng 	</label>
                                                <button type="submit" className="btn btn--primary">Đặt hàng</button>
                                            </div>    
                                        </div>
                                    </div>
                                </form>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppFooter></AppFooter>

    </div>

    )

}

export default cartout;