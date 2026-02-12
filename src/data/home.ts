import { IconType } from 'react-icons';
import {
  HiOutlineColorSwatch,
  HiOutlineCode,
  HiOutlineSparkles,
} from 'react-icons/hi';

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconType;
};

export const features: FeatureItem[] = [
  {
    title: 'Web Design',
    description:
      'Beautiful, modern websites that captivate your audience and deliver exceptional user experiences.',
    icon: HiOutlineColorSwatch,
  },
  {
    title: 'Web Development',
    description:
      'Robust, scalable web applications built with cutting-edge technologies and best practices.',
    icon: HiOutlineCode,
  },
  {
    title: 'Brand Identity',
    description:
      'Distinctive brand identities that make your business memorable and stand out from competitors.',
    icon: HiOutlineSparkles,
  },
];

export type StatItem = {
  number: string;
  label: string;
};

export const stats: StatItem[] = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '4+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
];
