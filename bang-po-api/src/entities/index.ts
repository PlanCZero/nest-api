/* eslint-disable prettier/prettier */
import { Users } from "./user.entity";
import { Orders } from "./order.entity";
import { Products } from "./product.entity";
import { Carts } from "./cart.entity";
import { Quotations } from "./quotation.entity"
import { Invoices } from "./invoice.entity";
import { Company } from "./company.entity";
import { Applications } from "./application.entity";
import { Operators } from "./operator.entity";
const entities = [Users,
  Orders,
  Products,
  Carts,
  Quotations,
  Invoices,
  Company,
  Applications,
  Operators];

export {
  Users,
  Orders,
  Products,
  Carts,
  Quotations,
  Invoices,
  Company,
  Applications,
  Operators
};
export default entities; 