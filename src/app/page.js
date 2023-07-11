import { prisma } from "@/db"
import {
    auth,
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
} from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TodoItem from "@/components/TodoItem"
import ThemeToggleButton from "@/components/ThemeToggleButton"

function getTodos() {
    return prisma.todoItem.findMany()
}

export default async function Home() {
    const { userId } = auth()
    let todos = null
    if (userId) {
        todos = await getTodos()
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10 gap-2">
            <SignedIn>
                <div className="w-full">
                    <TodoItem todos={todos} />
                    <Button
                        asChild
                        className="min-w-[5rem] float-right m-4 mr-5 hover:bg-green-500"
                    >
                        <Link href="/new">New</Link>
                    </Button>
                </div>
                <div className="mt-auto [&>*]:mx-6 [&>*]:underline text-xl">
                    <Link href="/dashboard">Go to Dahsboard</Link>
                    <SignOutButton />
                    <ThemeToggleButton />
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </main>
    )
}
