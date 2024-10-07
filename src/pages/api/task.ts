import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { taskFormat } from "@/lib/form_interface";

export const POST: APIRoute = async ({ request }) => {
  const sesion = await getSession(request);
  if (!sesion) {
    return new Response(JSON.stringify({ error: "Usuario no autorizado" }), {
      status: 401,
    });
  }
  const data = await request.formData();
  const parsed = taskFormat.safeParse(Object.fromEntries(data));
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error }));
  }
  return new Response(JSON.stringify(parsed.data));
};
export const GET: APIRoute = async ({ request }) => {
  const sesion = await getSession(request);
  if (!sesion) {
    return new Response(JSON.stringify({ error: "usuario no autorizado" }), {
      status: 401,
    });
  }
  return new Response(JSON.stringify({ msg: "mensaje de prueba metodo GET" }));
};
export const PUT: APIRoute = async ({ request }) => {
  const sesion = await getSession(request);
  if (!sesion) {
    return new Response(JSON.stringify({ error: "usuario no autorizado" }), {
      status: 401,
    });
  }
  return new Response(JSON.stringify({ msg: "mensaje de prueba metodo PUT" }));
};
export const DELETE: APIRoute = async ({ request }) => {
  const sesion = await getSession(request);
  if (!sesion) {
    return new Response(JSON.stringify({ error: "usuario no autorizado" }), {
      status: 401,
    });
  }
  return new Response(
    JSON.stringify({ msg: "mensjae de prueba metodo DELETE" }),
  );
};
