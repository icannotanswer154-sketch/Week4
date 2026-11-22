import type { NextRequest } from "next/server";
import { addTodo, getTodos } from "@/lib/todos";

// GET /api/todos  หรือ  /api/todos?done=true
export async function GET(request: NextRequest) {
  const done = request.nextUrl.searchParams.get("done");
  let todos = getTodos();
  if (done !== null) {
    todos = todos.filter((t) => String(t.done) === done);
  }
  return Response.json(todos);
}
