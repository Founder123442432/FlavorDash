import { useEffect } from "react";

export default function useTopScroling() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
}
