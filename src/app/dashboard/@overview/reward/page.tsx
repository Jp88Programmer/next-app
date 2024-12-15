
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      This is the reward page
      <Link href="/dashboard" 
      className="text-blue-500 underline"
      > Go Back</Link>
    </div>
  );
};

export default page;
