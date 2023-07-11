"use server"

import { prisma } from "@/db"

export const deleteItemFromDB = async (id) => {
    await prisma.todoItem.delete({
        where: {
            id,
        },
    })
}
