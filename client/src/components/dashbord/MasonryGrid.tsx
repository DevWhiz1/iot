import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface MasonryGridProps {
  children: React.ReactNode[];
  columnWidth: number;
  gap: number;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ children, columnWidth, gap }) => {
  const [columns, setColumns] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newColumns = Math.floor(containerWidth / (columnWidth + gap));
        setColumns(Math.max(1, newColumns));
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columnWidth, gap]);

  const columnItems = Array.from({ length: columns }, () => []);
  React.Children.forEach(children, (child, index) => {
    columnItems[index % columns].push(child);
  });

  return (
    <Box ref={containerRef} sx={{ display: 'flex', flexWrap: 'wrap', margin: -gap / 2 }}>
      {columnItems.map((column, columnIndex) => (
        <Box
          key={columnIndex}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: columnWidth,
            margin: gap / 2,
          }}
        >
          {column.map((item, itemIndex) => (
            <Box key={itemIndex} sx={{ marginBottom: gap }}>
              {item}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default MasonryGrid;