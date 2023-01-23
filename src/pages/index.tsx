import { useState } from "react";
import useSWR from "swr";

const options = {
  method: "POST",
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json",
  },
} as RequestInit;
const fetcher = (...args: any[]) =>
  fetch(args[0], options).then((res) => res.json());
type PropsType = {
  appname: string;
  author: string;
};

const Home = (props: PropsType) => {
  const [path, setPath] = useState("/api/hello");
  const { data } = useSWR(path, fetcher);
  const doAction = (e: { target: { value: any } }) => {
    setPath(`/api/hello?id=${e.target.value}`);
  };

  return (
    <main className='container'>
      <h2 className='my-4'>Index page.</h2>
      <select className='form-select' onChange={doAction}>
        <option value='0'>-</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
      <hr />
      <div className='alert alert-primary'>
        {data ? (
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{data.id}</th>
                <td>{data.data.name}</td>
                <td>{data.data.email}</td>
                <td>{data.data.tel}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h6>nodata.</h6>
        )}
      </div>
    </main>
  );
};
export default Home;
