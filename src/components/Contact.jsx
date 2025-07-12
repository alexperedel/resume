const Contact = () => {
    return (
        <section className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mb-8 sm:p-10">
            <h2 className="text-3xl font-bold mb-8 text-green-900 text-center sm:text-left">
                Contact
            </h2>
            <p className="text-gray-900 leading-relaxed text-base sm:text-lg tracking-wide mb-6 px-2 sm:px-0 max-w-prose mx-auto">
                I’d love to be a part of your team! Please feel free to reach out via phone or email.
            </p>
            <ul className="text-gray-800 space-y-3 text-base sm:text-lg max-w-prose mx-auto px-2 sm:px-0">
                <li>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:0430086457" className="text-green-700 hover:underline">
                        0430 086 457
                    </a>
                </li>
                <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:alex.peredelskii@outlook.com" className="text-green-700 hover:underline">
                        alex.peredelskii@outlook.com
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Contact;