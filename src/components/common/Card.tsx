"use client";

import { ReactNode } from 'react';
import { motion } from "motion/react";
import BSCard from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardImg from 'react-bootstrap/CardImg';
import CardTitle from 'react-bootstrap/CardTitle';

import '@/styles/components/Card.scss';

interface CardProps {
  title?: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  hoverable?: boolean;
}

const Card = ({
  title,
  children,
  image,
  imageAlt = '',
  className = '',
  hoverable = false,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      whileHover={hoverable ? { y: -8, scale: 1.02 } : undefined}
    >
      <BSCard
        className={`custom-card ${hoverable ? 'hoverable' : ''} ${className}`}
      >
        {image && (
          <CardImg variant="top" src={image} alt={imageAlt} loading="lazy" />
        )}
        <CardBody>
          {title && <CardTitle>{title}</CardTitle>}
          {children}
        </CardBody>
      </BSCard>
    </motion.div>
  );
};

export default Card;
