import './info.css';
import AppFooter from '@/components/app.footer';
import AppHeader from '@/components/app.header';
import AppCategory from '@/components/app.category';
const infouser = () => {
    return (
    <div className="main">
        <AppHeader></AppHeader>

        <div className="main__container">
            <div className="grid">
                <div className="grid__row main__content">
                    <AppCategory></AppCategory>
                    
                    <div className="grid__column-10">
                        <div className="infu-wrap">
                            <div className="infu-h">
                                <h3 className="infu-h3">Hồ sơ của tôi</h3>
                            </div>

                            <div className="infu-main">
                                <div className="infu-info">
                                    <form>
                                        <div className="infu-table">
                                            
                                            <div>
                                                <div className="infu-label">
                                                    <label>Tên</label>
                                                </div>
                                                <div className="infu-detail">
                                                    <div>
                                                        <div className="">
                                                            <input type="text" placeholder="" className="in-infu" value="Yuneee"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div className="infu-label">
                                                    <label>Số điện thoại</label>
                                                </div>
                                                <div className="infu-detail">
                                                    <div className="">
                                                        <input type="text" placeholder="" className="in-infu" value="0707070707"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="infu-label">
                                                    <label>Địa chỉ</label>
                                                </div>
                                                <div className="infu-detail">
                                                    <div className="">
                                                        <input type="text" placeholder="" className="in-infu" value="ĐH CNTT"/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div className="infu-label">
                                                    <label></label>
                                                </div>
                                                <div className="infu-detail">
                                                    <button type="button" className="btn btn--primary" aria-disabled="false">Lưu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="infu-ava">
                                    <div className="ava-wrap">
                                        <div className="avaimg-wrap">
                                            <div className="ava-img" style={{
                                                backgroundImage: 'url(https://down-vn.img.susercontent.com/file/387dd48a50e01f0b93a2b709ce1e1213)', }}
                                            ></div>
                                        
                                        </div>

                                        <input className="pick-ava" type="file" accept=".jpg,.jpeg,.png"/>
                                            <button type="button" className="btn">Chọn ảnh</button>
                                            <div className="note-ava">
                                                <div className="ava-size">Dung lượng file tối đa 1 MB</div>
                                                <div className="type-ava">Định dạng:.JPEG, .PNG</div>
                                            </div>
                                        </div>
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

export default infouser;