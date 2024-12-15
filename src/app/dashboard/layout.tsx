import React from "react";

const layout = ({
  children,
  overview,
  status,
  users,
}: {
  children: React.ReactNode;
  overview: React.ReactNode;
  status: React.ReactNode;
  users: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <div>{children}</div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-1 p-10 items-center justify-center shadow-lg w-full border-2 border-blue-400 rounded-xl">
          {overview}
        </div>
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col gap-1 p-10 items-center justify-center shadow-lg w-full border-2 border-blue-400 rounded-xl">
            {status}
          </div>
          <div className="flex flex-col gap-1 p-10 items-center justify-center shadow-lg  w-full border-2 border-blue-400 rounded-xl">
            {users}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
