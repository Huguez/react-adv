import { ReactElement } from "react";

export interface Props {
   product: Product;
   children?: ReactElement[] | ReactElement;
};

export interface Product {
   id:    string;
   title: string;
   img?:  string;
};

export interface ProductButtons{
   handleButton?: (value:number) => void;
   count?: number;
}

export interface ProductContextProps {
   count: number;
   handleButton: (value:number) => void;
   product: Product
}

export interface ProductCardHOCProps {
   ( { children, product }: Props ): JSX.Element;
   Title:({ title }:{ title? : string | undefined }) => JSX.Element;
   Image:({ img }:{ img? : string | undefined }) => JSX.Element;
   Buttons: (value:ProductButtons) => JSX.Element;
}
