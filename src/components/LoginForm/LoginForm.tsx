"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import Spinner from "@/components/Spinner";

import { doCredentialLogin } from "@/actions/loginActions";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    watch,
  } = useForm<LoginFormData>();

  const [isPending, startTransition] = useTransition();
  const email = watch("email");
  const password = watch("password");

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key as keyof LoginFormData]);
        });

        const response = await doCredentialLogin(formData);

        if (!response) {
          alert("계정정보가 틀렸습니다.");
        } else {
          push("/");
        }
      } catch (error) {
        alert(error);
      }
    });
  };

  const liStyle = "flex w-full flex-col gap-y-1";
  const labelStyle = "body01m text-black";
  const inputStyle = "h-12 border rounded-md px-3 border-gray-300";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-12 py-[72px]">
      <form className="flex h-full flex-col" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="heading03b mb-[112px]">
          은계성당 관리자 페이지에 <br />
          오신 것을 환영합니다.
        </h2>
        <ul className="mb-12 flex flex-col gap-y-6">
          <li className={liStyle}>
            <label htmlFor="email" className={labelStyle}>
              이메일
            </label>
            <input
              type="email"
              className={inputStyle}
              placeholder="이메일을 입력하세요."
              id="email"
              style={{ borderColor: `${errors.email ? "#FF2D55" : "#ddd"}` }}
              aria-invalid={
                isSubmitted ? (errors.email ? "true" : "false") : undefined
              }
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
            {errors.email && (
              <small role="alert" className="text-red-500">
                {errors.email.message?.toString()}
              </small>
            )}
          </li>
          <li className={liStyle}>
            <label htmlFor="password" className={labelStyle}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              style={{ borderColor: `${errors.password ? "#FF2D55" : "#ddd"}` }}
              className={inputStyle}
              placeholder="비밀번호를 입력하세요."
              autoComplete="current-password"
              aria-invalid={
                isSubmitted ? (errors.password ? "true" : "false") : undefined
              }
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 6,
                  message: "6자리 이상 비밀번호를 사용하세요.",
                },
              })}
            />
            {errors.password && (
              <small role="alert" className="text-red-500">
                {errors.password.message?.toString()}
              </small>
            )}
          </li>
        </ul>
        <button
          type="submit"
          className="relative mt-auto h-14 w-full cursor-pointer rounded-sm bg-black text-lg font-bold text-white disabled:bg-gray-300"
          disabled={!email || !password || isPending || isSubmitting}
        >
          {isPending || isSubmitting ? <Spinner /> : "로그인"}
        </button>
      </form>
    </div>
  );
}
