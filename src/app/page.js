import Hero from "@/app/components/Hero/Hero";
import Services from "@/app/components/Services/Services";
import WhyChooseUs from "@/app/components/WhyChooseUs/WhyChooseUs";
import Featured from "@/app/components/Featured/Featured";
import Feature from "@/app/components/Featured/Feature";
import Pricing from "@/app/components/Pricing/Pricing";
import Faq from "@/app/components/Faq/Faq";
import Team from "@/app/components/Team/Team";
import Contact from "@/app/components/Contact/Contact";

export const metadata = {
    title: 'Meal.Report',
    description: 'Generated by create next app',
}
export default function Home() {
    return (
        <main>
            <Hero/>
            <Services/>
            <WhyChooseUs/>
            <Featured/>
            <Feature/>
            <Pricing/>
            <Faq/>
            <Team/>
            <Contact/>
        </main>
    )
}
