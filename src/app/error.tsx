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
        className="position-center top-[60%]"
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
