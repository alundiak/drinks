// https://github.com/GavBaros/react-tinder-cards/blob/master/src/components/Deck.js
import React, { useState } from "react";

import { useSprings } from "@react-spring/web";
// https://www.react-spring.dev/docs/components/use-springs

import { useDrag } from "@use-gesture/react";
// https://use-gesture.netlify.app/docs/

// Full example (already based on react v18 but different versions of other packages):
// https://codesandbox.io/s/github/pmndrs/use-gesture/tree/main/demo/src/sandboxes/cards-stack

import Card from "./Card";
import data from "./data.js";

import "./Deck.css";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
  x: 0,
  y: i * -10, // -4 in example
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });
// const from = _i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 }); // in example x: 0 ADDED

// This is being used down there in the view, it interpolates rotation and scale into a css transform
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

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out

    if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

    api.start(i => {
      if (index !== i) {
        return; // We're only interested in changing spring-data for the current spring
      }

      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = active ? 1.1 : 1; // Active cards lift up a bit

      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      };
    });

    if (!active && gone.size === data.length) {
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600);
    }

  });

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
