// https://github.com/GavBaros/react-tinder-cards/blob/master/src/components/Deck.js
import React, { useState } from "react";

import { useSprings } from "@react-spring/web";
// https://www.react-spring.dev/docs/components/use-springs

import { useDrag } from "@use-gesture/react";
// https://use-gesture.netlify.app/docs/

import Card from "./Card";
import data from "./data.js";

import "./Deck.css";

const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());

  const [springs, api] = useSprings(
    data.length,
    i => ({
      ...to(i),
      from: from(i)
    }),
    []
  );

  // According new API from @use-gesture
  // const bind = useDrag(
  //   ({ down, movement: [x], args: [index] }) => api.start((i) => i === index && { x: down ? x : 0 }),
  //   { axis: 'x' }
  // )

  const bind = useDrag(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      api.start(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === data.length)
        setTimeout(() => gone.clear() || api.start(i => to(i)), 600);
    },
    { axis: 'x' }
  );

  return springs.map(({ x, y, rot, scale }, i) => (
    <Card
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={data}
      bind={bind}
      key={i}
    />
  ));
}

export default Deck;
