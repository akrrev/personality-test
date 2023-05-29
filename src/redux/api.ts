import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Question, TestResultResponse, TestSubmissionRequestArg } from 'server/types.ts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], void>({
      query: () => `/questions`,
    }),
    getTestResult: builder.query<TestResultResponse, TestSubmissionRequestArg>({
      query: (queryArgs) => `/test-result?score=${queryArgs.score}`,
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useGetTestResultQuery,
} = api;
