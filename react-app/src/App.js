import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import Home from './components/Home/home'
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CategoryPage from './components/CategoryPage/category';
import ThreadPage from './components/ThreadPage/threadpage';
import About from './components/About/about';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import FourOhFour from './components/FourOhFour/fourohfour';
import Hot from './components/Hot/hot';
import Best from './components/Best/best';
import CatHot from './components/CatHot/cathot';
import CatBest from './components/CatBest/catbest';
import SearchView from './components/SearchView/searchview';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <Route path='/about' exact={true} >
          <About />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Home></Home>
        </Route>
        <Route path='/new' exact={true} >
          <Home />
        </Route>
        <Route path='/hot' exact={true}>
          <Hot></Hot>
        </Route>
        <Route path='/best' exact={true}>
          <Best></Best>
        </Route>
        <Route path='/search/:query' exact={true}>
          <SearchView />
        </Route>
        <Route path='/categories/:categoryId' exact={true} >
          <CategoryPage />
        </Route>
        <Route path='/categories/:categoryId/hot' exact={true}>
          <CatHot></CatHot>
        </Route>
        <Route path='/categories/:categoryId/best' exact={true}>
          <CatBest></CatBest>
        </Route>
        <Route path='/threads/:threadId' exact={true} >
          <ThreadPage />
        </Route>
        <Route>
            <FourOhFour />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
