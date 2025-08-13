const ProgrammingCoverLetter = () => {
    return (
        <>
            {/* Cover Letter Section */}
            <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-8 mb-8 sm:p-10">
                <h2 className="text-3xl font-bold mb-8 text-green-900 text-center sm:text-left">
                    Cover Letter
                </h2>
                <p className="text-gray-900 leading-relaxed whitespace-pre-line text-base sm:text-lg tracking-wide px-2 sm:px-0 max-w-prose mx-auto">
                    {`Dear Hiring Team,

                    Thank you for considering my application. I am genuinely excited about the opportunity to contribute as an aspiring software developer.
                    
                    Through my studies in programming (Python, PHP, C#, SQL, web technologies) and experience working with software testing teams, I have developed strong problem-solving skills, attention to detail, and the ability to think logically under pressure. I enjoy writing clean, efficient code and am eager to deepen my technical expertise through real-world challenges.
                    
                    What motivates me most is working in an environment that values continuous learning, collaboration, and solving complex problems that make a real impact. I thrive when surrounded by talented professionals who push boundaries and prioritize innovation and quality.
                    
                    While I am early in my software development career, I bring a growth mindset and adaptability that will enable me to contribute meaningfully to your team. I am passionate about learning new technologies, improving my skills, and embracing challenges as opportunities to grow.
                    
                    I look forward to the possibility of discussing how my background, skills, and enthusiasm align with your team’s goals. Thank you again for your time and consideration.
                    
                    Warm regards,
                    Alex Peredelskii`}
                </p>
            </section>

            {/* Why Programming Section */}
            <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-8 mb-8 sm:p-10">
                <h2 className="text-3xl font-bold mb-8 text-green-900 text-center sm:text-left">
                    Why Programming?
                </h2>
                <p className="text-gray-900 leading-relaxed whitespace-pre-line text-base sm:text-lg tracking-wide px-2 sm:px-0 max-w-prose mx-auto">
                    {`I chose programming because it combines creativity and logic in a way that lets me build practical solutions to real-world problems. I enjoy the challenge of breaking down complex issues into manageable parts and creating software that makes people's lives easier.

                    Programming also offers endless opportunities to learn and grow — every project is a chance to discover something new. Being part of a field that constantly evolves motivates me to stay curious and keep improving.`}
                </p>
            </section>
        </>
    );
};

export default ProgrammingCoverLetter;