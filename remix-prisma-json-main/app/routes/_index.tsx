import { json } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export const loader = async (
  { request }: LoaderFunctionArgs
) => {
  

  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const id = searchParams.get('id');
  const password = searchParams.get('password');

  console.log(id);
  console.log(password);  

  // サーバー側で取得するので、prismaを使用し、直接データ取得できる
  const todos = await prisma.idpass.findMany();
  // jsonはRemixが用意しているヘルパー関数
  // JSONレスポンスを返す
  return json(todos);
};

export default function Index() {
  const todos = useLoaderData<typeof loader>();
  let data = useLoaderData();


  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

