const About = () => {
    return (
        <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-8 mb-8 sm:p-10">
            <h2 className="text-3xl font-bold mb-8 text-green-900 text-center sm:text-left">
                About Me
            </h2>
            <p className="text-gray-900 leading-relaxed whitespace-pre-line text-base sm:text-lg tracking-wide px-2 sm:px-0 max-w-prose mx-auto">
                {`I enjoy working in dynamic, collaborative environments where problem-solving and innovation drive success.

                  With a foundation in programming and practical experience working alongside software teams, I’m passionate about creating efficient, user-friendly solutions.

                  Always eager to learn and grow, I bring energy, focus, and a growth mindset to every challenge, aiming to make a meaningful impact through technology.`}
            </p>
        </section>
    )
}

export default About;