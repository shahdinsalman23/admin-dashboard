import React, { useState } from "react";
import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, flexRender, } from "@tanstack/react-table";
import { ordersData } from "../data/Data";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const RecentOrdersTable = () => {
    const [sorting, setSorting] = useState([]);

    const columns = [
        {
            accessorKey: "id",
            header: "Order ID",
        },
        {
            accessorKey: "customer",
            header: "Customer",
        },
        {
            accessorKey: "date",
            header: "Date",
        },
        {
            accessorKey: "amount",
            header: "Amount",
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ getValue }) => {
                const status = getValue();
                let colorClass = "";
                if (status === "Delivered") colorClass = "status-delivered";
                if (status === "Pending") colorClass = "status-pending";
                if (status === "Cancelled") colorClass = "status-cancelled";

                return <span className={`status-badge ${colorClass}`}>{status}</span>;
            },
        },
    ];

    const table = useReactTable({
        data: ordersData,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="recent-orders-table">
            <h3>Recent Orders</h3>
            <div className="recent-table-wrapper" style={{ maxHeight: "450px" }}>
                <table className="recent-ordertable">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    const isSorted = header.column.getIsSorted();
                                    return (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {isSorted === "asc" && <BiChevronUp size={16} />}
                                            {isSorted === "desc" && <BiChevronDown size={16} />}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="pagination">
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</button>
                <span>Page {table.getState().pagination.pageIndex + 1} of{" "} {table.getPageCount()}</span>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</button>
            </div>
        </div>
    );
};

export default RecentOrdersTable;
