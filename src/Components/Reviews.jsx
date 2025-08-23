import FadeInSection from "../Animations/FadeInSection";
const Reviews = () => {
    return (
        <section id="testimonials" className='bg-black px-6 md:px-16 py-20 text-gray-400 text-left font-semibold max-md:p-0 max-md:m-0 '>
            <FadeInSection>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl mb-16 md:mb-24 ml-9 md:ml-10">
                    <span className="text-[rgb(161,163,165)]">We can't say better</span> than our participants.
                </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 max-w-7xl mx-auto ml-9 md:ml-10">
                <FadeInSection>
                    <div>
                        <div className="text-white text-lg md:text-xl lg:text-2xl underline my-1">Voyagers</div>
                        <div className="text-md md:text-lg lg:text-xl my-1">Winner, PS by Bajaj</div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl pt-1">
                        “42 hours of pure energy, creativity, and unforgettable moments. We laughed, we learned, we built things we never imagined, and most importantly, we grew as a team.”
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-lg md:text-xl lg:text-2xl underline my-2">The Overclockers</div>
                        <div className="text-md md:text-lg lg:text-xl my-2">Podium Finish, PS by TSTS</div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl">
                        “TransfiNITTe was an incredible opportunity that stood out for its industry-related problem statements. Winning the hackathon was a truly encouraging milestone.”
                    </div>
                </FadeInSection>
            </div>
        </section >
    )
}

export default Reviews