import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const id = searchParams.get('id');
  const password = searchParams.get('password');

  const todos = await prisma.idpass.findMany();
  const exists = todos.some((todo: any) => todo.id == id && todo.password == password);

  var error = '';
  switch(true) {
    case id === '' && password === '' && exists === false || id === null && password == null && exists === false:
      var error = 'IDとパスワードを入力してください';
      break;
    case id === '' && exists === false:
      var error = 'IDを入力してください';
      break;
    case password === '' && exists === false:
      var error = 'パスワードを入力してください';      
      break;
    case id !== '' && password !== '' && exists === false:
      var error = 'IDとPasswordが一致しません';
      break;
    default: 
      var error = '';
    break;
  }

  // jsonはRemixが用意しているヘルパー関数
  // JSONレスポンスを返す
  return json({ exists, 'error': error });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>{JSON.stringify(data, null, 2)}</>
  );
}