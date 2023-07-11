"use client"

import { deleteItemFromDB } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TodoItem(props) {
    const [todos, setTodos] = useState(props.todos)

    const deleteItem = async (id) => {
        await deleteItemFromDB(id)
        setTodos(todos.filter((item) => item.id !== id))
    }

    if (!todos) {
        return <div>Nothing</div>
    }

    return (
        <div className="w-full border-2 border-slate-400 flex flex-col gap-6 p-2">
            {todos.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="border-2 border-slate-300 p-2"
                    >
                        <span>
                            {item.name} : {item.content}
                        </span>
                        <Button
                            onClick={() => deleteItem(item.id)}
                            className="float-right hover:bg-red-400 min-w-[5rem]"
                        >
                            Delete
                        </Button>
                    </div>
                )
            })}
        </div>
    )
}
