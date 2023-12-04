import { render, screen } from "@testing-library/react";
import User from "../User";
import "@testing-library/jest-dom";

describe("Check User Component", () => {

    // Before All method is called in start of the jsdom-sever start to run
    beforeAll(() => {
        console.log("Before All method is called in start of the jsdom-sever start to run")
    })

    // Before Each  method is called in before each test run's
    // Before each () is useful for cleanup
    beforeEach(() => {
        console.log("Before Each  method is called in before each test run's")
    })

    // After All method is called in after all test cases run completely
    afterAll(() => {
        console.log("After All method is called in after all test cases run completely")
    })

    // after Each  method is called in after each test run's
    afterEach(() => {
        console.log("after Each  method is called in after each test run's")
    })

    test("Should load User Function Component Heading Element", () => {
        render(<User />);
        // Querying
        const heading = screen.getAllByRole('heading')
        heading.forEach((heading) => {
            // Assertion
            expect(heading).toBeInTheDocument();
        });
    });


    test("Should load User Function Component Paragraph Element", () => {
        render(<User />);
        // Querying
        const paragraph = screen.getByText('Demo test')
        expect(paragraph).toBeInTheDocument();
    });
})