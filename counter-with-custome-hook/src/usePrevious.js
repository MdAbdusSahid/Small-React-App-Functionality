import { useRef, useEffect } from "react";

function usePrevious(value) {
  // 1. Create a ref to hold the value.
  // We leave it empty so it defaults to 'undefined' on the first render.
  const ref = useRef();

  // 2. Store the current value in the ref.
  // This runs AFTER the component renders and the return value has been returned.
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // 3. Return the previous value (what is currently inside the ref).
  return ref.current;
}

export default usePrevious;
