import { createAction, props } from '@ngrx/store';
import { CartItem } from '../cart.model';


export const cartAddItem = createAction(
  'Cart - Add item',
  // props<{item: CartItem}>()
  props<{id:number, title:string, poster_path:string}>()
);

export const cartDeleteItem = createAction(
  'Cart - Delete item',
  props<{itemId: number}>()
);

export const cartSetContent = createAction(
  'Cart - Set cart content',
  props<{status:string ,items: CartItem[]}>()
);

export const cartClear= createAction(
  'Cart - Clear cart',
)