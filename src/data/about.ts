import { IconType } from "react-icons";
import {
  HiOutlinePencilAlt,
  HiOutlineBadgeCheck,
  HiOutlineUsers,
  HiOutlineLightBulb,
} from "react-icons/hi";

export type ValueItem = {
  title: string;
  description: string;
  icon: IconType;
};

export const values: ValueItem[] = [
  {
    title: "Creativity",
    description:
      "We believe in pushing boundaries and thinking outside the box to deliver unique and innovative solutions.",
    icon: HiOutlinePencilAlt,
  },
  {
    title: "Quality",
    description:
      "Excellence is not an option, it's our standard. We're committed to delivering exceptional work every time.",
    icon: HiOutlineBadgeCheck,
  },
  {
    title: "Collaboration",
    description:
      "Your success is our success. We work closely with our clients to ensure their vision comes to life.",
    icon: HiOutlineUsers,
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of trends and technologies to provide cutting-edge solutions that give you a competitive edge.",
    icon: HiOutlineLightBulb,
  },
];

export type TeamMember = {
  name: string;
  role: string;
  description: string;
};

export const team: TeamMember[] = [
  {
    name: "Connor",
    role: "Co-Founder & Technical Lead",
    description:
      "Focused on crafting reliable, high-quality digital solutions using modern web technologies with a strong emphasis on performance, scalability and clean design.",
  },
  {
    name: "Rick",
    role: "Co-Founder & Managing Director",
    description:
      "Dedicated to guiding projects from concept to completion, ensuring clear communication, strategic direction and seamless delivery for every client.",
  },
];
