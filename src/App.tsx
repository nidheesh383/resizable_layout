import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const ResizableGrid = () => {
  const layouts = {
    lg: [
      { i: "window1", x: 0, y: 0, w: 6, h: 10 },
      { i: "window2", x: 6, y: 0, w: 6, h: 10 },
      { i: "window3", x: 0, y: 1, w: 12, h: 10 },
    ],
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 12 }}
      rowHeight={30}
      isResizable={true}
      isDraggable={true}
      measureBeforeMount={false}
      useCSSTransforms={true}
    >
      <div key="window1" className="grid-item">
        Window 1 Content
      </div>
      <div key="window2" className="grid-item">
        Window 2 Content
      </div>
      <div key="window3" className="grid-item">
        Window 3 Content
      </div>
    </ResponsiveGridLayout>
  );
};

export default ResizableGrid;
