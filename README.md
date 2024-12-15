# Next.js Project

This project demonstrates the use of dynamic routing, parallel routing, and intercepting routes in Next.js using the App Router.

## Table of Contents

- [Dynamic Routing](#dynamic-routing)
- [Parallel Routing](#parallel-routing)
- [Intercepting Routes](#intercepting-routes)
- [How to Run the Project](#how-to-run-the-project)

## Dynamic Routing

Dynamic routing in Next.js allows you to create pages that match dynamic segments in the URL. For example, you can create a file named `[photoId]/page.tsx` inside the `app/photo` directory to match any URL with a dynamic `photoId` parameter.

Example:
```tsx
// filepath: /D:/Jayendra/Next.js/next-app/src/app/photo/[photoId]/page.tsx
import { imageData } from "@/data/imageData";
import React from "react";

const page = ({ params }: { params: { photoId: string } }) => {
  const photoId = Number(params.photoId);
  const ImageComponent = imageData[photoId].Icon;
  const name = imageData[photoId].name;
  const usecase = imageData[photoId].usecase;
  return (
    <div className="flex w-full p-24 border-2 border-blue-400 rounded-lg shadow-blue-400 shadow-md">
      <ImageComponent size={100} color="blue" />
      <div className="flex flex-col gap-2 ml-4">
        <div className="text-base font-bold">{name}</div>
        <div className="text-sm">{usecase}</div>
      </div>
    </div>
  );
};

export default page;
```

## Parallel Routing

Parallel routing allows you to render multiple routes in parallel. This can be useful for layouts that need to display multiple pieces of content simultaneously.

Example:
```tsx
// filepath: /d:/Jayendra/Next.js/next-app/src/app/dashboard/page.tsx
import React from "react";

const page = () => {
  return (
    <div className=" flex w-full p-24 h-10">
      <h1> This the Dashboard page</h1>
    </div>
  );
};

export default page;
```

## Intercepting Routes

Intercepting routes allows you to handle specific routes differently, such as showing a modal or redirecting to another page.

Example:
```tsx
// filepath: /d:/Jayendra/Next.js/next-app/src/app/photo/(.)[photoId]/page.tsx
import PhotoGallery from "@/components/InterceptingRoute/PhotoGallery";
import React from "react";

const page =  ({ params }: { params: { photoId: string } }) => {
  const photoId = params.photoId;
  console.log("🚀 ~ page ~ photoId:", photoId)
  return <PhotoGallery photoId={photoId} />;
};

export default page;
```

## How to Run the Project

1. Clone the repository:
     ```bash
     git clone https://github.com/your-username/next-app.git
     ```

2. Navigate to the project directory:
     ```bash
     cd next-app
     ```

3. Install the dependencies:
     ```bash
     npm install
     ```

4. Run the development server:
     ```bash
     npm run dev
     ```

5. Open your browser and navigate to `http://localhost:3000`.

Enjoy exploring the project!