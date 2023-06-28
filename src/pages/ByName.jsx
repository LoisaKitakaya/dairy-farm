import { useParams } from "react-router-dom";
import ByNameRaw from "../components/byname/ByNameRaw";

const ByName = () => {
  const { name } = useParams();

  return <ByNameRaw param={name} />;
};

export default ByName;
