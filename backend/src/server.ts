import { App } from './index';
import 'dotenv/config';

const PORT = process.env.PORT || 8001;

new App().start(PORT);