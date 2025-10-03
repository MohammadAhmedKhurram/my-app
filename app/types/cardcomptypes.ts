export interface CardProps {
    image: string; // URL for the image
    title: string; // Title text
    price: string | number; // Price value
    boxColors: string[]; // Array of colors for the boxes
    discountedPrice: number | string;
  }

  export interface wishlistProps {
    image: string; // URL for the image
    title: string; // Title text
    price: string | number; // Price value
    boxColors: string[]; // Array of colors for the boxes
    discountedPrice: number | string;
    stock: number | string;
  }
  
  export interface SecondCardProps {
    image: string; // URL for the image
    title: string; // Title text
    price: string | number; // Price value
    originalPrice: number
  }


    export interface TopCateg {
    image: string; // URL for the image
    name: string; // Title text
    price: string | number; // Price value
    originalPrice: string | number;
  }
