"use client";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

import Empty from "@/components/Empty";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { refresh } = useRouter();

  const [errorText, setErrorText] = useState<string>();

  useEffect(() => {
    console.error(error);
    setErrorText(error.message);
  }, [error]);

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <Empty size="md" description={`${errorText} 오류`} />

      <Button
        className="relative top-20"
        type="button"
        onClick={() => {
          startTransition(() => {
            refresh();
            reset();
          });
        }}
      >
        다시 시도
      </Button>
    </div>
  );
}

//reset는 서버를 다시 실행하는 것이 아닌 그냥 새로고침 해보는 것
//즉 서버에서 실행하는 서버 컴포넌트는 다시 실행하는 것은 아님
// 클라이언트만 가능
