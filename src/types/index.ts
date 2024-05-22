export type Product = {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
  precio: number;
  marca: string;
  caracteristicas: string[];
}

export type CartItem = {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
  precio: number;
  marca: string;
  caracteristicas: string[];
  quantity: number;
}

export type OrderItem = {
  id: number;
  line1: string;
  line2: string;
  district: string;
  city: string;
  country: string;
  methodPay: string;
  cardNumber: string;
  nameOnCard: string;
  expiration: string;
  ccv: string;
  shippingMethod: string;
  itemsInOrder: CartItem[]; 
  total: number;
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}