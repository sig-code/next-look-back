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

Other.getPage = function (page: any) {
  const modal = {
    position: "fixed" as "fixed",
    width: "50%",
    left: "25%",
    top: "25%",
    padding: "20px",
  };

  return (
    <div>
      <h6 className='text-danger text-center'>*** development mode ***</h6>
      {page}
      <div
        style={modal}
        className='text-danger text-center bg-white border border-5'
      >
        <h3>Caution!</h3>
        <h5>これは、開発用のダミーページです。使用しないで下さい。</h5>
      </div>
    </div>
  );
};
