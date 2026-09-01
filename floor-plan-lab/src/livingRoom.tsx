import type { CSSProperties } from 'react';

function LivingRoom() {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#C9AD85',
    fontSize: '22px',
    fontWeight: 700,
  };

  return <section style={style}>Living Room</section>;
}

export default LivingRoom;
