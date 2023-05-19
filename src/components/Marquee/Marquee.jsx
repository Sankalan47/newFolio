import { Box } from "@chakra-ui/react";
import { motion, useSpring, useTransform } from "framer-motion";
import { FaReact, FaCss3Alt, FaAngular, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { useRafLoop, useWindowSize } from "react-use";
import "./Marquee.css";

const _ = {
  content: (
    <Box display={"flex"} gap={"50px"} justifyContent={"center"}>
      &nbsp;
      <AiFillHtml5 />
      <FaCss3Alt />
      <SiJavascript />
      <SiTypescript />
      <FaReact />
      <SiRedux />
      <FaAngular />
      <FaNodeJs />
      <SiExpress />
      <SiMongodb />
    </Box>
  ),
  speed: 2,
  threshold: 0.014,
  wheelFactor: 1.8,
  dragFactor: 1.2,
};

const MarqueeItem = ({ content, speed }) => {
  const item = useRef(null);
  const rect = useRef({});
  const x = useRef(0);
  const { width, height } = useWindowSize();
  const setX = () => {
    if (!item.current || !rect.current) return;
    const xPercentage = (x.current / rect.current.width) * 100;
    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rect.current.width;
    item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };
  useEffect(() => {
    rect.current = item.current.getBoundingClientRect();
  }, [width, height]);

  const loop = () => {
    x.current -= speed.get();
    setX();
  };
  useRafLoop(loop, true);

  return (
    <div className="item" ref={item}>
      {content}
    </div>
  );
};

const InteractiveMarquee = () => {
  const marquee = useRef(null);
  const slowDown = useRef(false);
  const constraintsRef = useRef(null);

  const x = useRef(0);
  const w = useRef(window.innerWidth).current;
  const speed = useSpring(_.speed, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  });
  const opacity = useTransform(speed, [-w * 0.25, 0, w * 0.25], [1, 0, 1]);
  const skewX = useTransform(speed, [-w * 0.25, 0, w * 0.25], [-25, 0, 25]);

  const onDragStart = () => {
    slowDown.current = true;
    marquee.current.classList.add("drag");
    speed.set(0);
  };

  const onDrag = (e, info) => {
    speed.set(_.dragFactor * -info.delta.x);
  };

  const onDragEnd = (e) => {
    slowDown.current = false;
    marquee.current.classList.remove("drag");
    x.current = _.speed;
  };

  const loop = () => {
    if (slowDown.current || Math.abs(x.current) < _.threshold) return;
    x.current *= 0.66;
    if (x.current < 0) {
      x.current = Math.min(x.current, 0);
    } else {
      x.current = Math.max(x.current, 0);
    }
    speed.set(_.speed + x.current);
  };

  useRafLoop(loop, true);

  return (
    <div className="cont">
      <motion.div className="bg" style={{ opacity }} ref={constraintsRef} />
      <motion.div
        className="marquee"
        ref={marquee}
        style={{ skewX }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        dragElastic={0.000001} // needs to be > 0 ¯\_(ツ)_/¯
      >
        <MarqueeItem content={_.content} speed={speed} />
        <MarqueeItem content={_.content} speed={speed} />
      </motion.div>
    </div>
  );
};

export default InteractiveMarquee;
