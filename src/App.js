import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/screens/Login";
import Home from "./components/screens/Home";
import ArticleDetails from "./components/screens/ArticleDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/article-details" component={ArticleDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//cách tạo file app
//b1: import các màn hình, thư viện cần sử dụng để làm router
//b2: tạo ra 1 router
//b3: khai báo đường dẫn vào từng màn hình
