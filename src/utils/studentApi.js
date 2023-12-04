import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const studentApi = createApi({
    reducerPath : "studentApi",

    baseQuery: fetchBaseQuery({
        baseUrl:"https://656b0d20dac3630cf7279cd5.mockapi.io/"
    }),


    endpoints: (builder) => ({
        getStudentList: builder.query(() => ({
            query: () => "/user"
        })),
    }),
});
export const { useGetStudentListQuery } = studentApi