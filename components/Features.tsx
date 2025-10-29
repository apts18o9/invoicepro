export default function Features() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                <h3 className="text-3xl font-semibold text-gray-900 mb-12">
                    Everything you need to manage your invoices
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                        <div className="text-indigo-600 text-4xl mb-4">🧾</div>
                        <h4 className="text-lg font-semibold mb-2">Quick Invoicing</h4>
                        <p className="text-gray-600">Create professional invoices in minutes with an intuitive editor.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                        <div className="text-indigo-600 text-4xl mb-4">💳</div>
                        <h4 className="text-lg font-semibold mb-2">Payment Tracking</h4>
                        <p className="text-gray-600">Monitor what’s paid, pending, and overdue all in one place.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                        <div className="text-indigo-600 text-4xl mb-4">👥</div>
                        <h4 className="text-lg font-semibold mb-2">Client Management</h4>
                        <p className="text-gray-600">Save client details securely and generate repeat invoices easily.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}