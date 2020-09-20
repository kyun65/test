$(document).ready(function(){
    alert("文字を出します")
});

$(document).ready(function(){
    $(".hoge").css("background-color","blue")
});

$(document).ready(function(){
    $('.hoge1').html('<div class="fugafuga">htmlを変えたぜ！</div>')
});

$(document).ready(function(){
    $('.switch').on('click',function(){
        $('.hoge2').show();
})
});