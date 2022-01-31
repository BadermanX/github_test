import React, {useState, useEffect, ChangeEvent} from 'react';
import DisplayedSearches from "./DisplayedSearches"
import Button from "./Button"
import { SearchItemInterface, SearchBarInterface } from '../types';

export default ({fieldsToDisplay, filters, setFilter} : SearchBarInterface)=>{

    const [currentFilterIndex, setCurrentFilterIndex] = useState(filters.length)
    const [currentFilter, setCurrentFilter] = useState(filters)   

    let operators = [
        { 
            name: "Greater Than",
            value: ">"
        },
        { 
            name: "Less Than",
            value: "<"
        },
        { 
            name: "Is",
            value: "="
        },
        {
            name: "Contains",
            value: "contains"
        }
    ]       

    const getCurrentSearch = (currentFilter : SearchItemInterface[])=>{
        let newSearch = [...currentFilter]

        if(!newSearch[currentFilterIndex]){
            newSearch[currentFilterIndex] = {
                key: fieldsToDisplay[0].value,
                operator: "contains",
                value: ""
            }
        }
        return newSearch
    }

    useEffect(()=>{
        setCurrentFilter(filters)
    } , [filters])

    let currentSearch = getCurrentSearch(currentFilter)  

    let fieldType = currentSearch[currentFilterIndex].key.includes("date") ? "date" : "text"
    
    return(
        <>        
            <div className='searchInner' role="searchInner">

                <input
                    role="searchInput"
                    type={fieldType}
                    placeholder='search'
                    value={currentFilter[currentFilterIndex]? currentFilter[currentFilterIndex].value : ""}
                    onChange={(e: ChangeEvent)=>{
                        let target = e.target as HTMLInputElement
                        let newSearch = getCurrentSearch(currentFilter)
                        newSearch[currentFilterIndex].value = target.value 
                        setCurrentFilter(newSearch)
                    }}
                />

                <Button
                    role="searchButton"
                    onClick={()=>{
                        setFilter(currentFilter);
                    }}
                >
                    <>Search</>            
                </Button>
            </div>       
        </>
    )
}