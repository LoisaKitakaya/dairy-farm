/* eslint-disable react/prop-types */
import { useMemo } from "react";
import ChartOne from "../chart/ChartOne";

const HomeVisualized = ({ records }) => {
  const sofia = useMemo(() => {
    return records.filter((record) => record.ref === "Sofia");
  }, [records]);

  const helene = useMemo(() => {
    return records.filter((record) => record.ref === "Helene");
  }, [records]);

  return <ChartOne sofia={sofia} helene={helene} />;
};

export default HomeVisualized;
