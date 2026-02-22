import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Over } from './pages/Over';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'over', Component: Over },
      { path: 'blog', Component: Blog },
      { path: 'blog/:id', Component: BlogDetail },
      { path: '*', Component: NotFound },
    ],
  },
]);
