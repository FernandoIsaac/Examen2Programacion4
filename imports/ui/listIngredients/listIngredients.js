import "./listIngredients.html";
import { Ingredients } from '../../api/ingredient.js';

Template.listIngredients.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
});
Template.listIngredients.events({
    'click #addIngredientButton'(event){
      // console.log('user id'+ Meteor.userId());
        let ingredient = {
            title: $('#title').val(),
            description: $('#description').val(),
            creator: Meteor.userId()
        };
        $('#title').val(""),
        $('#description').val("")
        Meteor.call('ingredients.insert', ingredient)
    },
    'click .delete'() {
        Meteor.call('ingredients.remove', this._id);
    },

})
Template.listIngredients.helpers({
    ingredients(){
        var ingredients = Ingredients.find({creator: Meteor.userId()});
        return ingredients;
    }
});
