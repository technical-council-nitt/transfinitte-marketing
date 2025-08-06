import FadeInSection from "../../Animations/FadeInSection";

const servicesData = [
    {
        title: "Digital Design",
        items: [
            "UX Audit",
            "Product websites",
            "Design concept",
            "Human experience design",
            "NFT marketplaces",
            "Marketing websites",
            "Mobile applications",
            "Web applications",
            "Corporate websites",
        ],
    },
    {
        title: "Motion Design",
        items: [
            "After Effects animation",
            "Showreel",
            "Lottie animation",
            "Marketing materials",
            "Onboarding animation",
            "Web animation",
        ],
    },
    {
        title: "Branding & Identity",
        items: [
            "Brand concept",
            "Brand identity",
            "Brand accompaniment",
            "Naming",
            "Brand book",
            "Logotype",
            "Brand development",
        ],
    },
];

const Services = () => {
    return (
        <div className="bg-black px-6 md:px-16 py-20 text-gray-400 text-left font-semibold">
            <FadeInSection>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl mb-12">
                    Services
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="text-2xl md:text-3xl lg:text-4xl mb-16 max-w-5xl">
                    We design <span className="text-white">everything</span> from promo
                    campaigns and landing pages to complex system products and BI
                    systems. Our goal is to create digital experiences that{" "}
                    <span className="text-white">people love</span> and help your
                    business reach{" "}
                    <span className="text-white">the next level. Total wrap up.</span>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="p-4 w-fit mb-24 bg-gradient-to-r from-red-500 to-pink-400 text-black font-semibold text-xl rounded">
                    We'll start right after the kick-off.
                </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {servicesData.map((section, idx) => (
                    <FadeInSection>
                        <div key={idx}>
                            <h3 className="text-white text-2xl md:text-3xl mb-4">
                                {section.title}
                            </h3>
                            <ul className="text-gray-400 text-base md:text-lg space-y-2 font-normal">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </FadeInSection>
                ))}
            </div>

            <FadeInSection>
                <div className="mt-12 text-right text-2xl md:text-3xl lg:text-4xl text-gray-400 font-bold">
                    And So On
                </div>

                <div className="w-full flex justify-center my-16">
                    <button
                        className="w-[90%] py-6 text-2xl md:text-3xl font-bold bg-white text-black 
                    hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-lg shadow-lg"
                    >
                        Go To Order →
                    </button>
                </div>
            </FadeInSection>
        </div>
    );
};

export default Services;
