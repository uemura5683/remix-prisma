import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

// Remixでは各ページファイルでloaderという名前の関数に取得処理を記載し、exportするとことで、自動でデータの取得を行いUIに渡します。
export const loader = async () => {
  // サーバー側で取得するので、prismaを使用し、直接データ取得できる
  const todos = await prisma.todo.findMany();
  // jsonはRemixが用意しているヘルパー関数
  return json(todos);
};

// https://qiita.com/fsdg-takada/items/5a24382bc73c5bd85c2d#todo%E4%B8%80%E8%A6%A7%E3%81%AE%E4%BD%9C%E6%88%90

export default function TodosIndex() {
  // loaderで取得するデータはuseLoaderData関数で取得できる。また、ジェネリクスにtypeof loaderを渡すことで型の補完も行える。
  const todos = useLoaderData<typeof loader>();

  return (
    <div className="tw-bg-yellow-100">
      <div>
        <div>
          <div>todo名</div>
          <div>進捗</div>
        </div>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div className="tw-w-4/12">{todo.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}