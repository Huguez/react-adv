import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface Route {
   to: string;
   name: string;
   path: string;
   Component: JSXComponent | LazyExoticComponent<JSXComponent>
}

const LazyPage1 = lazy( () => import( /* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1' ) )
const LazyPage2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2' ) )
const LazyPage3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3' ) )


export const routes: Route[] = [
   { path: '/lazy1', to: 'lazy1', name: 'Lazy Page 1', Component: LazyPage1 },
   { path: '/lazy2', to: 'lazy2', name: 'Lazy Page 2', Component: LazyPage2 },
   { path: '/lazy3', to: 'lazy3', name: 'Lazy Page 3', Component: LazyPage3 },
]
