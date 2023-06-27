import { Button } from "primereact/button";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
      }}
    >
      <h1>Dairy Farm Report</h1>
      <a href="">
        <Button
          style={{ cursor: "pointer" }}
          label="View on GitHub"
          severity="secondary"
          icon="pi pi-github"
          size="small"
          raised
        />
      </a>
    </div>
  );
};

export default Navbar;
