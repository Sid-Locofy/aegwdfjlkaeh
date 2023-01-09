import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Attractions.module.css";

type AttractionsType = {
  ticket?: string;
  attractions?: string;

  /** Style props */
  backgroundBackgroundColor?: Property.BackgroundColor;
  ticketHeight?: Property.Height;
  ticketWidth?: Property.Width;
  ticketTop?: Property.Top;
  ticketRight?: Property.Right;
  ticketBottom?: Property.Bottom;
  ticketLeft?: Property.Left;
  attractionsIconWidth?: Property.Width;
  backgroundWidth?: Property.Width;
  attractionsDisplay?: Property.Display;
  attractionsWidth?: Property.Width;
};

const Attractions: FunctionComponent<AttractionsType> = ({
  backgroundBackgroundColor,
  ticket,
  ticketHeight,
  ticketWidth,
  ticketTop,
  ticketRight,
  ticketBottom,
  ticketLeft,
  attractions,
  attractionsIconWidth,
  backgroundWidth,
  attractionsDisplay,
  attractionsWidth,
}) => {
  const backgroundStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: backgroundBackgroundColor,
      width: backgroundWidth,
    };
  }, [backgroundBackgroundColor, backgroundWidth]);

  const ticketIconStyle: CSS.Properties = useMemo(() => {
    return {
      height: ticketHeight,
      width: ticketWidth,
      top: ticketTop,
      right: ticketRight,
      bottom: ticketBottom,
      left: ticketLeft,
    };
  }, [
    ticketHeight,
    ticketWidth,
    ticketTop,
    ticketRight,
    ticketBottom,
    ticketLeft,
  ]);

  const attractionsIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: attractionsIconWidth,
    };
  }, [attractionsIconWidth]);

  const attractionsStyle: CSS.Properties = useMemo(() => {
    return {
      display: attractionsDisplay,
      width: attractionsWidth,
    };
  }, [attractionsDisplay, attractionsWidth]);

  return (
    <button className={styles.attractions}>
      <div className={styles.attractionsIcon} style={attractionsIconStyle}>
        <div className={styles.background} style={backgroundStyle} />
        <img
          className={styles.ticketIcon}
          alt=""
          src={ticket}
          style={ticketIconStyle}
        />
      </div>
      <div className={styles.attractions1} style={attractionsStyle}>
        {attractions}
      </div>
    </button>
  );
};

export default Attractions;
