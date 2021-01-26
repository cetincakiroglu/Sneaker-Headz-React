import React,{useRef, useState, useEffect} from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import {useHistory, useLocation, Link} from 'react-router-dom'
import products from '../Data/productData.json'

function Search() {
   
    const [searchResult, setSearchResult] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const searchInput = useRef();
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    
    function handleSubmit(e){
        e.preventDefault();
        history.push(`/search?q=${searchInput.current.value}`)
    }

    useEffect(()=>{
        if(q){
            searchInput.current.value=q;
            const productSearch = products.results.filter(item => item.title.toLowerCase().includes(q.toLowerCase())).map((item)=>
                <li key={item.id}>
                    <Link to ={`/ProductDetails/${item.id}`} >{item.detail}</Link>
                </li>
            );
            setSearchResult(productSearch);
        }
    },[q])
    return (
        <>
            <Form onSubmit={handleSubmit} inline>
               <FormControl 
               type="text" 
               id="search"
               placeholder="Search sneakerzzz" 
               className="mr-sm-2"
               ref={searchInput}
               name={q}
               />
               <Button onClick={handleSubmit} variant="outline-info">Search</Button>
           </Form>
           {searchResult}
        </>
    )
}

export default Search
