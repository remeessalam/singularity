import logoImg from "../assets/images/logo/logo1.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";

export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "We build websites that are visually appealing, functional, secure, and optimized for performance—crafted to meet your business needs with custom web solutions, mobile-responsive design, e-commerce functionality, and full-stack capabilities.",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We create mobile apps that are intuitive, efficient, and scalable—delivering user-friendly, cross-platform applications with user-centered design and full integration support.",
    link: "/services/app-development",
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: require("../assets/images/icons/ui-ux.png"),
    description:
      "We design products that are beautiful and easy to use—focusing on user research, wireframing, UI design, usability testing, and responsive experiences that engage users across devices.",
    link: "/services/ui-ux-design",
  },
  {
    id: 4,
    title: "Game Development",
    icon: require("../assets/images/icons/game-development.png"),
    description:
      "From mobile games to immersive VR experiences, we develop engaging 2D/3D games using engines like Unity and Unreal—supporting cross-platform play, multiplayer, monetization, and continuous updates.",
    link: "/services/game-development",
  },
  {
    id: 5,
    title: "Cloud Computing Services",
    icon: require("../assets/images/icons/cloudcomputing.png"),
    description:
      "Transform your business with flexible, scalable, and secure cloud solutions—covering migration, custom deployments, security, disaster recovery, and infrastructure management.",
    link: "/services/cloud-computing-services",
  },
  {
    id: 6,
    title: "AI Development",
    icon: require("../assets/images/icons/ai.png"),
    description:
      "Harness AI to enhance operations and user experiences—offering machine learning, NLP, predictive analytics, computer vision, and automation tailored to your business needs.",
    link: "/services/ai-development",
  },
];

// details
export const companyDetails = {
  logo: logoImg,
  phone: "+91-9711005437",
  location: "Flat no.86, Nagin Lake Appt, Paschim Vihar -110087",
  email: "abc@xyz.com",
};

export const landingPageNavLinks = [
  {
    id: 1,
    label: "Home",
    link: "banner",
  },
  {
    id: 2,
    label: "Services",
    link: "services",
  },
  {
    id: 3,
    label: "Portfolio",
    link: "portfolio",
  },
  {
    id: 4,
    label: "Reviews",
    link: "reviews",
  },
  {
    id: 5,
    label: "Contact",
    link: "contact",
  },
];

// website pages links
export const websitePagesLinks = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    label: "About Us",
  },
  {
    id: 3,
    link: "/services",
    label: "Services",
  },
  {
    id: 4,
    link: "/blogs",
    label: "Blogs",
  },
  {
    id: 5,
    link: "/contact",
    label: "Contact Us",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Website",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// development workflow
export const webDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your goals, target audience, and project needs. Through collaborative discussions, we solidify the website's functionalities and user journeys.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric blueprint. We meticulously plan the website's architecture, information flow, and visual identity, ensuring an intuitive and engaging experience.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life. We leverage cutting-edge technologies to build a secure and scalable website or web application that seamlessly integrates with your existing systems.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your website to rigorous testing to ensure flawless performance across all devices. Once satisfied, we launch your masterpiece with a smooth transition and ongoing support.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch. We provide ongoing maintenance, security updates, and expert assistance to keep your website thriving in the ever-evolving digital landscape.",
  },
];

export const appDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your app's purpose, target audience, and desired functionalities. Through workshops and discussions, we'll solidify your app's foundation.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "We craft a user-centric experience. Our designers create intuitive interfaces, while our planners map out the development roadmap, ensuring a smooth and efficient build.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled engineers bring your app to life. Using cutting-edge tools and following best practices, we meticulously code every feature, ensuring a robust and functional app.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We rigorously test every aspect of your app across different devices and scenarios. Our goal To identify and fix any glitches before launch, guaranteeing a seamless user experience.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Your app's success is our priority. We offer ongoing support to address any issues and provide updates to keep your app functioning at its best.",
  },
];

// General Development Workflow
export const generalDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Gathering",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We engage with stakeholders to gather comprehensive project requirements and understand their goals through collaborative discussions.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric design and creates a detailed project plan, outlining the architecture, timelines, and deliverables.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life, leveraging modern technologies to build a secure and scalable product that meets all specifications.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your product to rigorous testing to ensure flawless performance across all devices, identifying and resolving any issues before launch.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch, providing ongoing maintenance and support to keep your product thriving in the ever-evolving digital landscape.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    img: require("../assets/images/testimonials/review-p1.png"),
    designation: "Marketing Director, XYZ Corp.",
    review:
      "We couldn’t be happier with the website Singularity Designs built for us. Their team was focused on creating a user-friendly, fast, and visually appealing website. It perfectly aligns with our brand and has helped increase conversions.",
  },
  {
    id: 2,
    name: "Emily R.",
    img: require("../assets/images/testimonials/review-p2.png"),
    designation: "Operations Manager, ShopEasy",
    review:
      "We partnered with Singularity Designs to develop a mobile app for our retail business, and the results have been amazing. The app has enhanced our customer experience and helped boost engagement.",
  },
  {
    id: 3,
    name: "Michael D.",
    img: require("../assets/images/testimonials/review-p3.png"),
    designation: "Product Manager, TechWorld",
    review:
      "The user experience design provided by Singularity Designs has truly elevated our product. They created a design that’s not only beautiful but incredibly intuitive, leading to higher retention and engagement rates.",
  },
  {
    id: 4,
    name: "Daniel T.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Game Developer, Fantasy Labs",
    review:
      "We hired Singularity Designs to help us develop a cross-platform game. They delivered a high-quality product that’s fun and engaging. The game’s performance across all platforms has been excellent.",
  },
  {
    id: 5,
    name: "Chris B.",
    img: require("../assets/images/testimonials/review-p5.png"),
    designation: "IT Director, Global Logistics Co.",
    review:
      "Moving to the cloud seemed complex, but Singularity Designs made the transition smooth. They helped us migrate all of our data and applications securely and efficiently, boosting our team's productivity.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("../assets/images/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: require("../assets/images/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: require("../assets/images/industries/Finance & Banking.webp"),
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: require("../assets/images/industries/Energy.webp"),
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: require("../assets/images/industries/Real Estate.webp"),
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("../assets/images/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: require("../assets/images/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: require("../assets/images/industries/IoT Development.webp"),
    desc: "Connecting devices and systems to enhance automation and operational efficiency",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: require("../assets/images/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("../assets/images/industries/Education.webp"),
    desc: " Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 10,
    title: "Telecom",
    img: require("../assets/images/industries/Telecom.webp"),
    desc: " Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    // link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    // link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    // link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    // link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    // link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
