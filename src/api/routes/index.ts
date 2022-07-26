import express, {Express, Router} from 'express';

import office from './OfficeRoute';
import employee from './EmployeeRoute';

const routes: Router = express.Router();

routes.use('/office', office);
routes.use('/employee', employee);

export default routes;