import React from "react";
import { Masonry } from "react-visual-grid";
import "react-visual-grid/dist/react-visual-grid.css";
import "../styles/PhotoGallery.scss"; // Підключаємо файл стилів для додаткового оформлення

const App = () => {
  return (
    <Masonry fillMode="VERTICAL" className="masonry-container">
      <span className={`rc-w-100 rc-h-100 masonry-item`}>
        <img alt="Image 1" src={`https://picsum.photos/id/10/100/100`} />
      </span>
      <span className={`rc-w-100 rc-h-200 masonry-item`}>
        <img alt="Image 2" src={`https://picsum.photos/id/11/100/100`} />
      </span>
      <span className={`rc-w-200 rc-h-300 masonry-item`}>
        <img alt="Image 3" src={`https://picsum.photos/id/13/200/100`} />
      </span>
      <span className={`rc-w-150 rc-h-100 masonry-item`}>
        <img alt="Image 4" src={`https://picsum.photos/id/14/100/100`} />
      </span>
      <span className={`rc-w-150 rc-h-200 masonry-item`}>
        <img alt="Image 5" src={`https://picsum.photos/id/15/200/100`} />
      </span>
      <span className={`rc-w-100 rc-h-100 masonry-item`}>
        <img alt="Image 6" src={`https://picsum.photos/id/16/100/100`} />
      </span>
      <span className={`rc-w-100 rc-h-200 masonry-item`}>
        <img alt="Image 7" src={`https://picsum.photos/id/17/100/100`} />
      </span>
      <span className={`rc-w-200 rc-h-300 masonry-item`}>
        <img alt="Image 8" src={`https://picsum.photos/id/18/200/100`} />
      </span>
      <span className={`rc-w-150 rc-h-100 masonry-item`}>
        <img alt="Image 9" src={`https://picsum.photos/id/19/100/100`} />
      </span>
      <span className={`rc-w-150 rc-h-200 masonry-item`}>
        <img alt="Image 10" src={`https://picsum.photos/id/20/200/100`} />
      </span>
      <span className={`rc-w-100 rc-h-100 masonry-item`}>
        <img alt="Image 11" src={`https://picsum.photos/id/21/100/100`} />
      </span>
      <span className={`rc-w-100 rc-h-200 masonry-item`}>
        <img alt="Image 12" src={`https://picsum.photos/id/22/100/100`} />
      </span>
      <span className={`rc-w-200 rc-h-300 masonry-item`}>
        <img alt="Image 13" src={`https://picsum.photos/id/23/200/100`} />
      </span>
      <span className={`rc-w-150 rc-h-100 masonry-item`}>
        <img alt="Image 14" src={`https://picsum.photos/id/24/100/100`} />
      </span>
      <span className={`rc-w-150 rc-h-200 masonry-item`}>
        <img alt="Image 15" src={`https://picsum.photos/id/25/200/100`} />
      </span>
    </Masonry>
  );
};

export default App;
