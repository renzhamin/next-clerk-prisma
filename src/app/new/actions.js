"use server"

import { prisma } from "@/db"
import { redirect } from "next/navigation"

export async function addItem(formdata) {
    const body = Object.fromEntries(formdata)
    const { name, content } = body

    await prisma.todoItem.create({
        data: {
            name,
            content,
        },
    })

    redirect("/")
}
