import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import * as sapper from '@sapper/server';

const app = express();
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app.use(
	helmet(),
	helmet.expectCt({
		enforce: true,
	}),
	helmet.referrerPolicy({
		policy: 'strict-origin',
	}),
	compression({ threshold: 0 }),
	express.static('static', { immutable: dev }),
	sapper.middleware()
);

app.listen(PORT, (err) => {
	if (err) console.error('error: ', err);
});
