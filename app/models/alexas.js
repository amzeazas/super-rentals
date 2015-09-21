import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  edition: DS.attr(),
  bedrooms: DS.attr(),
  image: DS.attr(),
  writer: DS.attr(),
});
