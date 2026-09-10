import React from 'react';

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  subheading?: string;
  centered?: boolean;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tagline,
  title,
  subheading,
  centered = true,
  theme = 'light'
}) => {
  return (
    <div
      className="section-header"
      style={{
        textAlign: centered ? 'center' : 'left',
        marginLeft: centered ? 'auto' : '0',
        marginRight: centered ? 'auto' : '0',
      }}
    >
      {tagline && <div className="subheading-tag">{tagline}</div>}
      <h2
        className="heading-lg"
        style={{
          color: theme === 'dark' ? 'var(--color-cream-bg)' : 'var(--color-primary)',
          marginBottom: subheading ? '1rem' : '0'
        }}
      >
        {title}
      </h2>
      {subheading && (
        <p
          className="lead-text"
          style={{
            color: theme === 'dark' ? '#C3D4CB' : 'var(--color-text-muted)'
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
};
