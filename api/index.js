const apiRouter = require("express").Router();

// Test Route
apiRouter.get('/', (req, res) => {
  res.send('Testing Route');
})

const robotsRouter = require('./robots.js');
router.use('/robots', robotsRouter);




