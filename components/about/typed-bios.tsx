"use client"

import React from "react";
import Typed from "typed.js";

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Song</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Guangdong, Guangzhou</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>
          I love listening and pure music.
        </li>
        <li>
          I love playing game, LoL is my favorite one.
        </li>
      </ul>
      <p className={"text-center h-[40px] lg:h-[70px]"}>
        "<span ref={el} className="text-neutral-900 dark:text-neutral-200 text-sm" />"
      </p>
    </div>
  );
};

export default TypedBios;
