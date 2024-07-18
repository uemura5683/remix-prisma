import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="tw-font-sans p-4">
      <h1 className="tw-text-3xl">Welcome to Remix</h1>
      <ul className="tw-list-disc tw-mt-4 tw-pl-6 tw-space-y-2">
        <li>
          <a
            className="tw-text-blue-700 tw-underline tw-visited:text-purple-900"
            target="_blank"
            href="/todos"
            rel="noreferrer"
          >
            todos
          </a>
        </li>
      </ul>
    </div>
  );
}
