import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Question } from "../server/types.ts";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], undefined>({
      query: () => `/questions`,
      keepUnusedDataFor: 5000,
    }),
  }),
});

export const {
  useGetQuestionsQuery,
} = api;
