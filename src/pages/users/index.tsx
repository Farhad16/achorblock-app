import { useMemo, useState } from "react";

import DataTable from "./DataTable";
import { columnData, dummydata } from "./dummy.data";
import Pagination from "./Pagination";
import { useGetUsersQuery } from "../../feature/user/api.slice";
import HeaderContent from "./HeaderContent";

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
      <HeaderContent />

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
