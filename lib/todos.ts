export type Todo = { id: string; title: string; done: boolean };
type TodoInput = { title?: string; done?: boolean };

const seed: Todo[] = [
  { id: "1", title: "อ่านเอกสาร Route Handler", done: true },
  { id: "2", title: "ทำ API กลาง", done: false },
];

// เก็บไว้ใน globalThis → ทุก route ใช้ข้อมูลชุดเดียวกัน
// และไม่หายตอนแก้โค้ด (แต่หายเมื่อรีสตาร์ตเซิร์ฟเวอร์)
const store = globalThis as unknown as { todos?: Todo[]; nextId?: number };
store.todos ??= structuredClone(seed);
store.nextId ??= seed.length + 1; // seed มี id 1, 2 → งานใหม่เริ่มที่ 3
const todos = store.todos;

export function getTodos() {
  return todos;
}

export function getTodo(id: string) {
  return todos.find((t) => t.id === id);
}

export function addTodo(title: string) {
  const todo: Todo = { id: String(store.nextId!++), title, done: false };
  todos.push(todo);
  return todo;
}

export function updateTodo(id: string, data: TodoInput) {
  const todo = getTodo(id);
  if (todo) Object.assign(todo, data);
  return todo;
}

export function deleteTodo(id: string) {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
}

export function resetTodos() {
  todos.splice(0, todos.length, ...structuredClone(seed));
  store.nextId = seed.length + 1;
}


