import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const todos = await prisma.idpass.findMany();
  return todos;
};
export default function Index() {
  const todos = useLoaderData<typeof loader>();
  return (
    <pre>{JSON.stringify(todos, null, 2)}</pre>
  );
}