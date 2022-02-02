import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RenderEntryDetails from '../partials/RenderEntryDetails'

export const Repo = () => {
    const { id } = useParams();
    let [response, setResponse] = useState(null)
    let [fieldsToDisplay, setFieldsToDisplay] = useState([])

    useEffect(() => {
        const header = new Headers();
        header.append("Content-Type", "application/json")

        const requestOptions = {
            method: 'GET',
            headers: header
        }

        fetch(`/api/repo/${id}`, requestOptions)
            .then(response => response.json())
            .then((results) => {
                setResponse(results)
                setFieldsToDisplay(Object.keys(results).filter((key) => {
                    //this is to make it simple for myself in the time
                    return typeof results[key] == "string"
                }))
            })
            .catch((e) => {
                //a real error logger goes here - not this
                console.error(e)
            })
    }, [])

    if (!response) {
        return null
    }

    return (
        <div className='main'>
            <RenderEntryDetails
                entry={response}
                fieldsToDisplay={fieldsToDisplay}
            />
        </div>
    );
}