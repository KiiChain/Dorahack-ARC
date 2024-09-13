import classNames from "classnames";
import React from "react";
import {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { Button } from "../button";

type Tab = { label: string; id: string };

type Props = {
  selectedTabIndex: number;
  tabs: (Tab|React.ReactNode)[];
  setSelectedTab: (input: number) => void;
};

export const CSSTabs = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();
// @ts-ignore
  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true);
  const isInitialRender = useRef(true);

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true);
    setHoveredTabIndex(null);
  };

  const onEnterTab = (
    e: PointerEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (!e.target || !(e.target instanceof HTMLButtonElement)) return;

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) {
        setIsInitialHoveredElement(false);
      }

      return i;
    });
    setHoveredRect(e.target.getBoundingClientRect());
  };

  const onSelectTab = (i: number) => {
    setSelectedTab(i);
  };

  let hoverStyles: CSSProperties = { opacity: 0 };
  if (navRect && hoveredRect) {
    hoverStyles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${
      hoveredRect.top - navRect.top
    }px,0px)`;
    hoverStyles.width = hoveredRect.width;
    hoverStyles.height = hoveredRect.height;
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 150ms 0ms, opacity 150ms 0ms, width 150ms`;
  }

  let selectStyles: CSSProperties = { opacity: 0 };
  if (navRect && selectedRect) {
    selectStyles.width = selectedRect.width * 0.8;
    selectStyles.transform = `translateX(calc(${
      selectedRect.left - navRect.left
    }px + 10%))`;
    selectStyles.opacity = 1;
    selectStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`;

    isInitialRender.current = false;
  }

  return (
    <nav
      ref={navRef}
      className="flex flex-shrink-0 justify-center items-center relative z-0 py-2 col-span-12 row-span-1 lg:gap-20 md:gap-14 bg-[#1e1e1e] rounded-lg overflow-x-scroll no-scrollbar"
      onPointerLeave={onLeaveTabs}
    >
      {tabs.map((item, i) => {

        if(!React.isValidElement(item)){
          return (
            <Button
              key={i}
              className={classNames(
                "text-md relative rounded-md flex items-center h-8 px-4 z-20 bg-[#1c1c1c] text-sm hover:text-black  cursor-pointer font-bold select-none transition-colors",
          
              )}
              // className=" hover:text-black"
              // variant="outline"
              // @ts-ignore
              ref={(el) =>{ buttonRefs[i] = el}}
              onPointerEnter={(e) => onEnterTab(e, i)}
              onFocus={(e) => onEnterTab(e, i)}
              onClick={() => onSelectTab(i)}
            >
              {(item as Tab).label}
            </Button>
          );
        }
        else{
          return (item )
        }
      })}
      <div
        className="absolute z-10 top-0 left-0 rounded-md bg-[#1e1e1e] transition-[width]"
        style={hoverStyles}
      />
      <div
        className={"absolute z-10 bottom-0 left-0 h-0.5 bg-[#1e1e1e]"}
        style={selectStyles}
      />
    </nav>
  );
};

