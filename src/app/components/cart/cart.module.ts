import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from "src/app/material/material.module";
import { CartRoutingModule } from "./cart-routing.module";
import { CartComponent } from "./cart.component";
import { CartEffects } from "./store/cart.effects";
import { cartReducer } from "./store/cart.reducer";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects]),
    MaterialModule
  ]
})
export class CartModule { }