import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import {
  header,
  faqs,
  testimonials,
  features,
  pricing,
  clients,
  footer,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bklti-unmerpas</title>
      </Head>
      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />
      <HeroSection
        id="home"
        badge={{
          href: "#",
          icon: "tabler:arrow-right",
          label: "😻 Learn What’s New",
        }}
        title="IT Consultation & Discussion Made Easy"
        description="Connect with tech experts, share your challenges, and explore solutions in networks, information systems, cybersecurity, and more – all in one reliable platform."
        buttons={[
          {
            href: "#",
            label: "Start Free Trail",
            color: "dark",
          },
          {
            href: "#",
            label: "Learn More",
            color: "transparent",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        image={{
          src: "./tablet-mockup.png",
          alt: "Product Screenshot on Tablet",
          className: "w-full h-auto",
        }}
        clientsLabel="Trusted by 100+ Brands"
        clients={clients}
      />
      <FeatureSection
        id="features"
        title="Discover Our Powerful IT Services"
        description="Explore a wide range of trusted IT consultation and discussion services designed to help you solve challenges, gain insights, and stay ahead in the digital world."
        features={features}
      />
      <LargeFeatureSection
        title="Stay Ahead in Your IT Solutions"
        description="Get the right guidance, expert insights, and secure practices to help you solve IT challenges effectively."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup(2).png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <LargeFeatureSection
        reverse={true}
        title="Stay on Top of Your IT Needs"
        description="Connect, consult, and collaborate to find the best solutions for your technology challenges."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup(1).png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <PricingSection
        id="pricing"
        title="Pricing for Everyone"
        description="Choose a consultation plan that works for you. All plans include a 7-day free trial."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      />
      <TestimonialSection
        id="testimonials"
        title="Love from our customers"
        description="Hear directly from those who have experienced the benefits of our IT consultation and discussion services."
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
        button={{
          icon: "tabler:brand-x",
          label: "Share Your Feedback on",
          href: "#",
          color: "white",
        }}
      />
      <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Here are some of the most common questions we receive. If your question isn’t listed here, feel free to contact us anytime."
        buttons={[
          {
            label: "Contact Support",
            href: "#",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />
      <CtaSection
        title="Ready to get started?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        buttons={[{ label: "Start for Free", href: "#", color: "dark" }]}
      />
      <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
