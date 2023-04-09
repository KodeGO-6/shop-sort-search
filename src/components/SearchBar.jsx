import React, { useContext, useMemo, useRef, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import useFetchData from '../useFetchData'
import { SearchContext } from './Search'

export const SearchBar = () => {
    // const [query, setQuery] = useState('')
    
    const {query, searchHandler, onSearch, category, categoryHandler, filteredItems} = useContext(SearchContext)
    /* const onChange = (e) => {
        setValue(e.target.value)
    } 

    const onSearch = (searchTerm) => {
        setQuery(searchTerm)
        console.log('search', searchTerm)
    } 

    const filteredItems = useMemo(() => {
        return data.filter(item => {
            return item.title.toLowerCase().includes(query.toLowerCase())
        })
    }, [query])*/

  return (
    <div className='search-container'>
        <div className='search-inner'>
            <select id='category-select' value={category} onChange={categoryHandler}>
                <option value='all'>All Categories</option>
                <option value='electronics'>Electronics</option>
                <option value='jewelery'>Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            <input 
                className='search-box'
                type='search'
                value={query}
                onChange={searchHandler}
                placeholder='Search' />
        </div>
        <div className='dropdown'>
            {filteredItems.map(item => (
                query !== '' && 
                <div 
                    key={item.id}
                    className='dropdown-row'
                    onClick={() => onSearch(item.title)}>
                    {item.title}
                </div>
            ))}
        </div>
    </div>
/*         <div className='search-inner'>
            <input 
                type='text' 
                value={value} 
                onChange={onChange} 
                className='search-box'
                placeholder='Search' />
            <button 
                className='search-btn'
                onClick={() => onSearch(value)}>
                    <MagnifyingGlass size={32}/>
            </button>
        </div>
        <div className='dropdown'>
            {data.filter(product => {
                const searchTerm = value.toLowerCase();
                const productName = product.title.toLowerCase();

                return searchTerm && productName.startsWith(searchTerm) 
                    && productName !== searchTerm
            }).slice(0, 10).map((product) => (
                <div 
                key={product.id}
                    className='dropdown-row'
                    onClick={() => onSearch(product.title)}>
                    {product.title}
                </div>
            ))}
        </div> */
  )
}
