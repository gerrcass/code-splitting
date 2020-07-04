import React from "react";
import "./App.css";

import Page1 from "./PageOne";
/* import Page2 from "./PageTwo";
import Page3 from "./PageThree"; */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
      component: null,
    };
  }
  onChangeRoute = (route) => {
    // Witout Code Splitting
    // this.setState({ route: route });

    // With Code Splitting

    if (route === "page1") {
      this.setState({ route: route });
    } else if (route === "page2") {
      import("./PageTwo.js").then((Page2) => {
        this.setState({ route: route, component: Page2.default });
      });
    } else if (route === "page3") {
      import("./PageThree.js").then((Page3) => {
        this.setState({ route: route, component: Page3.default });
      });
    }
  };
  render() {
    switch (this.state.route) {
      case "page1":
        return <Page1 onChangeRoute={this.onChangeRoute} />;
      case "page2":
        return <this.state.component onChangeRoute={this.onChangeRoute} />;
      case "page3":
        return <this.state.component onChangeRoute={this.onChangeRoute} />;
      default:
        return "";
    }
  }
}
export default App;
