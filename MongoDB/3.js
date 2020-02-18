var newHobby = ['chi','he','wan'];
db.user.update({name: 'xiaoliu'}, {$addToSet: {hobby: {$each: newHobby}}})