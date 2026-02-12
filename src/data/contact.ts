import { IconType } from 'react-icons';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

export type ContactMethod = {
  title: string;
  description: string;
  info: string;
  icon: IconType;
  link: string;
};

export const contactMethods: ContactMethod[] = [
  {
    title: 'Email Us',
    description: "Send us an email and we'll respond within 24 hours.",
    info: 'hello@loudlemonstudio.com',
    icon: HiOutlineMail,
    link: 'mailto:hello@loudlemonstudio.com',
  },
  {
    title: 'Call Us',
    description: 'Prefer to talk? Give us a call during business hours.',
    info: '+1 (555) 555-5555',
    icon: HiOutlinePhone,
    link: 'tel:+15551234567',
  },
  {
    title: 'Visit Us',
    description: 'Schedule a meeting at our office.',
    info: '123 Creative Street, Design City, 12345',
    icon: HiOutlineLocationMarker,
    link: '#',
  },
];
