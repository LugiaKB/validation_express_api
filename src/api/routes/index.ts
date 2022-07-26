import express, {Express, Router} from 'express';
import office from './OfficeRoute';

const routes: Router = express.Router();

routes.use('/office', office);

export default routes;