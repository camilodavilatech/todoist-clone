import type {APIRoute} from "astro"
import {getSession} from "auth-astro/server"
import {taskFormat} from "@/lib/form_interface"



export const POST:APIRoute = async({request}) => {
    const session = await getSession(request)
    if(!session){
        return new Response(JSON.stringify({error:"Usuario no autorizado"}))
    }
    const data = await request.formData()
    const parsed = taskFormat.safeParse(Object.fromEntries(data))
    if(!parsed.success){
        return new Response(JSON.stringify({error:parsed.error}))
    }
    return new Response(JSON.stringify(parsed.data))
}

export const GET:APIRoute =async() => {
}

export const DELETE:APIRoute =async() => {

}

export const PUT:APIRoute = async() => {

}