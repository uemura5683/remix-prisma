// app/routes/todos.tsx
import { Outlet } from "@remix-run/react";

export default function Todos() {
  return (
    <div className="tw-bg-orange-300">
      <div className="tw-flex tw-items-center space-x-6 ">
        <h1 className="tw-text-2xl tw-font-bold">Todoページ</h1>
      </div>

      <div className="tw-mb-4 tw-mt-2 tw-border-2 tw-border-gray-400" />
        <Outlet />
      </div>
  );
}