import type { LoaderFunction } from "remix";
import { Link, useLoaderData } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  const { roomId } = params;
  if (!roomId) throw new Error("Joke not found");
  return data;
};

export default function PlanningRoom() {
  let data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name} Permalink</Link>
    </div>
  );
}
