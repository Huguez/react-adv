
export interface PropsTitle {
   className?: string
   title?: string; 
   style?: React.CSSProperties;
}

export interface PropsImage {
   img?:string;
   className?: string;
   style?: React.CSSProperties;
}

export interface PropsButtons{
   handleButton?: (value:number) => void;
   count?: number;
   className?: string;
   style?: React.CSSProperties;
}

export interface ProductInCart extends Product {
   count: number;
}

export interface Props {
   product: Product;
   children?: React.ReactElement[] | React.ReactElement;
   className?: string; 
   style?: React.CSSProperties;
   onChange?: ( args: onChangeArgs ) => void;
   value?:number;
   
};

export interface Product {
   id:    string;
   title: string;
   img?:  string;
};


export interface useProductArgs {
   product: Product;
   onChange?: ( args: onChangeArgs ) => void;
   value?: number
}


export interface onChangeArgs {
   count: number;
   product: Product;
}

export interface ProductContextProps {
   count: number;
   handleButton: (value:number) => void;
   product: Product
}

export interface ProductCardHOCProps {
   ( value: Props ): JSX.Element;
   Title:( value: PropsTitle ) => JSX.Element;
   Image:( value: PropsImage ) => JSX.Element;
   Buttons:( value: PropsButtons ) => JSX.Element;
}
