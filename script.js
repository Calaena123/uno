$(document).ready(function() {
    $("button.btn-primary").click(function() {
        var w = parseInt($(".input-1").val());
        var x = parseInt($(".score-1").text());
        $(".score-1").html(w + x);
        $(".input-1").val('');

        var y = parseInt($(".input-2").val());
        var z = parseInt($(".score-2").text());
        $(".score-2").html(y + z);
        $(".input-2").val('');

        var score1 = parseInt($(".score-1").text());
        var score2 = parseInt($(".score-2").text());

        if (score1 > 500) {
            $(".game-box").hide();
            $(".winner-box").show();
            $(".player-2").show();
        }

        if (score2 > 500) {
            $(".game-box").hide();
            $(".winner-box").show();
            $(".player-1").show();
        }
    });
});