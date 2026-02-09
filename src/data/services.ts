import { IconType } from "react-icons";
import {
  HiOutlinePencilAlt,
  HiOutlineCode,
  HiOutlinePhotograph,
  HiOutlineDeviceMobile,
  HiOutlineCog,
  HiOutlineTrendingUp,
} from "react-icons/hi";

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: IconType;
};

export const services: ServiceItem[] = [
  {
    title: "Web Design",
    description:
      "Clean, engaging designs that capture your brand and leave a lasting impression.",
    features: [
      "Custom UI/UX Design",
      "Responsive Layouts",
      "Wireframes & Prototypes",
      "Design Systems",
    ],
    icon: HiOutlinePencilAlt,
  },
  {
    title: "Web Development",
    description:
      "Robust, scalable websites built with modern technologies for speed, security and performance.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
    ],
    icon: HiOutlineCode,
  },
  {
    title: "Brand Identity",
    description:
      "Cohesive brand identities that communicate your values and set you apart from competitors.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette & Typography",
      "Marketing Materials",
    ],
    icon: HiOutlinePhotograph,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive interfaces designed with your users in mind, ensuring seamless interactions.",
    features: [
      "User Research",
      "Information Architecture",
      "Interactive Prototypes",
      "Usability Testing",
    ],
    icon: HiOutlineDeviceMobile,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support to keep your website secure, updated and running smoothly.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Bug Fixes",
      "Technical Support",
    ],
    icon: HiOutlineCog,
  },
  {
    title: "SEO Optimization",
    description:
      "Strategic optimization to improve your search rankings and drive more organic traffic.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Performance Analysis",
    ],
    icon: HiOutlineTrendingUp,
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals and audience through in-depth consultation.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We develop a tailored strategy and project roadmap aligned with your objectives.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We craft functional, beautiful designs that align with your brand and delight users.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Our team brings designs to life with clean, efficient and scalable code.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "After rigorous testing, we launch your project and ensure a smooth transition.",
  },
  {
    step: "06",
    title: "Support",
    description:
      "We provide ongoing maintenance and support so your digital presence continues to thrive.",
  },
];
