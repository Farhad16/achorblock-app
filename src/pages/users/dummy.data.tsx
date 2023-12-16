import TableActions from "./TableActions";

export const columnData = [
  {
    id: "user-info",
    accessor: "user",
    Header: "User Info",
    Cell: ({ value }: any) => {
      return (
        <div className="flex items-center text-left gap-2">
          <img
            src={value.img}
            alt="userImg"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">{value.name}</p>
            <p className="font-medium text-[#667085]">{value.email}</p>
          </div>
        </div>
      );
    },
    width: 350,
    headerClassName: "text-red-500 bg-gray-200",
  },
  {
    id: "about",
    Header: "About",
    accessor: "about",
    Cell: ({ value }: any) => {
      return (
        <div className="flex items-center text-left gap-3">
          <div className="flex flex-col">
            <p className="text-sm font-medium">{value.title}</p>
            <p className="font-medium text-[#667085]">{value.description}</p>
          </div>
        </div>
      );
    },
    disableSortBy: true,
    width: 250,
  },
  {
    id: "status",
    Header: "Status",
    accessor: "status",
    Cell: ({ value }: any) => {
      return <span className="">{value}</span>;
    },
    width: 200,
    disableSortBy: true,
    header: (props: any) => <div>{props.column.render("Header")}</div>,
  },

  {
    id: "action",
    Cell: ({ row }: any) => {
      return (
        <div className="flex items-start justify-end">
          <TableActions row={row} />
        </div>
      );
    },
    width: 100,
    disableSortBy: true,
  },
];

export const dummydata = [
  {
    user: {
      name: "John",
      email: "james@gmail.com",
      img: "",
    },
    about: {
      title: "John Smith",
      description: "Hi there",
    },
    status: "pending",
  },
  {
    user: {
      name: "Alice",
      email: "alice@gmail.com",
      img: "",
    },
    about: {
      title: "Alice Johnson",
      description: "Hello!",
    },
    status: "approved",
  },
  {
    user: {
      name: "Bob",
      email: "bob@gmail.com",
      img: "",
    },
    about: {
      title: "Bob Anderson",
      description: "Greetings!",
    },
    status: "rejected",
  },
  // Add 7 more objects with similar structure...
  {
    user: {
      name: "User1",
      email: "user1@gmail.com",
      img: "",
    },
    about: {
      title: "User One",
      description: "Lorem Ipsum",
    },
    status: "pending",
  },
];
