import FadeInSection from "../../Animations/FadeInSection";

const Appraoch = () => {

    const approachItems = [
        {
            title: "EduDo",
            quote: '“The workflow was very direct and effective. The team understood the requirements, did their own deep research, and came up with a number of non-trivial product solutions”',
            write: "Yury Shlaganov, EduDo, Founder"
        },
        {
            title: "Paynet",
            quote: '“69pixels.have provided a ton of valuable insights into the end users goals and helped us to understand customers and their frustrations better”.',
            write: "Otabek Botirov, Paynet, CMO"
        },
        {
            title: "Skich",
            quote: '“They’re knocking research jobs and challenging tasks out of the park! Product expertise, teamwork, courage and freedom in product suggestions, and desire to drive team progress — these are what makes 69team special”.',
            write: "Vital Ozierski, Skich, CTO"
        },

    ];

    return (
        <section className="bg-black px-6 md:px-16 py-20 text-gray-400 text-left font-semibold">
            <FadeInSection>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl mb-12">
                    Approach
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl">
                            We work <span className="text-white">with our clients as one team</span> in an
                            iterative design and development process.
                        </h2>
                    </div>
                    <div className="flex-1 text-base md:text-lg font-medium">
                        <p>
                            We take ownership of your project. 69pixels. approach every challenge with
                            creativity and commitment to deliver the best possible product, solution, and idea.
                        </p>
                        <p>
                            Check out our product approach from 0 → 1 with some of our cases:
                        </p>
                    </div>
                </div>
            </FadeInSection>


            <div className="flex flex-col gap-16 mt-16 items-center px-4 md:px-12">
                {approachItems.map((item, idx) => (
                    <FadeInSection key={idx}>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img
                                    src={`/Images/section-4.${idx + 1}.png`}
                                    alt={`Approach ${idx + 1}`}
                                    className="w-full max-w-sm rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-around text-center md:text-left">
                                <p className="text-lg md:text-xl font-semibold text-white mb-2">
                                    {item.title}
                                </p>
                                <blockquote className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-3">
                                    {item.quote}
                                </blockquote>
                                <p className="text-gray-400 font-medium">{item.write}</p>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>

        </section>
    );
};

export default Appraoch