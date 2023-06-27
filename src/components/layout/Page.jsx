/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ view }) => {
  return (
    <>
      <Navbar />
      {view}
      <Footer />
    </>
  );
};

export default Page;
