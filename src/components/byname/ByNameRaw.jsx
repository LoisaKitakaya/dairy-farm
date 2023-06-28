/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../table/Table";
import moment from "moment";
import { Link } from "react-router-dom";
import ByNameVisualized from "./ByNameVisualized";

const ByNameRaw = ({ param }) => {
  if (!import.meta.env.VITE_REACT_APP_RECORDS_BY_NAME) {
    console.warn("endpoint not defined");
  }

  const url = import.meta.env.VITE_REACT_APP_RECORDS_BY_NAME;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${url}${param}/`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  const tableData =
    data &&
    data.data.records.map((col) => {
      const total =
        col.morning_production +
        col.afternoon_production +
        col.evening_production;

      return {
        id: col.id,
        ref: col.name,
        name: <Link to={`/name/${col.name}`}>{col.name}</Link>,
        morning: col.morning_production.toLocaleString(),
        noon: col.afternoon_production.toLocaleString(),
        evening: col.evening_production.toLocaleString(),
        total: total.toLocaleString(),
        unit: col.production_unit,
        date_ref: moment.unix(col.production_date).format("YYYY-MM-D"),
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
      {loading === true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              margin: "12rem 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <i
              className="pi pi-spin pi-cog"
              style={{
                fontSize: "3rem",
              }}
              aria-label="Loading"
            ></i>
            <span style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
              loading
            </span>
          </div>
        </div>
      ) : (
        <>
          {data && (
            <>
              {data.data.records.length > 0 ? (
                <>
                  <h4 style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      🐄
                    </span>{" "}
                    {data.data.message}{" "}
                    <span
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      🐄
                    </span>
                  </h4>
                  <br />
                  <Table data={tableData} />
                  <br />
                  <br />
                  <h4 style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      📊
                    </span>{" "}
                    Summary of daily total milk production{" "}
                    <span
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      📊
                    </span>
                  </h4>
                  <br />
                  <ByNameVisualized records={tableData} />
                </>
              ) : (
                <>
                  <h4 style={{ textAlign: "center" }}>{data.data.message}</h4>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ByNameRaw;
