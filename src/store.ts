import { create } from "zustand";
import type { CartItem, OrderItem, Product, User } from "@/types";
import { orderedItems, products, users } from "@/data/db";
import { devtools, persist } from "zustand/middleware";

type StoreState = {
  products: Product[];

  filteredProducts: Product[];
  setFilteredProducts: (word: string) => void;
  orderFilteredProductsByPrice: () => void;
  orderFilteredProductsByBrand: () => void;

  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;

  cart: CartItem[];
  addToCart: (newCartItem: CartItem) => void;
  deleteToCart: (cartItem: CartItem) => void;
  clearCart: () => void;
  changeQuantity: (cartItem: CartItem, quantity: number) => void;

  savedItems: CartItem[];
  addToSavedItems: (newSavedItem: CartItem) => void;
  deleteToSavedItems: (cartItem: CartItem) => void;
  changeQuantitySavedItems: (savedItem: CartItem, quantity: number) => void;

  orderedItems: OrderItem[];
  addToOrderedItems: (newOrderedItem: OrderItem) => void;

  users: User[];
  addToUsers: (newUser: User) => void;

  currentUser: User;
  setCurrentUser: (user: User) => void;
};

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
        users: users,

        addToUsers: (newUser) => {
          set(() => ({
            users: [...get().users, newUser],
          }));
        },

        currentUser: {} as User,

        setCurrentUser: (user) => {
          set(() => ({
            currentUser: user,
          }));
        },

        orderedItems: orderedItems,
        addToOrderedItems: (newOrderedItem) => {
          set(() => ({
            orderedItems: [...get().orderedItems, newOrderedItem],
          }));
        },
        savedItems: [],
        addToSavedItems: (newSavedItem) => {
          set(() => ({
            savedItems: [...get().savedItems, newSavedItem],
          }));
        },
        deleteToSavedItems: (savedItemSelected) => {
          set(() => ({
            savedItems: get().savedItems.filter(
              (savedItem) => savedItem.id !== savedItemSelected.id
            ),
          }));
        },
        products: products,
        filteredProducts: [],
        cart: [],
        setFilteredProducts: (word) => {
          set((state) => ({
            filteredProducts: state.products.filter(
              (product) =>
                product.titulo.toLowerCase().includes(word.toLowerCase()) ||
                product.marca.toLowerCase().includes(word.toLowerCase())
            ),
          }));
        },
        orderFilteredProductsByPrice: () => {
          set((state) => ({
            filteredProducts: [...state.filteredProducts].sort(
              (a, b) => b.precio - a.precio
            ),
          }));
        },
        orderFilteredProductsByBrand: () => {
          set((state) => ({
            filteredProducts: [...state.filteredProducts].sort((a, b) => {
              if (a.marca < b.marca) {
                return -1;
              } else if (a.marca > b.marca) {
                return 1;
              } else {
                return 0;
              }
            }),
          }));
        },

        selectedProduct: {} as Product,

        setSelectedProduct: (product) => {
          set(() => ({
            selectedProduct: product,
          }));
        },

        addToCart: (newCartItem) => {
          let updatedCart: CartItem[] = [];
          const index = get().cart.findIndex(
            (cartItem) => cartItem.id === newCartItem.id
          );
          if (index === -1) {
            updatedCart = [...get().cart, newCartItem];
          } else {
            updatedCart = [...get().cart];
            updatedCart[index].quantity += newCartItem.quantity;
          }

          set(() => ({
            cart: updatedCart,
          }));
        },

        deleteToCart: (cartItemSelected) => {
          set(() => ({
            cart: get().cart.filter(
              (carItem) => carItem.id !== cartItemSelected.id
            ),
          }));
        },

        clearCart: () => {
          set(() => ({
            cart: [],
          }));
        },

        changeQuantity: (cartItemSelected, quantity) => {
          let updatedCart: CartItem[] = [];
          const index = get().cart.findIndex(
            (cartItem) => cartItem.id === cartItemSelected.id
          );
          updatedCart = [...get().cart];
          updatedCart[index].quantity = quantity;
          set(() => ({
            cart: updatedCart,
          }));
        },

        changeQuantitySavedItems: (savedItemSelected, quantity) => {
          let updatedSavedItems: CartItem[] = [];
          const index = get().savedItems.findIndex(
            (savedItem) => savedItem.id === savedItemSelected.id
          );
          updatedSavedItems = [...get().savedItems];
          updatedSavedItems[index].quantity = quantity;
          set(() => ({
            savedItems: updatedSavedItems,
          }));
        },
      }),
      { name: "ulima-store-storage" }
    )
  )
);
