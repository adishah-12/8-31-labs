import type { CSSProperties } from 'react';

type BathProps = {
  size: string;
};

function Bath({ size }: BathProps) {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#718A35',
    fontSize: '22px',
    fontWeight: 700,
  };

  return <section style={style}>{size} Bath</section>;
}

export default Bath;
