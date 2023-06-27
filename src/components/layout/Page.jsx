/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ view }) => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "84vh", padding: "2rem 1rem" }}>{view}</div>
      <Footer />
    </div>
  );
};

export default Page;
