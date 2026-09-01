import type { CSSProperties } from 'react';
import Oven from './oven';
import Sink from './sink';

function Kitchen() {
  const kitchenStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#F2A942',
  };

  const labelStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '22px',
    fontWeight: 700,
  };

  const applianceStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    width: '100%',
    height: 52,
  };

  return (
    <section style={kitchenStyle}>
      <div style={labelStyle}>Kitchen</div>
      <div style={applianceStyle}>
        <Oven />
        <Sink />
      </div>
    </section>
  );
}

export default Kitchen;
