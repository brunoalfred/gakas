import React from "react";
import  Footer  from "components/Footer";

export default function Home() {
  return (
      <div>
    <main role="main">
      {/* Main jumbotron for a primary marketing message or call to action */}
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p>
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
          </p>
          <p>
            <a className="btn btn-primary btn-lg" href="http://moecive.netlify.app/" role="button">
              Learn more »
            </a>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            </p>
            <p>
              <a className="btn btn-secondary" href="http://moecive.netlify.app/" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
              
            </p>
            <p>
              <a className="btn btn-secondary" href="http://moecive.netlify.app/" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            Welcome to our site || Welcome to our site || Welcome to our site
            </p>
            <p>
              <a className="btn btn-secondary" href="http://moecive.netlify.app/" role="button">
                View details »
              </a>
            </p>
          </div>
        </div>
        <hr />
      </div>{" "}
    </main>
    <Footer name="Bruno" />
    </div>
  );
}
