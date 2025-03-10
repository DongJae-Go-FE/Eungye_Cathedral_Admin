import LoginForm from "@/components/LoginForm";

export default async function page() {
  return (
    <div className="position-center w-full max-w-[488px]">
      <LoginForm />
      <p className="body03m mt-4 text-center text-gray-600">
        Copyright © Siheung Eungye Cathedral. All rights reserved.
      </p>
    </div>
  );
}
