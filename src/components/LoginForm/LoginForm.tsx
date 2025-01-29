"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Input from "@/components/Input";

import { doCredentialLogin } from "@/actions/loginActions";

export default function LoginForm() {
  const { push } = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!response) {
        alert("계정정보를 확인하세요");
      } else {
        push("/");
      }
    } catch (e) {
      alert(e);
    }
  };

  const liStyle = "flex w-full flex-col gap-y-1";
  const labelStyle = "text-body01m text-black";
  const inputStyle = "h-12 border rounded-md px-3";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-12 py-[72px]">
      <form className="flex h-full flex-col" onSubmit={handleSubmit}>
        <h2 className="mb-[112px] text-heading03b">
          은계성당 관리자 페이지에 <br />
          오신 것을 환영합니다.
        </h2>
        <ul className="mb-12 flex flex-col gap-y-6">
          <li className={liStyle}>
            <label htmlFor="email" className={labelStyle}>
              이메일
            </label>
            <Input
              type="email"
              className={inputStyle}
              placeholder="이메일을 입력하세요."
              id="email"
              name="email"
              value={email}
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className={liStyle}>
            <label htmlFor="password" className={labelStyle}>
              비밀번호
            </label>
            <Input
              type="password"
              id="password"
              className={inputStyle}
              placeholder="비밀번호를 입력하세요."
              name="password"
              value={password}
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <button
          type="submit"
          className="mt-auto h-14 w-full rounded-sm bg-black text-lg font-bold text-white disabled:bg-gray-300"
          disabled={!email || !password}
        >
          로그인
        </button>
      </form>
    </div>
  );
}
