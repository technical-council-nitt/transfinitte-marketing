import FadeInSection from "../Animations/FadeInSection";

const Reach = () => {
    return (
        <section id="reach" className='bg-black px-4 sm:px-8 md:px-12 py-16 text-gray-400 text-left font-semibold'>
            <FadeInSection>
                <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12">
                    Reach
                </div>
            </FadeInSection>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 text-white px-2 sm:px-4 py-8 sm:py-12">
                <FadeInSection>
                    <div className="text-gray-400 px-2 text-lg sm:text-xl md:text-2xl">Participants</div>
                </FadeInSection>
                <FadeInSection>
                    <div className="flex flex-col sm:flex-row sm:justify-around gap-4 sm:gap-6">
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-lg sm:text-xl md:text-2xl p-1">Hackers</div>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-1">550+</div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-lg sm:text-xl md:text-2xl p-1">Teams</div>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-1">100+</div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="text-gray-400 px-2 text-lg sm:text-xl md:text-2xl">Prize Pool</div>
                </FadeInSection>
                <FadeInSection>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-lg sm:text-xl md:text-2xl p-1">Lakhs</div>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-1">₹15+</div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-lg sm:text-xl md:text-2xl p-1">Equivalent</div>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-1">$18K+</div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="text-gray-400 px-2 text-lg sm:text-xl md:text-2xl">Online Presence</div>
                </FadeInSection>
                <FadeInSection>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-lg sm:text-xl md:text-2xl p-1">Instagram Impressions</div>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-1">20K+</div>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-lg sm:text-xl md:text-2xl p-1">LinkedIn Impressions</div>
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-1">10K+</div>
                        </div>
                    </div>

                </FadeInSection>


            </div>

            <section className="px-4 sm:px-8 md:px-12 pt-16">
                <FadeInSection>
                    <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12">
                        Goodies
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="w-fit my-16 mx-auto">
                        <div className="border-4 w-fit">
                            <img src="/Images/TF_Goodies.png" className="" />
                        </div>
                    </div>
                </FadeInSection>
            </section>
        </section>
    )
}

export default Reach