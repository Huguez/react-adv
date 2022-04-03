import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface Route {
   to: string;
   name: string;
   path: string;
   Component: JSXComponent | LazyExoticComponent<JSXComponent>
}

const ShoppingPage = lazy( () => import( /* webpackChunkName: "LazyPage1" */'../02-components-patterns/pages/ShoppingPage' ) )
const LazyPage2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2' ) )
const LazyPage3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3' ) )


export const routes: Route[] = [
   { path: '/', to: '', name: 'Shopping Page', Component: ShoppingPage },
   { path: '/lazy2', to: 'lazy2', name: 'Lazy Page 2', Component: LazyPage2 },
   { path: '/lazy3', to: 'lazy3', name: 'Lazy Page 3', Component: LazyPage3 },
]
