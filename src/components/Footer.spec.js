// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import Footer from "./Footer";

// const data = {
//   name: "Bruno",
// };

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders with or without a name", () => {
//   act(() => {
//     render(<Footer />, container);
//   });
//   expect(container.textContent).toBe("© Company 2017-2020");

// //   act(() => {
// //     render(<Footer name="Jenny" />, container);
// //   });
// //   expect(container.textContent).toBe("Footer, Jenny!");

// //   act(() => {
// //     render(<Footer name="Margaret" />, container);
// //   });
// //   expect(container.textContent).toBe("Hello, Margaret!");
// });
