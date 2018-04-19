class BaseRepository {
  constructor(db, ModelClass) {
    this.db = db;
    this.ModelClass = ModelClass;
    this.collectionName = this._getCollectionName();
  }

  _getCollectionName() {
    let className = this.ModelClass.name.toLowerCase();
    if (className.slice(-1) === 'y') {
      return className.substring(0, className.length - 1) + "ies";
    } else {
      return className + 's';
    }
  }

  // virtual, can be overriden in children classes
  _modelIsValid(model){
    if (!model) {
      throw new Error(`Cannot validate empty ${this.ModelClass.name}!`)
    }
    if(!(model instanceof this.ModelClass)){
      throw new Error(`Model type is invalid. Expected: ${this.ModelClass.name}!`)
    }
    return this.ModelClass.isValid(model);
  }

  getAll() {
    // TODO: implement
  }

  getPage(pageFilter){
    // TODO: implement
  }

  getById(id) {
    if (!id) {
      throw new Error(`Cannot search entity with empty id!`)
    }
    // TODO: implement
  }

  getByIds(ids){
    if(!ids || !ids.length === 0){
      throw new Error('Invalid collection of ids');
    }
    // TODO: implement
  }

  create(model) {
    throw new Error('Method must be implemented in inherited classes');
  }

  edit(model) {
    throw new Error('Method must be implemented in inherited classes');
  }

  remove(id) {
    if (!id) {
      throw new Error(`Cannot remove entity without an id!`)
    }
    // TODO: implement
  }
}

module.exports = BaseRepository;