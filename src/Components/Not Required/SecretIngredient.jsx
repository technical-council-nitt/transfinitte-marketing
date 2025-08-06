import FadeInSection from "../../Animations/FadeInSection";

const SecretIngredient = () => {
    return (
        <section className='bg-black px-6 md:px-16 py-20 text-gray-400 text-left font-semibold'>
            <FadeInSection>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl mb-12">
                    Our secret ingredient
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="text-2xl md:text-3xl lg:text-4xl mb-16 max-w-5xl">
                    We’re not just a design studio: <span className="text-white">we’re founders, advisors, innovators, and researchers</span> ourselves. Whether you’re pre-seed or series B, our <span className="text-white">expertise</span> and <span className="text-white">streamlined processes</span> will help you <span className="text-white">reach consistency.</span>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="text-white text-7xl sm:text-9xl max-w-5xl">
                    We speak startup.
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="text-white text-2xl md:text-3xl lg:text-4xl mt-24 max-w-5xl">
                    69pixels. can easily integrate into your team and find a common ground with every member.
                </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-16 max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl mb-14">01 CTO</div>
                        <div className="text-white text-md md:text-lg lg:text-xl my-2">
                            “I need to have developed a lot of new features, in the shortest time possible”.
                        </div>
                        <div className="text-md md:text-lg lg:text-xl my-2">
                            We will build a unified system of components and design patterns that would be easy to scale and interact with. And designers, for sure, can compete in speed with the development team :D.
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl mb-14">02 CEO</div>
                        <div className="text-white text-md md:text-lg lg:text-xl my-2">
                            “I need to get started on the work immediately. Board meetings and demos are coming, we need to pitch investors and have our activities updated ASAP”.
                        </div>
                        <div className="text-md md:text-lg lg:text-xl my-2">
                            Focus on your growth, and let us handle the rest. We can start the work on your project right away after the onboarding call. The design team will provide you with all the necessary items to sell the idea of the startup in the most efficient way
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl mb-14">03 Marketing Manager</div>
                        <div className="text-white text-md md:text-lg lg:text-xl my-2">
                            “Still figuring out positioning and branding, niche, and the product’s language”.
                        </div>
                        <div className="text-md md:text-lg lg:text-xl my-2">
                            We’ll easily pick up your visual language and unveil it while creating stunning marketing campaigns. All your ideas will be wrapped up in thoughtful awesome-looking marketing assets and videos.
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-2xl md:text-3xl lg:text-4xl mb-14">04 Investor</div>
                        <div className="text-white text-md md:text-lg lg:text-xl my-2">
                            “Why don’t you hire a person in-house? Who would be the owner of the intellectual property rights?”
                        </div>
                        <div className="text-md md:text-lg lg:text-xl my-2">
                            While working with us, you would be able to save budget and time. Work on the product and side tasks will go on without interruption — this is guaranteed by staff. All the IP rights belong to the startup.
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default SecretIngredient