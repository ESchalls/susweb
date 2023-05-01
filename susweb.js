//Her indsatte jeg toggle animation fra knapperne//

$(document).ready(function () {
    $(".whatknappe").click(function () {
        $(".whatindhold").slideToggle("slow");
    });
    
    $(".factsknappe").click(function () {
        $(".factsindhold").slideToggle("slow");
    });

    $(".howknappe").click(function () {
        $(".howindhold").slideToggle("slow");
    });

    $(".shouldknappe").click(function () {
        $(".shouldindhold").slideToggle("slow");
    });

    $(".homeknappe").click(function () {
        $(".homeindhold").slideToggle("slow");
    });
});