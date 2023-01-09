import { FunctionComponent, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CSS, { Property } from "csstype";
import styles from "./Hotel.module.css";

type HotelType = {
  hotelIcon?: string;
  hotel?: string;

  /** Style props */
  hotelTextAlign?: Property.TextAlign;
};

const Hotel: FunctionComponent<HotelType> = ({
  hotelIcon,
  hotel,
  hotelTextAlign,
}) => {
  const navigate = useNavigate();
  const hotelStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: hotelTextAlign,
    };
  }, [hotelTextAlign]);

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <button className={styles.hotel} onClick={onHotelClick}>
      <img className={styles.hotelIcon} alt="" src={hotelIcon} />
      <div className={styles.hotel1} style={hotelStyle}>
        {hotel}
      </div>
    </button>
  );
};

export default Hotel;
