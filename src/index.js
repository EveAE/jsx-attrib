import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Things</h1>
    <div>
      <img alt="random picture" src={img + "?grayscale"} />
      <img alt="random picture" src={img} />
      <img
        alt="clouds"
        className="cloud-img"
        src="https://thumbs.dreamstime.com/b/over-clouds-1058380.jpg"
      />
      <img
        alt="beach"
        className="beach-img"
        src="https://thumbs.dreamstime.com/b/melbourne-beach-cabins-23988928.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);

//first two images are using js const to store image, second two use className and src
