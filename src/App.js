import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Transition } from "react-transition-group";
import { useSpring, animated } from "react-spring";
import "./App.css";

const App = () => {
  const boyX = useMotionValue(-100);
  const roadOpacity = useTransform(boyX, [-100, 400], [1, 0]);

  const boySpring = useSpring({
    x: 400,
    from: { x: -100 },
    config: { duration: 2000 }
  });

  return (
    <div className="App">
      <Transition in={true} timeout={0}>
        {(state) => (
          <div className="road" style={{ opacity: roadOpacity }}>
            <animated.div
              className={`boy boy-${state}`}
              style={{ x: boySpring.x, y: 0 }}
              drag="x"
              dragConstraints={{ left: -100, right: 400 }}
              onDrag={(e) => {
                boyX.set(e.target._dragX);
              }}
            >
              <div className="boy-hair" />
              <div className="boy-body">
                <div className="boy-head">
                  <div className="boy-eye boy-eye-left" />
                  <div className="boy-eye boy-eye-right" />
                  <div className="boy-nose" />
                </div>
                <div className="boy-arm boy-arm-left" />
                <div className="boy-arm boy-arm-right" />
                <div className="boy-leg boy-leg-left" />
                <div className="boy-leg boy-leg-right" />
              </div>
            </animated.div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default App;
