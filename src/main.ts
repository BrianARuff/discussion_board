import 'dotenv/config';
import express from 'express';
import middlware from './middleware/middlware';

const app = express();
middlware(app);

app.listen(process.env.PORT, () => {
   console.log('server is running on port ' + process.env.PORT);
});

//# sourceMappingURL=main.js.map
