import { ProductsController } from "./controller/ProductsController";
import { ShopsController } from "./controller/ShopsController";
import {UserController} from "./controller/UserController";
import { VehiclesController } from "./controller/VehiclesController";

export const Routes = [{
    method: "get",
    route: "/personnel/list",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/personnel/new",
    controller: UserController,
    action: "hire"
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
},
{
    method: 'post',
    route: '/vehicles/new/',
    controller: VehiclesController,
    action: 'addnew'
},
{
    method: 'get',
    route: '/vehicles/list',
    controller: VehiclesController,
    action: 'getAll'
},
{
    method: 'get',
    route: '/vehicles/routes/list',
    controller: VehiclesController,
    action: 'getRoutes'
},
{
    method: 'post',
    route: '/vehicles/routes/new',
    controller: VehiclesController,
    action: 'newRoute'
},
{
    method: 'get',
    route: '/drivers/list',
    controller: UserController,
    action: 'getDrivers'
}

];