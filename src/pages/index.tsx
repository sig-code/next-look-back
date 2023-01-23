import Head from "next/head";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";

const url = "http://localhost:3000/data.json";
type PropsType = {
  appname: string;
  author: string;
};
const Home = (props: PropsType) => {
  return (
    <main className='container'>
      <h2 className='my-4'>Index page.</h2>
      <div className='alert alert-primary'>
        <p className='h6'>
          <Link href='/other'>Go Other page.</Link>
          This is &quot;{props.appname}&quot;.by {props.author}
        </p>
      </div>
    </main>
  );
};
export default Home;
