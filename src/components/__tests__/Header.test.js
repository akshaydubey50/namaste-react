import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"

it('Should Check Header Component Login Button', () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )

    const button= screen.getByRole("button")

    expect(button).toBeInTheDocument();


})

it('Should Check Header Component Cart Item 0', () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument();

})

it('Should Check Header Component Login Button', () => {
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", { name: "Logout" })


    expect(logoutButton).toBeInTheDocument();

})