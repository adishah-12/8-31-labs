import type { CSSProperties } from 'react';

type BedroomProps = {
  bedNum: number;
};

function Bedroom({ bedNum }: BedroomProps) {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#34788B',
    fontSize: '22px',
    fontWeight: 700,
  };

  return <section style={style}>Bedroom {bedNum}</section>;
}

export default Bedroom;
