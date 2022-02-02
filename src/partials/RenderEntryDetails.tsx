import React, { ReactElement } from 'react'
import { RenderEntryCardInterface } from "../types"

export default ({ entry, fieldsToDisplay }: RenderEntryCardInterface) => {
    let fields: ReactElement[] = []
    let { id } = entry

    //loop through fields we want to display
    if (fieldsToDisplay && fieldsToDisplay.length) {
        fieldsToDisplay.map((fieldKey) => {
            fields.push(
                <div
                    className='entryCardRow'
                    key={id + fieldKey}
                >
                    <div className='entryCardRowKey'>
                        {fieldKey}
                    </div>

                    <div className='entryCardRowValue'>
                        {entry[fieldKey]}
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <h3 className='entryCardTitle' role="entryCardTitle">{entry.name}</h3>
            {fields}
        </>
    )
}