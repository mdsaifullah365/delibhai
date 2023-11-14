import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import * as yup from "yup";
import Submit from "../../../components/forms/Submit";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { isMobilePhone } from "../../../utils/isMobilePhone";

const userSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("name is required")
    .min(3, "name must be at least 3 characters long"),
  gender: yup
    .string()
    .trim()
    .required("gender is required")
    .oneOf(
      ["পুরুষ", "মহিলা", "অন্যান্য"],
      "${value} is an invalid gender. Gender must be পুরুষ/মহিলা/অন্যান্য"
    ),
  email: yup
    .string()
    .trim()
    .lowercase()
    .test("isValidEmail", `email is not valid`, isEmail),
  mobile: yup
    .string()
    .trim()
    .required("mobile number is required")
    .test("isMobilePhone", `mobile number is invalid`, isMobilePhone("bn-BD")),
  password: yup
    .string()
    .required("password is required")
    .test(
      "isStrongPassword",
      "password must be at least 4 characters long",
      (value) =>
        isStrongPassword(value, {
          minLength: 4,
          minLowercase: 0,
          minNumbers: 0,
          minUppercase: 0,
          minSymbols: 0,
        })
    ),
  confirmPassword: yup
    .string()
    .required("please confirm your password")
    .test("isMatchedPassword", `passwords don't match`, function (value) {
      return value === this.parent.password;
    }),
});

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (userData) => {
    setLoading(true);
    const response = await fetch(
      "https://dev-delibhai.onrender.com/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await response.json();
    console.log(result);

    if (result.success) {
      navigate("/otp-verification", { state: { id: result.data.id } });
    }

    if (result?.error?.keyPattern?.mobile) {
      setError("mobile", {
        message: "a user already exist with this mobile number",
      });
    }

    if (result?.code === "duplicateEmail") {
      setError("email", {
        message: result.message,
      });
    }

    setLoading(false);
  };

  return (
    <>
      <TopPanel />
      <Title
        title="একটি একাউন্ট তৈরী করুন"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />

      <PageContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 mb-1">
            <label className="font-bold">পুরো নাম</label>
            <input
              {...register("name")}
              type="text"
              placeholder="পুরো নাম লিখুন"
              disabled={loading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.name?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">লিঙ্গ</label>
            <select
              {...register("gender")}
              disabled={loading}
              className="w-full py-3 border-b border-primary bg-transparent"
            >
              <option value="পুরুষ">পুরুষ</option>
              <option value="মহিলা">মহিলা</option>
              <option value="অন্যান্য">অন্যান্য</option>
            </select>
            <p className="text-red-400">{errors.gender?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">ই-মেইল</label>
            <input
              {...register("email")}
              type="text"
              placeholder="ই-মেইল লিখুন"
              disabled={loading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.email?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">মোবাইল নাম্বার</label>
            <input
              {...register("mobile")}
              type="text"
              placeholder="মোবাইল নাম্বার লিখুন"
              disabled={loading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.mobile?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">পাসওয়ার্ড</label>
            <input
              {...register("password")}
              type="password"
              placeholder="পাসওয়ার্ড দিন"
              disabled={loading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.password?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">কনফার্ম পাসওয়ার্ড</label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="পুনরায় পাসওয়ার্ড দিন"
              disabled={loading}
              className="w-full py-3 border-b border-primary"
            />
            <p className="text-red-400">{errors.confirmPassword?.message}</p>
          </div>

          <Submit disabled={loading} value="ওটিপি কোড পাঠান" />
        </form>
      </PageContainer>
    </>
  );
}

export { Signup };