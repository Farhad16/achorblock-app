import ArrowDropDownIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropUpIcon from "@mui/icons-material/ArrowUpward";
import React from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import SelectedRows from "./SelectedRow";

interface TableProps {
  data: any[];
  columns: any[];
}

const DataTable: React.FC<TableProps> = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => {
          return [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }: any) => (
                <SelectedRows {...getToggleAllRowsSelectedProps} />
              ),
              Cell: ({ getToggleRowsSelectedProps }: any) => (
                <SelectedRows {...getToggleRowsSelectedProps} />
              ),
              disableSortBy: true,
              width: 20,
            },
            ...columns,
          ];
        });
      }
    );

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table
          {...getTableProps()}
          className="w-full bg-white rounded-xl text-black font-normal text-sm"
        >
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="table-row">
                {headerGroup.headers.map((column: any, colIndex: number) => (
                  <th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps({
                        disabled: colIndex !== 1,
                      })
                    )}
                    className="table-header text-left bg-[#F9FAFB] pl-4 first:w-[30px] text-[#667085] text-xs font-medium"
                  >
                    <div className="flex flex-row items-center gap-1">
                      <span>{column.render("Header")}</span>
                      {colIndex !== headerGroup.headers.length - 1 &&
                        !column.disableSortBy && (
                          // Show sorting icons only if sorting is not disabled for the column
                          <div className="block w-6">
                            {!column.isSorted ? (
                              // Show sorting icons only if the column is not sorted
                              <>
                                <ArrowDropUpIcon
                                  className="opacity-50"
                                  sx={{ fontSize: 16 }}
                                />
                                <ArrowDropDownIcon
                                  className="opacity-50"
                                  sx={{ fontSize: 16 }}
                                />
                              </>
                            ) : (
                              <>
                                <ArrowDropUpIcon
                                  className={
                                    !column.isSortedDesc
                                      ? "opacity-100"
                                      : "opacity-50"
                                  }
                                  sx={{ fontSize: 16 }}
                                />
                                <ArrowDropDownIcon
                                  className={
                                    column.isSortedDesc
                                      ? "opacity-100"
                                      : "opacity-50"
                                  }
                                  sx={{ fontSize: 16 }}
                                />
                              </>
                            )}
                          </div>
                        )}
                    </div>
                    <div>
                      {colIndex === 1 && column.canFilter
                        ? column.render("Filter")
                        : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="table-body">
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="table-row text-left ">
                  {row.cells.map((cell: any) => (
                    <td
                      {...cell.getCellProps()}
                      className="table-cell pl-4 py-3 border-b border-[#eaecf0]"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
