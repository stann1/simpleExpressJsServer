class SampleEntity {

  static isValid(model) {
    return typeof model !== 'undefined';
  }

  static mapToViewModel(sqlData){
    const viewModel = new SampleEntity();
    
    Object.keys(sqlData)
        .forEach((prop) => {
          viewModel[prop] = sqlData[prop];
        });

    return viewModel;
  }
}

module.exports = SampleEntity;