import "@testing-library/jest-dom"
import {render,screen} from "@testing-library/react"
import RestaurantCard from "../../components/restaurant/RestaurantCard"
import MOCK_DATA from "../../mocks/ResCard.json"


it("Should Load the Res Card Component",()=>{

    render(<RestaurantCard resData={MOCK_DATA} />)

    const heading = screen.getByText("Pizza Hut")
    expect(heading).toBeInTheDocument();
})


