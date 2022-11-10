import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, props }) => {
  return (
    <>
      <Head>
        <meta keywords={`site ${props}`}></meta>
        <title>{props}</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Main" />
        <A href={"/users"} text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
