import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
