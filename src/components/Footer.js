import React from "react";

export default function Footer({ name }) {
  return (
    <footer className="container">
      <p>© { name || 'Company'} 2017-2020</p>
    </footer>
  );
}
