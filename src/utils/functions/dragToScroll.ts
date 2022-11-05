export const dragToScroll = (element) => {
  document.addEventListener("DOMContentLoaded", function () {
    let position = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = (event) => {
      element.style.cursor = "grabbing";
      element.style.userSelect = "none";

      position = {
        left: element.scrollLeft,
        top: element.scrollTop,
        x: event.clientX,
        y: event.clientY,
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = (event) => {
      const distanceX = event.clientX - position.x;
      const distanceY = event.clientY - position.y;

      element.scrollTop = position.top - distanceY;
      element.scrollLeft = position.left - distanceX;
    };

    const mouseUpHandler = () => {
      element.style.cursor = "grab";
      element.style.removeProperty("user-select");

      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    element.addEventListener("mousedown", mouseDownHandler);
  });
};
