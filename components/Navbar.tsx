export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-white shadow-sm">
            <h1 className="text-xl font-semibold text-gray-800">InvoicePro</h1>

            <div className="flex gap-4">
                <a href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Login</a>
                <a href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Sign Up
                </a>
            </div>
        </nav>
    )
}

