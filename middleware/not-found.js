const notFound = (_req, res) => {
  res.status(404).send('Route not found');
};

module.exports = notFound;
