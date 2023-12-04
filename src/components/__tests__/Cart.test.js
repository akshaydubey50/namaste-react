import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../restaurant/RestaurantMenu"
import MOCK_DATA_MENU_LIST from "../../mocks/ResMenuItemList.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"

it("Should Load Menu Restaurant Item list Data", async () => {

    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(MOCK_DATA_MENU_LIST)
            }
        })
    })
    await act(async()=>render(
        <Provider store={appStore}>

        <RestaurantMenu resData={MOCK_DATA_MENU_LIST}/>
        </Provider>
    ))

    const recommendedContainer = screen.getByText("Recommended")
        fireEvent.click(recommendedContainer)

        const menuItem=screen.getAllByTestId("foodItems")

})