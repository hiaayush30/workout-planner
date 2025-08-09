import Link from "next/link"

function NotFound() {
    return (
        <div>
            404 : Page not found
            <Link href={"/dashboard"} className="p-1 cursor-pointer bg-black text-white rounded-lg">
                Go Back
            </Link>
        </div>
    )
}

export default NotFound
