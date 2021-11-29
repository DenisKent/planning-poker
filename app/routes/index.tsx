import { Form } from "remix";
import type { ActionFunction } from "remix";
import { redirect } from "remix";
import { v4 as uuidv4 } from "uuid";
import { createRoom } from "~/model";

export let action: ActionFunction = async () => {
  const roomId = uuidv4();
  createRoom(roomId);
  return redirect(`/planning/${roomId}`);
};

export default function IndexRoute() {
  return (
    <section>
      Hello Index Route
      <Form method="post">
        <button>Create new room</button>
      </Form>
    </section>
  );
}
