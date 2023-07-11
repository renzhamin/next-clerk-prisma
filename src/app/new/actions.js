"use server"

import { prisma } from "@/db"
import { redirect } from "next/navigation"

export async function addItem(formdata) {
    const body = Object.fromEntries(formdata)
    const { name, content } = body

    const item = await prisma.todoItem.create({
        data: {
            name,
            content,
        },
    })

    console.log("item is :: ", item)

    redirect("/")
}
