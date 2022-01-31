import React from "react";
import { render, fireEvent, waitFor, within } from "@testing-library/react"
import { Search } from "../components/Search"
import testSearch from "./mockData/testSearch.json"
import {
    BrowserRouter as Router  
} from "react-router-dom";

describe("Test search component", () => {
    it("Test render with no search data", async () => {
        let { findByRole } = render(<Search />)
        let numberOfEntries = await findByRole("numberOfEntries")
        expect(numberOfEntries.textContent).toEqual("0")
    })

    it("Test render with search data", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(testSearch),
            }),
        ) as jest.Mock;

        let { findByRole, findAllByRole} = render(
            <Router>
                <Search />
            </Router>
        )
        let searchInput = await findByRole("searchInput") as HTMLInputElement
        fireEvent.change(searchInput, { target: { value: 'react' } })
        expect(searchInput.value).toEqual("react")

        let searchButton = await findByRole("searchButton")
        searchButton.click()

        await waitFor(async () => {
            await findByRole("numberOfEntries")
        })

        let numberOfEntries = await findByRole("numberOfEntries")
        expect(+numberOfEntries.textContent).toEqual(testSearch.total_count)

        let searchCards = await findAllByRole("searchCard")
        expect(searchCards.length).toEqual(12)

        for(let i = 0; i < searchCards.length; i++){
            let searchCard = searchCards[i]
            let entryCardTitle = await within(searchCard).findByRole("entryCardTitle")
            expect(entryCardTitle.textContent).toEqual(testSearch.items[i].name)
        }

    })

})