import { useMemo, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import DataTable from "./DataTable";
import { columnData, dummydata } from "./dummy.data";
import Pagination from "./Pagination";
import { useGetUsersQuery } from "../../feature/user/api.slice";

function Users() {
  const columns: any = useMemo(() => columnData, []);

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const {
    data: usersData,
    error,
    isLoading,
  } = useGetUsersQuery({
    page,
    itemsPerPage,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: </p>;
  }

  const mainResult = usersData?.data || [];
  const numberOfPages = Math.ceil(usersData?.total / itemsPerPage);

  const combinedArray = mainResult.map((user: any) => {
    const matchingDummyData = dummydata.find((dummy) => dummy.id === user.id);
    return {
      ...user,
      ...matchingDummyData,
    };
  });

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
        <DataTable data={combinedArray} columns={columns} />
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
