import { Sum } from "../../sum"

test(
    "Sum Function to calculate sum of two number",()=>{
        const result =Sum(5,9)

        // Below line know as Assertion 
        expect(result).toBe(14);
    }
)