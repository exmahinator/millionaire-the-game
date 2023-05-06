import React, { Suspense } from "react";
import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/game">Game</Link>
        </nav>
      </div>
      <section className="section">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default SharedLayout;
