import * as React from 'react';

interface LoadingSkeletonProps {
  width?: string;
  height?: string;
  color?: string;
  highlightColor?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  width = '100%',
  height = '20px',
  color = '#eeeeee',
  highlightColor = '#f2f2f2',
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: color,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5rem 0',
      }}
    >
      <div
        style={{
          width: '60%',
          height,
          backgroundColor: highlightColor,
          borderRadius: '4px',
        }}
      />
      <div
        style={{
          width: '30%',
          height,
          backgroundColor: highlightColor,
          borderRadius: '4px',
        }}
      />
    </div>
  );
};