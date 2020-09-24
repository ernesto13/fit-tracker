$(document).ready(function(){

    let reps = 9;

    function decrementReps(){
        if(reps <= 0){

        }
        reps--;
        clickRep.html('Reps: ' + reps);

    }

    let clickRep = $('.reps');
    clickRep.on('click', function(){

        decrementReps();
    })
});