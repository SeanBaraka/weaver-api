import { ProductsController } from "./controller/ProductsController";
import { ShopsController } from "./controller/ShopsController";
import {UserController} from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/shops",
    controller: ShopsController,
    action: "getAll"
},
{
    method: 'post',
    route: '/shops/open/:id',
    controller: ShopsController,
    action: "openShop"
},
{
    method: 'post',
    route: '/shops/close/:id',
    controller: ShopsController,
    action: 'closeShop'
},
{
    method: 'post',
    route: '/shops/id/',
    controller: ShopsController,
    action: 'getShop'
},
{
    method: 'get',
    route: '/products',
    controller: ProductsController,
    action: 'getAll'
},
{
    method: 'post',
    route: '/products/new/',
    controller: ProductsController,
    action: 'addProduct'
},
{
    method: 'post',
    route: '/shops/stock/:id',
    controller: ShopsController,
    action: 'getDayStock'
}

];