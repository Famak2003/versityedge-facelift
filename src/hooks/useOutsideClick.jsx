import { useCallback, useEffect } from "react";

function useOutsideClick(ref, setState) {
  const handleClickOutside = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setState(false);
      }
    },
    [ref, setState],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
}
export default useOutsideClick;
