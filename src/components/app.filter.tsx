import '@/styles/main.css';
import Link from 'next/link'
const filterpage = () => {
    return (
        <div className="home-filter">
                            <span className="home-filter__label">
                                Sắp xếp theo
                            </span>
                            <button className="home-filter__btn btn"> Phổ biến </button>
                            <button className="home-filter__btn btn btn--primary"> Mới nhất </button>
                            <button className="home-filter__btn btn"> Bán chạy </button>

                            <div className="home-filter__page">
                                <span className="home-filter__page-num">
                                    <span className="home-filter__page-numcur">1</span>/1
                                </span>

                                <div className="home-filter__page-ctrl">
                                    <Link href="" className="home-filter__page-btn home-filter__page-btn-dis">
                                        <i className="home-filter__page-icon fas fa-angle-left"> </i>
                                    </Link>

                                    <Link href="" className="home-filter__page-btn home-filter__page-btn-dis">
                                        <i className="home-filter__page-icon fas fa-angle-right"> </i>
                                    </Link>
                                </div>
                            </div>
        </div>
    )
}

export default filterpage;