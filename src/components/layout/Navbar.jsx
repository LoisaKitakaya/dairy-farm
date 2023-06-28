import { Button } from "primereact/button";
import { Link } from "react-router-dom";

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
      <Link
        to="/"
        style={{
          color: "black",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span>
          <i
            className="pi pi-directions-alt"
            style={{ fontSize: "1.5rem", color: "var(--cyan-600)" }}
          ></i>
        </span>
        <h3>Dairy Farm Report</h3>
      </Link>
      <a href="https://github.com/LoisaKitakaya/dairy-farm">
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
