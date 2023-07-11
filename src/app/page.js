import { prisma } from "@/db"
import {
    auth,
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
} from "@clerk/nextjs"
import Link from "next/link"

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
        <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <SignedIn>
                Id : {userId}
                <Link href="/dashboard" className="text-blue-700">
                    Dashboard
                </Link>
                <Link href="/new" className="text-blue-700">
                    New
                </Link>
                {todos && (
                    <div className="w-full border-2 border-red-700">
                        {todos.map((item) => {
                            return (
                                <div>
                                    {item.name} : {item.content}
                                </div>
                            )
                        })}
                    </div>
                )}
                <SignOutButton className="mt-auto" />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </main>
    )
}
