import '@/styles/main.css';
import Link from 'next/link'
const categorypage = () => {
    return (
        <div className="grid__column-2">
                    <nav className="category">
                         <h3 className="category__heading">
                             <i className="category__heading-icon fa-solid fa-list" ></i>
                             Danh mục 
                         </h3>
                         <ul className="category-list">
                             <li className="category-item category-item--active">
                                 <Link href="/buyer/home" className="category-item__link"> Bánh mì </Link>
                             </li>
                             <li className="category-item">
                                 <Link href="/product/banhquy" className="category-item__link"> Bánh quy </Link>
                             </li>
                             <li className="category-item">
                                 <Link href="/product/granola" className="category-item__link"> Granola </Link>
                             </li>
                         </ul>
                    </nav>
        </div>
    )
}

export default categorypage;