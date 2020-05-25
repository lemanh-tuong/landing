import React, { FC } from 'react';

export interface ColumnProps extends PropsComponent {
  cols: number[];
  offsets?: number[];
}

function getCol(type: string, arr: number[]) {
  const breakpoint = ['sm', 'md', 'lg'];
  if (arr.length > 0) {
    const cols = arr.map((col, index) => {
      return `${type === 'column' ? `col-${breakpoint[index]}-` : `offset-${breakpoint[index]}-`}${col}`;
    });
    return cols.join(' ');
  }
}

const Col: FC<ColumnProps> = ({ cols = [], offsets = [], children, className, style }) => {
  return (
    <div className={`${className} ${getCol('column', cols)} ${getCol('offset', offsets)}`} style={style}>
      {children}
    </div>
  );
};

export default Col;
