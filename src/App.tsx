import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';

const Home = lazy(() => import('@src/components/Login'));
const BGComponent = () => <div>TODO</div>; // lazy(() => import('@src/components/BitGo'));

const Loading = () => <div>Loading route...</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/bitgo" element={<BGComponent />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
