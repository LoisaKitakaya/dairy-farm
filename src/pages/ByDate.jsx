import { useParams } from "react-router-dom";
import ByDateRaw from "../components/bydate/ByDateRaw";

const ByDate = () => {
  const { date } = useParams();

  return <ByDateRaw param={date} />;
};

export default ByDate;
