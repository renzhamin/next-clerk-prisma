import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs"

export default async function Page() {
    const f = await currentUser()
    console.log(f)
    return (
        <div>
            <UserButton />
            Your name is {f.firstName}
        </div>
    )
}
