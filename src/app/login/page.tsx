import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default async function page() {
  return (
    <main>
      <div className="position-center w-full max-w-[488px]">
        <h1>
          <Image
            width={128}
            height={71}
            src="/logo.png"
            alt="은계성당 로고 입니다."
            className="m-auto aspect-auto h-auto w-auto"
            priority
          />
        </h1>
        <LoginForm />
        <p className="mt-4 text-center text-body03m text-gray-600">
          Copyright © Siheung Eungye Cathedral. All rights reserved.
        </p>
      </div>
    </main>
  );
}
