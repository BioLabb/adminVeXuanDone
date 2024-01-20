import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

export default function ListAllow({Data=[]}) {
  const [clickedRow, setClickedRow] = useState(null);
    console.log(Data)
  const handleRowClick = (rowId) => {
    setClickedRow(rowId);
  };

  return (
    <TableContainer style={{ maxHeight: 600, overflow: "auto" }}>
      <Table>
        <TableHead>
          <TableCell align="right">Họ Tên</TableCell>
          <TableCell align="right">Mssv</TableCell>
        </TableHead>
        <TableBody>
          { Data &&
          Data.map((row) => {
            return (
              <TableRow
                key={row.mssv}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor:
                    clickedRow === row.mssv ? "lightblue" : "white",
                }}
                onClick={() => handleRowClick(row.mssv)} 
              >
                <TableCell align="right">{row.mssv}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
