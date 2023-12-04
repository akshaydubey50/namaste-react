import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"
import MOCK_DATA_LIST from "../../mocks/ResCardList.json"
import BodyLayout from "../BodyLayout";
import { BrowserRouter } from "react-router-dom";

// for mock api call in jsdom-server env jest.fn is created 
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_LIST)
        }
    })
})

it("Should render the resCard for search input burger which get 1 filtered card", async () => {
    // Whenever we use fetch() or useState then wrapper component in act()  
    await act(
        async () => {
            render(
                <BrowserRouter >
                    <BodyLayout />
                </BrowserRouter>

            )
        }
    )
    const resCardAll = screen.getAllByTestId("resCard");
    expect(resCardAll.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" })
    const searchInput = screen.getByTestId("searchInput");
    // onChange
    fireEvent.change(searchInput, { target: { value: "burger" } })
    // onClick
    fireEvent.click(searchBtn);
    const resCardFiltered = screen.getAllByTestId("resCard");

    expect(resCardFiltered.length).toBe(1);
})