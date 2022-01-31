import React, {ReactElement} from 'react';
import { DisplayedSearchesInterface } from '../types';
 
export default ({searches, deleteCallback = null, editCallback = null}: DisplayedSearchesInterface) => {
    let searchBox: ReactElement[] = []
    searches.map((search, i) => {
        //value to string
        let searchValue = search.value.toString()

        searchBox.push(
            <div key={`searchBox${i}`} className="searchDisplayBox">
                <span className="searchFlexOuter">
                    <span className="searchFlex">
                        <span className="searchKey">{search.key}</span>
                        <span className="searchOperator">{search.operator}</span>
                        <span className="searchValueBox">
                            <span className="searchValue">
                                {searchValue}
                            </span>
                        </span>

                        {editCallback ? (
                           <i 
                                role="searchEditButton" 
                                className="fas fa-edit"
                                onClick={()=>{
                                    editCallback(i)
                                }}
                           ></i>
                        ) :(
                            null
                        )}

                        {deleteCallback ? (
                           <i 
                                role="searchEditButton" 
                                className="fas fa-trash-alt"
                                onClick={()=>{
                                    deleteCallback(i)
                                }}
                           ></i>
                        ) :(
                            null
                        )}
                       
                    </span>
                </span>
            </div>
        )
    })
    return <>{searchBox}</>
}  