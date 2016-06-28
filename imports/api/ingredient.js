export const Ingredients = new Mongo.Collection('ingredients');

let Schema = {};
Schema.ingredient = new SimpleSchema({
  name:{
    type: String,
    max: 100
  },
  description: {
    type: String,
    max: 100
  },
  creator: {
    type: String,
    max: 100
  }

});

Ingredients.attachSchema(Schema.ingredient);

Meteor.methods({
  'ingredients.insert'(ingredient){
      Ingredients.insert(ingredient, function(err){
        if(err)
          throw new Meteor.Error('Error inserting ingredient Mr. Heisenberg: ' + err);
      });
   },
   'ingredients.remove'(_id){
     Ingredients.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing ingredient from the kitchen: ' + err);
     });
   }
})
