import axios from "axios";
import { useEffect, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Table from "../table/Table";
import moment from "moment";
import { Link } from "react-router-dom";

const HomeRaw = () => {
  if (!import.meta.env.VITE_REACT_APP_ALL_RECORDS) {
    console.warn("endpoint not defined");
  }

  const url = import.meta.env.VITE_REACT_APP_ALL_RECORDS;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${url}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  const tableData =
    data &&
    data.data.records.map((col) => {
      return {
        id: col.id,
        name: <Link to={`/name/${col.name}`}>{col.name}</Link>,
        morning: col.morning_production,
        noon: col.afternoon_production,
        evening: col.evening_production,
        unit: col.production_unit,
        date: (
          <Link
            to={`/date/${moment.unix(col.production_date).format("YYYY-MM-D")}`}
          >
            {moment.unix(col.production_date).format("YYYY-MM-D")}
          </Link>
        ),
      };
    });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProgressSpinner />
        </div>
      ) : (
        <>
          {data && (
            <>
              <h4 style={{ textAlign: "center" }}>{data.data.message}</h4>
              <br />
              <Table data={tableData} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default HomeRaw;
