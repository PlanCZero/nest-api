/* eslint-disable prettier/prettier */
import { Users } from "./user.entity";
import { Orders } from "./order.entity";
import { Products } from "./product.entity";
import { Carts } from "./cart.entity";
import { Quotations } from "./quotation.entity"
import { Invoices } from "./invoice.entity";
import { Company } from "./company.entity";
const entities = [Users, , Orders, Products, Carts, Quotations,Invoices,Company];

export { Users, Orders, Products, Carts, Quotations,Invoices, Company };
export default entities; 