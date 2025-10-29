export default function Hero() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl font-mono md:text-4xl font-bold text-[#d6ccc2] leading-tight">
                    Create <span className="text-black">Cleaner</span> Invoices
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold text-[#d6ccc2] leading-tight">
                    At <span className="text-black">Ease</span> 
                </h2>
                <p className="text-gray-600 font-mono mt-4 mb-8 text-lg">
                    Simple, fast, and professional invoicing for freelancers and small businesses.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                        Try
                    </a>
                    
                </div>
            </div>

        </section>


    )
}