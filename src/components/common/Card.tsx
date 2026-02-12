import { ReactNode } from 'react';
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
  );
};

export default Card;
