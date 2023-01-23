import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Data() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/data/0");
  }, [router]);

  return null;
}
