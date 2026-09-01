import type { CSSProperties } from 'react';

function Oven() {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#C94720',
    fontSize: '20px',
    fontWeight: 700,
  };

  return <div style={style}>Oven</div>;
}

export default Oven;
