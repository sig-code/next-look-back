import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Home = (props: any) => {
  const [params, setParams] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const params = router.query?.params || [];
    if (typeof params === "string") return;
    setParams(params);
  }, [router]);

  return (
    <main className='container'>
      <h2 className='my-4'>Index page.</h2>
      <div className='alert alert-primary'>
        <table className='table'>
          <thead>
            <tr>
              <th>No.</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {params.map((value, index) => (
              <tr key={index}>
                <th style={{ width: "100px" }}>{index}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default dynamic(async () => Home, { ssr: false });
