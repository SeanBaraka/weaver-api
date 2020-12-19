import { AuthController } from "./controller/AuthController";
import { NotificationsController } from "./controller/NotificationsController";
import { PaymentsController } from "./controller/PaymentsController";
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
    route: '/shops/categories',
    controller: ShopsController,
    action: 'getCategories'
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
    route: '/shops/new',
    controller: ShopsController,
    action: 'addShop'
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
},
{
    method: 'post',
    route: '/vehicle/driver',
    controller: VehiclesController,
    action: 'addDriverToVehicle'
},
{
    method: 'post',
    route: '/vehicle/dispatch',
    controller: VehiclesController,
    action: 'addStockToVehicle'
},
{
    method: 'get',
    route: '/vehicles/in-route',
    controller: VehiclesController,
    action: 'vehiclesInRoute'
},
{
    method: 'get',
    route: '/stock/report',
    controller: ShopsController,
    action: 'getReport'
},
{
    method: 'get',
    route: '/vehicles/report',
    controller: VehiclesController,
    action: 'getReport'
},
{
    method: 'get',
    route: '/auth/users',
    controller: AuthController,
    action: 'getAll'
},
{
    method: 'post',
    route: '/auth/login',
    controller: AuthController,
    action: 'loginAttempt'
},
{
    method: 'post',
    route: '/auth/register',
    controller: AuthController,
    action: 'registerUser'
},
{
    method: 'post',
    route: '/notifications/send',
    controller: NotificationsController,
    action: 'sendNotification'
},
{
    method: 'get',
    route: '/payments/generate',
    controller: PaymentsController,
    action: 'generateToken'
},
{
    method: 'post',
    route: '/mpesa/registerurl',
    controller: PaymentsController,
    action: 'registerUrl'
},
{
    method: 'post',
    route: '/payments/status',
    controller: PaymentsController,
    action: 'getTransactionStatus'
},
{
    method: 'post',
    route: '/payments/balance',
    controller: PaymentsController,
    action: 'getAccountBalance'
},
{
    method: 'post',
    route: '/payments/result',
    controller: PaymentsController,
    action: 'getResult'
},
{
    method: 'get',
    route: '/payments/timeout',
    controller: PaymentsController,
    action: 'getTimeout'
},
{
    method: 'get',
    route: '/stock/store/:id',
    controller: ProductsController,
    action: 'getStoreStock'
},
{
    method: 'post',
    route: '/products/inventory/add',
    controller: ProductsController,
    action: 'addInventoryProduct'
}

];