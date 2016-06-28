export const Productos = new Mongo.Collection('productos');

let Schema = {};
Schema.producto = new SimpleSchema({
  description: {
    type: String,
    max: 100
  },
  creator: {
    type: String,
    max: 100
  }

});

Products.attachSchema(Schema.producto);

Meteor.methods({
  'productos.insert'(producto){
      Productos.insert(producto, function(err){
        if(err)
          throw new Meteor.Error('Error inserting product :(: ' + err);
      });
   },
   'productos.remove'(_id){
     Produtos.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing product maybe because you are not a cool guy: ' + err);
     });
   }
})