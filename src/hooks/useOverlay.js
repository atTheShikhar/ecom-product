import { useSelector, useDispatch } from "react-redux";
import { closeOverlay, openOverlay } from "../redux_slices/overlaySlice";

const useOverlay = () => {
  const activeOverlay = useSelector((state) => state.overlay.activeOverlay);
  const dispatch = useDispatch();

  const toggleOverlay = (overlayName) => {
    if (!overlayName || activeOverlay === overlayName) {
      dispatch(closeOverlay());
    } else {
      dispatch(openOverlay(overlayName));
    }
  };

  return { activeOverlay, toggleOverlay };
};

export default useOverlay;
