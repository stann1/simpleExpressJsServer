var BaseRepository = require('./base.repository');
var SampleEntity = require('../models/sampleEntity.model');

class SampleEntityRepository extends BaseRepository{
  constructor(db){
    super(db, SampleEntity);
  }

  // TODO: override base and implement own methods
}

module.exports = SampleEntityRepository;