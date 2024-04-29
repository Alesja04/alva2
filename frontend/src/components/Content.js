import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";

import Delivery from "../pages/Delivery.js";
import Tooded from "../pages/Tooded.js";
import Klassid from '../pages/Klassid.js';

export class Content extends React.Component {
  render() {
    //console.log(this.props.items);
    return (
      <main className="flex-shrink-0" style={{ flex: 1 }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route
              exact
              path="/tooded/:id"
              element={
                <Tooded items={this.props.items} onAdd={this.props.onAdd} />
              }
            />

            <Route
              exact
              path="/delivery"
              element={<Delivery clearCart={this.props.clearCart} />}
            />

            <Route exact path="/klassid" element={<Klassid />} />
          </Routes>
        </Router>
      </main>
    );
  }
}
export default Content;
