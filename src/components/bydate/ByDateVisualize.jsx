/* eslint-disable react/prop-types */
import ChartThree from "../chart/ChartThree";
import { useMemo } from "react";

const ByDateVisualized = ({ records }) => {
  const sofia = useMemo(() => {
    return records.filter((record) => record.ref === "Sofia");
  }, [records]);

  const helene = useMemo(() => {
    return records.filter((record) => record.ref === "Helene");
  }, [records]);

  return <ChartThree sofia={sofia} helene={helene} />;
};

export default ByDateVisualized;
