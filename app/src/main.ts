import 'dotenv/config';
import express from 'express';
import middlware from './middleware/middlware';

const app = express();

middlware(app);

app.listen(process.env.PORT || 5000, () => {
   console.log('\nserver is running on port ' + (process.env.PORT || 5000));
});

//# sourceMappingURL=main.js.map
