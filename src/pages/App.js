import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import CustomSpinner from "../components/spinner/Spinner";
import Header from "../components/header/Header";
import CustomToast from "../components/toast/Toast";
import Footer from "../components/footer/Footer";

const HomeLazy = lazy(() => import("./home/Home"));
const MovieLazy = lazy(() => import("./moviePage/MoviePage"));
const AboutLazy = lazy(() => import("./about/About"));

const App = () => {
  return (
    <Container className="text-center">
      <Header />

      <Switch>
        <Route
          path="/"
          exact
          render={(router) => (
            <Suspense fallback={<CustomSpinner />}>
              <HomeLazy router={router} />
            </Suspense>
          )}
        />
        <Route
          path="/movie/:title&:id"
          render={(router) => (
            <Suspense fallback={<CustomSpinner />}>
              <MovieLazy router={router} />
            </Suspense>
          )}
        />
        <Route
          path="/about-us"
          render={() => (
            <Suspense fallback={<CustomSpinner />}>
              <AboutLazy />
            </Suspense>
          )}
        />
        <Route render={() => <h1>404 ERROR PAGE</h1>} />
      </Switch>

      <CustomToast />

      <Footer />
    </Container>
  );
};

export default App;
