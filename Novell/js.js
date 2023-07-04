<script type="text/javascript">
var div = document.getElementById('downloadButton');
div.onclick =  function(){
var timer_num = 10; // Число задержки в секундах
document.getElementById('timer_num').innerHTML =  timer_num;
document.getElementById('timer_num').style.display = 'block';
document.getElementById('downloadButton').style.display = 'none';
var timers = setInterval(function(){
timer_num--;
document.getElementById('timer_num').innerHTML =  timer_num;
if (timer_num == 0){
    document.getElementById('timer_2').style.display = 'block';
    document.getElementById('timer_1').style.display = 'none';
    document.getElementById('linkSong').style.display = 'block';
    clearInterval(timers);
    }
}, 1000)
}
</script>