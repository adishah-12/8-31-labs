import type { CSSProperties } from 'react';

function Sink() {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#92571D',
    fontSize: '20px',
    fontWeight: 700,
  };

  return <div style={style}>Sink</div>;
}

export default Sink;
