import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signupRider: builder.mutation({
      query: (data) => ({
        url: "/rider/signup",
        method: "POST",
        body: data,
      }),
    }),
    verifyRiderOTP: builder.mutation({
      query: (data) => ({
        url: "/rider/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useSignupRiderMutation,
  useVerifyRiderOTPMutation,
  useLoginMutation,
} = authApi;