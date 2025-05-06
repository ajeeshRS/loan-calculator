import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, type TableComponents } from "react-virtuoso";
import { Typography } from "@mui/material";
import type { AmortizationScheduleRow } from "../utils/types";

function DataTable({
  rows,
  currency,
}: {
  rows: AmortizationScheduleRow[] | [];
  currency: string;
}) {
  interface Data {
    month: number;
    principal: number;
    interest: number;
    balance: number;
  }

  interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: string;
    width?: number;
  }

  // column data
  const columns: ColumnData[] = [
    {
      width: 50,
      label: "Month",
      dataKey: "month",
    },
    {
      width: 100,
      label: "Principal",
      dataKey: "principal",
    },
    {
      width: 100,
      label: "Interest",
      dataKey: "interest",
    },
    {
      width: 100,
      label: "Remaining Balance",
      dataKey: "balance",
    },
  ];

  //  virtuoso table components
  const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table
        {...props}
        sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
      />
    ),
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
      <TableHead {...props} ref={ref} />
    )),
    TableRow,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
      <TableBody {...props} ref={ref} />
    )),
  };

  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? "right" : "left"}
            style={{ width: column.width }}
            sx={{ backgroundColor: "background.paper" }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index: number, row: Data) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? "right" : "left"}
          >
            {`${row[column.dataKey]} ${
              column.dataKey !== "month" ? currency : ""
            }`}
            {/* {row[column.dataKey]} */}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  return (
    <Paper style={{ height: 400, width: "100%", marginTop: "10px" }}>
      <Typography variant="h5" sx={{ padding: "30px" }}>
        {` Amortization Schedule(${currency})`}
      </Typography>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}

export default DataTable;
