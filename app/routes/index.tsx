import { Form } from "remix";
import type { ActionFunction } from "remix";
import { redirect } from "remix";
import { v4 as uuidv4 } from 'uuid';

export let action: ActionFunction = async () => {
  const roomId = uuidv4();
  return redirect(`/room/${roomId}`);
};

export default function IndexRoute() {
  return (<section>Hello Index Route<Form></Form></section>);
}