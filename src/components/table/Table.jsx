/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const Table = ({ data }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(
    () => [
      // {
      //   accessorKey: "id",
      //   header: "#ID",
      //   size: 150,
      // },
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "morning",
        header: "Morning",
        size: 150,
      },
      {
        accessorKey: "noon",
        header: "Afternoon",
        size: 150,
      },
      {
        accessorKey: "evening",
        header: "Evening",
        size: 150,
      },
      {
        accessorKey: "total",
        header: "Total",
        size: 150,
      },
      {
        accessorKey: "unit",
        header: "Unit",
        size: 150,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      muiTableProps={{
        sx: {
          boxShadow: "none",
          textAlign: "center",
        },
      }}
    />
  );
};

export default Table;
