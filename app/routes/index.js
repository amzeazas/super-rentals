import Ember from 'ember';

var alexa = [{
  id = 1,
  name: "Harley Quinn",
  edition: "2nd Edition",
  bedrooms: 4,
  writer: "Amanda Conner",
  image: "http://media.dcentertainment.com/sites/default/files/GalleryChar_1920x1080_Harley-Quinn-%231_54b9c3a0058de1.57883431.jpg"
}, {
  id = 2,
  name: "Batman",
  edition: "Like 3rd Edition",
  bedrooms: 6,
  writer: "Scott Scott Scott why cant I remember it Scott Snyder",
  image: "http://www.eatgeekplay.com/wp-content/uploads/2013/12/Batman-0-Scott-Snyder-Greg-Capullo-Spoilers.jpg"
}, {
  id = 3,
  name: "Sex Criminals",
  edition: "1st",
  bedrooms: 9,
  writer: "Matt Fraction",
  image: "https://upload.wikimedia.org/wikipedia/en/8/89/Sex_Criminals_Cover.jpg"
}];

export default Ember.Route.extend({
  model() {
    return alexa;
  },
});
