import { addItem } from "./actions"

export default function New() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <form
                action={addItem}
                className="flex flex-col justify-center items-center gap-4"
            >
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="border-2 border-black"
                    placeholder="name"
                />
                <input
                    id="content"
                    name="content"
                    type="text"
                    className="border-2 border-black"
                    placeholder="content"
                />

                <button
                    type="submit"
                    className="rounded-full bg-slate-700 hover:bg-slate-500 py-2 px-4 text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
