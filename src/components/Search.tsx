import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from "../partials/SearchBar"
import RenderEntryDetails from "../partials/RenderEntryDetails"
import {
    RenderEntryInterface,
    OwnerInterface,
    RenderCardInterface,
    RenderEntriesInterface
} from "../types"

const OwnerCard = ({ owner }: { owner: OwnerInterface }) => {
    return (
        <div className='ownerCard'>
            <div className='ownerCardImage'>
                <img src={owner.avatar_url} />
            </div>
            <div className='ownerCardBody'>
                <div className='ownerCardRow'>
                    <div className='ownerCardRowKey'>
                        {owner.login}
                    </div>
                </div>
            </div>
        </div>
    )
}

const RenderCard = ({ children, link }: RenderCardInterface) => {
    let navigate = useNavigate();
    return (
        <div
            role="searchCard"
            onClick={() => {
                if (link) {
                    navigate(link);
                }
            }}
            className='entryCardOuter'
        >
            <div className='entryCardInner'>
                {children}
            </div>
        </div>
    )
}

const RenderEntries = ({ entries }: RenderEntriesInterface) => {
    if (!entries || !entries.length) {
        return null
    }

    let blocks = []
    if (!entries) return

    blocks = entries.map((entry: RenderEntryInterface, i: number) => {

        let { id, owner } = entry

        return (
            <RenderCard
                key={id + "card"}
                link={`/${id}`}
            >
                <RenderEntryDetails
                    entry={entry}
                    fieldsToDisplay={[
                        "id",
                        "stargazers_count",
                        "watchers_count"
                    ]}
                />

                <OwnerCard
                    owner={owner as OwnerInterface}
                />
            </RenderCard>
        )
    })

    return (
        <div className='entryCards'>
            {blocks}
        </div>
    )
}

export const Search = () => {

    let [response, setResponse] = useState(null)
    let [filters, setFilter] = useState([])

    useEffect(() => {

        if (!filters || !filters.length) {
            return
        }

        const header = new Headers();
        header.append("Content-Type", "application/json")

        const requestOptions = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                search: filters,
                per_page: 12,
                page: 1,
                sort: "stars",
                order: "desc"
            })
        };

        fetch("/api/search", requestOptions)
            .then(response => response.json())
            .then((results) => {
                setResponse(results)
            })
            .catch((e) => {
                //a real error logger goes here - not this
                console.error(e)
            })

    }, [filters])

    return (
        <div className="main">
            <div className="searchBarOutter">
                <SearchBar
                    fieldsToDisplay={[
                        {
                            type: "text",
                            value: "name"
                        }
                    ]}
                    filters={filters}
                    setFilter={setFilter}
                />
            </div>

            <p className="entryCount">
                Your search contains <strong role="numberOfEntries">{response?.total_count || 0}</strong> results
            </p>

            <RenderEntries
                entries={response?.items}
            />
        </div>
    );
}