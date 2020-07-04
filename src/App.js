/* 
This is another way to do code splitting, but component level code splitting (not just route centric)..

https://github.com/jamiebuilds/react-loadable
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
} */

import React, { Suspense } from "react";
import "./App.css";

import Page1 from "./PageOne";
//import AsyncComponent from "./AsyncComponent";

const Page2lazy = React.lazy(() => import("./PageTwo.js"));
const Page3lazy = React.lazy(() => import("./PageThree.js"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
    };
  }
  onChangeRoute = (route) => {
    // Witout Code Splitting
    this.setState({ route: route });

    // With Code Splitting

    /*     if (route === "page1") {
      this.setState({ route: route });
    } else if (route === "page2") {
      import("./PageTwo.js").then((Page2) => {
        this.setState({ route: route, component: Page2.default });
      });
    } else if (route === "page3") {
      import("./PageThree.js").then((Page3) => {
        this.setState({ route: route, component: Page3.default });
      });
    } */
  };
  render() {
    switch (this.state.route) {
      case "page1":
        return <Page1 onChangeRoute={this.onChangeRoute} />;
      case "page2":
        /* const AsyncPage2 = AsyncComponent(() => import("./PageTwo"));
        return <AsyncPage2 onChangeRoute={this.onChangeRoute} />; */
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page2lazy onChangeRoute={this.onChangeRoute} />
          </Suspense>
        );
      case "page3":
        /* const AsyncPage3 = AsyncComponent(() => import("./PageThree"));
        return <AsyncPage3 onChangeRoute={this.onChangeRoute} />; */
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page3lazy onChangeRoute={this.onChangeRoute} />
          </Suspense>
        );
      default:
        return "";
    }
  }
}
export default App;
