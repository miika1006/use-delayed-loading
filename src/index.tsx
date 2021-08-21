import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

/**
 * Delayed loading hook
 * @param value original value if loading or not
 * @param delay delay in milliseconds until loading is set to true
 * @returns [loading:true|false, setLoading value]
 *
 * @example
 * import { useDelayedLoading } from "use-delayed-loading";
 * export const MyComponent: React.FC = () => {
 *   const [loading, setLoading] = useDelayedLoading(true);
 *   const loadDataFromApi = async () => {
 *    try{
 *      setLoading(true);
 *      const result = await fetch(...);
 *      ...
 *    }
 *    finally{
 *      setLoading(true);
 *    }
 *   }
 *   return loading ? "Loading" : "Hello there";
 * }
 */
export const useDelayedLoading = (
  value: boolean = false,
  delay: number = 500
): [ boolean, Dispatch<SetStateAction<boolean>>] => {
  const [loading, setLoading] = useState<boolean>(value);
  const [delayedLoading, setDelayedLoading] = useState<boolean>(value);
  const loadTimeoutId = useRef<null | number>(null);

  useEffect(() => {
    if (loadTimeoutId.current != null) {
      window.clearTimeout(loadTimeoutId.current);
      loadTimeoutId.current = null;
    }
    if (loading === false) setDelayedLoading(false);
    else {
      loadTimeoutId.current = window.setTimeout(
        () => setDelayedLoading(true),
        delay
      );
    }
  }, [delay, loading]);

  return [delayedLoading, setLoading];
};
