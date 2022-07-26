import express, {Express, Router} from 'express';

import office from './OfficeRoute';
import employee from './EmployeeRoute';
import productLine from './ProductLineRoute';
import customer from './CustomerRoute'

const routes: Router = express.Router();

routes.use('/office', office);
routes.use('/employee', employee);
routes.use('/productline', productLine);
routes.use('/customer', customer);

export default routes;