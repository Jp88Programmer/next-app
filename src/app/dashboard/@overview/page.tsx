import Link from "next/link";
import React from "react";

const page = () => {
  //   for (let i = 0; i < 1000000000000; i++) {
  //     console.log(i);
  //   }

  return (
    <div className="w-full flex items-center justify-center gap-2">
      This is overview
      <Link href="/dashboard/reward" className="text-blue-500 underline">
        {" "}
        Reward
      </Link>
    </div>
  );
};

export default page;
