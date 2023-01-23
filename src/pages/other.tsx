import Link from "next/link";

const Other = (props: any) => {
  return (
    <main className='container'>
      <h2 className='my-4'>Other page.</h2>
      <div className='alert alert-info'>
        <p className='h6'>
          <Link href='/'>Go Index page.</Link>
          This is Other page content.
        </p>
      </div>
    </main>
  );
};

export default Other;
