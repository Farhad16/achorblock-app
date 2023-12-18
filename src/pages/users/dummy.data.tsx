import TableActions from "./TableActions";

export const columnData = [
  {
    id: "user-info",
    accessor: "user",
    Header: "User Info",
    Cell: ({ row }: any) => {
      return (
        <div className="flex items-center text-left gap-2">
          <img
            src={row.original.avatar}
            alt="userImg"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">
              {row.original.first_name + " " + row.original.last_name}
            </p>
            <p className="font-medium text-[#667085]">{row.original.email}</p>
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
      return (
        <div>
          {value === "Churned" ? (
            <span className="px-3 py-1 rounded-full text-[#344054] bg-[#F2F4F7] text-xs">
              {value}
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-[#027A48] bg-[#ECFDF3] text-xs">
              {value}
            </span>
          )}
        </div>
      );
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
    id: 1,
    about: {
      title: "Some dummy Content",
      description: "Brings all your news into one place",
    },
    status: "Random Sticker Label",
  },
  {
    id: 2,
    about: {
      title: "Design software",
      description: "Super lightweight design app",
    },
    status: "Churned",
  },
  {
    id: 3,
    about: {
      title: "Data prediction",
      description: "AI and machine learning data",
    },
    status: "Customer",
  },
  // Add 7 more objects with similar structure...
  {
    id: 4,
    about: {
      title: "Productivity app",
      description: "Time management and productivity",
    },
    status: "Customer",
  },
  {
    id: 5,
    about: {
      title: "Web app integrations",
      description: "Connect web apps seamlessly",
    },
    status: "Churned",
  },
  // Add 7 more objects with similar structure...
  {
    id: 6,
    about: {
      title: "Sales CRM",
      description: "Web-based sales doc management",
    },
    status: "Customer",
  },
  {
    id: 7,
    about: {
      title: "Automation and workflow",
      description: "Time tracking, invoicing and expenses",
    },
    status: "Customer",
  },
  {
    id: 8,
    about: {
      title: "Design software",
      description: "Super lightweight design app",
    },
    status: "Churned",
  },
  {
    id: 9,
    about: {
      title: "Data prediction",
      description: "AI and machine learning data",
    },
    status: "Customer",
  },
  // Add 7 more objects with similar structure...
  {
    id: 10,
    about: {
      title: "Productivity app",
      description: "Time management and productivity",
    },
    status: "Customer",
  },
  {
    id: 11,
    about: {
      title: "Web app integrations",
      description: "Connect web apps seamlessly",
    },
    status: "Churned",
  },
  // Add 7 more objects with similar structure...
  {
    id: 12,
    about: {
      title: "Sales CRM",
      description: "Web-based sales doc management",
    },
    status: "Customer",
  },
];
