import { useEffect, useState } from "react";

interface throttleType {
  callbackFunc: () => void;
  time?: number;
}

export default function useThrottle({
  callbackFunc,
  time = 1000,
}: throttleType) {
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (!isWaiting) {
      callbackFunc();
      setIsWaiting(true);

      setTimeout(() => {
        setIsWaiting(false);
      }, time);
    }
  }, [callbackFunc, isWaiting, time]);
}
