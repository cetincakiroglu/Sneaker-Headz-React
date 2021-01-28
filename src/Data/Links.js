import Home from '../Components/Home'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Products from '../Components/Products'
import ProductDetails from '../Components/Product/ProductDetails'
import Search from '../Components/Search'
import Result from '../Components/Result'
import NotFound from '../Components/NotFound'


const links = [
    { link: '/', title: 'Home', component: Home, isExact: true, isLink: true },
    { link: '/Products', title: 'Sneakerz', component: Products, isExact: false, isLink: true },
    { link: '/ProductDetails/:id', title: 'Product Details', component: ProductDetails, isExact: false, isLink: false },
    { link: '/About', title: 'About', component: About, isExact: true, isLink: true },
    { link: '/Contact', title: 'Contact', component: Contact, isExact: true, isLink: true },
    { link: '/search', title: 'Search', component: Search, isExact: false, isLink: false },
    { link: '', title: '404', component: NotFound, isExact: false, isLink: false }

];
export default links;
