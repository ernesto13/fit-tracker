$(document).ready(function(){
// material design site https://mdbootstrap.com/md-bootstrap-cdn/
    let reps = 9;

//     $('.card-body .reps').on('click', function(){


//     if(reps <= 0){
//         reps = 10;
//         }
//         else {
//              reps--;
//         $(this).html('Reps:' + reps);
//         }
// });


// $('.card-body .reps').each(function() {
//     var i = 10;
//     $(this).on('click', function(e) {
//       var $parent = $(this).closest('.reps');
//       var _vote = parseInt($parent.find('#reps').val());
//       console.log(_reps + i++);
//     });
//   });





//   $(document).on('click', '.reps', function(e) {

//     var $parent = $(this).closest('.card-body');
//     var _vote = parseInt($parent.find('#_reps').val()) - 1;
//     $parent.find('#_reps').val(_vote)
//     $parent.html('Reps: ' + _vote)

//     console.log(_vote);
//   });

  $('.reps').each(function() {
    var i = 0;
    $(this).on('click', function(e) {
      var $parent = $(this).closest('.card-body');
      var _vote = parseInt($parent.find('#_reps').val());
      var btn = $("<button class='btn btn-primary'>my btn</button>");
      $parent.append("left: " + _vote + i--);
      console.log(_vote + i--);
 });
  })

});


