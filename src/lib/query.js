import { dbCliente } from "./clientdb";
export async function getTask(user_id) {
  try {
    const query = "SELECT * FROM tasks WHERE user_id = ?";
    const consulta = await dbCliente.execute({ sql: query, args: [user_id] });
  } catch (error) {
    throw new Error("error de consulta");
  }
}

export async function getTasks(user_id) {
  try {
    const query = "";
  } catch (error) {
    throw new Error("error de consulta");
  }
}

export async function postTask(user_id) {
  try {
    const query = "";
  } catch (error) {
    throw new Error("error de consulta");
  }
}

export async function putTask(user_id) {
  try {
    const query = "";
  } catch (error) {
    throw new Error("error de consulta");
  }
}

export async function deleteTask(user_id) {
  try {
    const query = "";
  } catch (error) {
    throw new Error("error de consulta");
  }
}
