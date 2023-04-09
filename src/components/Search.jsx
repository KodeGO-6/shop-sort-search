import React, { createContext, useMemo, useState } from 'react'
import useFetchData from '../useFetchData'

export const SearchContext = createContext(null)

export const SearchContextProvider = (props) => {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('all')
    const { data } = useFetchData('https://fakestoreapi.com/products')

    const searchHandler = (e) => {
        setQuery(e.target.value)
    };

    const onSearch = (searchTerm) => {
        setQuery(searchTerm)
    } 

    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }

    const filteredItems = useMemo(() => {
        return data.filter(item => {
            if (item.title.toLowerCase().includes(query.toLowerCase())) {
                return true;
            }
            return false
        });
    }, [data, query])

    const filteredCategory = useMemo(() => {
        return (category) => {
            return data.filter(item => category === 'all' || item.category === category)
        }
    }, [data])

    const contextValue = { query, searchHandler, onSearch, category, categoryHandler, filteredItems, filteredCategory }

  return (
    <SearchContext.Provider value={contextValue}>
        {props.children}
    </SearchContext.Provider>
  )
}
