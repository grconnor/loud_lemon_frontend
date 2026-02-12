import '@/styles/components/SectionHeading.scss';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div
      className={`section-heading ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionHeading;
