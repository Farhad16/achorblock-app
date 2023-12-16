import { useMemo, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import DataTable from "./DataTable";
import { columnData, dummydata } from "./dummy.data";
import Pagination from "./Pagination";

function Users() {
  const columns: any = useMemo(() => columnData, []);
  const data: any = useMemo(() => dummydata, []);

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const handleChange = (e: any) => {
    // setSearchKey(e.target.value);
  };

  const lastItemIndex = page * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const mainResult = data.slice(firstItemIndex, lastItemIndex);
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="bg-white w-full min-h-screen overflow-hidden sm:px-6 py-6 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="text-2xl font-medium">Users</p>
        <div className="flex flex-row items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold rounded-lg text-black border border-[#D0D5DD] px-4 py-3">
            <img src="/img/upload.png" alt="upload" className="w-5 h-5" />
            <span>Import</span>
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold rounded-lg text-white px-4 py-3 bg-[#7F56D9]">
            <AddIcon className="w-5 h-5" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col container-shadow border rounded-lg mt-6">
        <DataTable data={mainResult} columns={columns} />
        {numberOfPages > 0 && (
          <div className="flex justify-center items-center pb-2">
            <Pagination
              page={page}
              setPage={setPage}
              numberOfPages={numberOfPages}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
