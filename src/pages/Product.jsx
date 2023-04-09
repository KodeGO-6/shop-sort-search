import React, { useContext } from 'react'
import useFetchData from '../useFetchData'
import { SearchContext } from '../components/Search'

export const Product = () => {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products')
    const { query, category, filteredItems, filteredCategory } = useContext(SearchContext)

    {loading && <div>Loading...</div>}
    {error && <div>Error: {error.message}</div>}

    const SearchResult = () => {
        return filteredItems.map(product => (
            <div key={product.id} className='card'>
                <img src={product.image} alt='#' />
                <div className='card-body'>
                    <h6>{product.title}</h6>
                    <small>{product.category}</small>
                    <h6>{product.price}</h6>
                </div>
            </div>
        ))
    }

    const SortCategory = () => {
        return filteredCategory(category).map(product => (
            <div key={product.id} className='card'>
                <img src={product.image} alt='#' />
                <div className='card-body'>
                    <h6>{product.title}</h6>
                    <small>{product.category}</small>
                    <h6>{product.price}</h6>
                </div>
            </div>
        ))
    }

    const AllProducts = () => {
        return data.map(product => (
            <div key={product.id} className='card'>
                <img src={product.image} alt='#' />
                <div className='card-body'>
                    <h6>{product.title}</h6>
                    <small>{product.category}</small>
                    <h6>{product.price}</h6>
                </div>
            </div>
        ))
    }

    const DisplayProduct = () => {
        if (category !== 'all') {
            return <SortCategory />
        }
        if (query !== '') {
            return <SearchResult />
        }
        return <AllProducts />
    }


    return (
        <div className='products'>
            <DisplayProduct />
        </div>
    )
}
