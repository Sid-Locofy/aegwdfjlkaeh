import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onAnnotationsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="annotations-parent">
      <button className="annotations" onClick={onAnnotationsClick}>
        <div className="parse-float" />
        <div className="parse-int" />
      </button>
    </div>
  );
};

export default FrameComponent;
