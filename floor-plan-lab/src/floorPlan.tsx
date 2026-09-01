import type { CSSProperties } from 'react';
import Bedroom from './bedroom';
import Bath from './bath';
import Kitchen from './kitchen';
import LivingRoom from './livingRoom';

const cell = (gridColumn: string, gridRow: string): CSSProperties => ({
  gridColumn,
  gridRow,
  minWidth: 0,
  minHeight: 0,
});

function FloorPlan() {
  return (
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        width: '100vw',
        height: '100vh',
        minHeight: 600,
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
      }}
    >
      <div style={cell('1 / span 4', '1')}>
        <Bedroom bedNum={1} />
      </div>

      <div style={cell('1 / span 4', '2')}>
        <Bath size="Full" />
      </div>

      <div style={cell('5 / span 4', '1 / span 2')}>
        <LivingRoom />
      </div>

      <div style={cell('9 / span 2', '1 / span 2')}>
        <Kitchen />
      </div>

      <div style={cell('1 / span 4', '3')}>
        <Bedroom bedNum={2} />
      </div>

      <div style={cell('5 / span 2', '3')}>
        <Bath size="Half" />
      </div>

      <div style={cell('7 / span 4', '3')}>
        <Bedroom bedNum={3} />
      </div>
    </main>
  );
}

export default FloorPlan;
