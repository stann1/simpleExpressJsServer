var EntityRepository = require('./sampleEntity.repository');

const init = (db) => {
  return Promise.resolve({
    entities: new EntityRepository(db)
  });
}

module.exports = { init };