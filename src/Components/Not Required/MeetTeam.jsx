import FadeInSection from "../../Animations/FadeInSection";

const images = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    src: `/Images/section-5.1.png`,
    alt: `Image ${i + 1}`
}));

const stats = [
    { label: "Pixels", value: "13" },
    { label: "Years on the market", value: "6" },
    { label: "Products launched", value: "33" },
    { label: "Rounds closed", value: "26" },
];

const MeetTeam = () => {
    return (
        <section className='bg-black px-6 md:px-16 py-20 text-gray-400 text-left font-semibold'>
            <FadeInSection>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl mb-12">
                    Meet the Team
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="w-full flex justify-end ">
                    <div className="grid grid-cols-1 gap-6 w-fit sm:w-[80%] lg:w-[65%]">
                        <div className="text-2xl md:text-3xl lg:text-4xl mb-16 max-w-5xl">
                            We <span className='text-white'>take pride</span> in our <span className='text-white'>diverse team.</span> We all bring <span className='text-white'>unique perspectives, experiences, and personalities</span> to the table, and that's what makes us <span className='text-white'>so special.</span>
                        </div>
                        <div className='flex-1 text-base md:text-lg font-medium'>
                            <p>
                                We are a team of different characters and habits. Some of us are outgoing and love to chat, while others are more reserved and prefer to work quietly on their own.
                            </p>
                            <p>
                                No matter what our personalities are, there is one thing that we all have in common: we are aimed to create beautiful and functional designs that customers of our clients would love.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 my-12 max-w-8xl mx-auto">
                {images.map((image) => (
                    <FadeInSection>
                        <div
                            key={image.id}
                            className="overflow-hidden"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="mx-auto object-cover"
                            />
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    )
}

export default MeetTeam