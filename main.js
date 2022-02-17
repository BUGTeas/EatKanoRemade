//以下是程序部分，由于是原生JS，代码显得非常混乱，看不懂就别往下翻了
//程序变量 Program value
var animation_cnt = 0;

//窗口标题设置
document.getElementById("user_title_input").value = user_title;
//进入起始页
alertbg_in();
loadstartui();
//主页选项界面部分
function loadstartui(){
document.getElementById("alert_style").innerHTML = "#startui{animation-name:startui_in;animation-duration:0.3s;}@keyframes startui_in{0%{bottom:-320px}100%{bottom:0px}}#endui{display:none}";
}
//选择游戏模式
if(set_mode=="random"){select_random()}
if(set_mode=="stair"){select_stair()}
if(set_mode=="continuous"){select_continuous()}
//随机模式
function select_random(){
set_mode = 'random';
document.getElementById("select_random").style.background = 'rgb(0,200,195)';
document.getElementById("select_random").style.color = '#fff';
document.getElementById("select_stair").style.color = 'rgb(0,200,195)';
document.getElementById("select_stair").style.background = '#fff';
document.getElementById("select_continuous").style.color = 'rgb(0,200,195)';
document.getElementById("select_continuous").style.background = '#fff';
document.getElementById("stair_option").style.display = "none";
document.getElementById("continuous_option").style.display = "none";
reset();
}
//楼梯模式
function select_stair(){
set_mode = 'stair';
document.getElementById("select_stair").style.background = 'rgb(0,200,195)';
document.getElementById("select_stair").style.color = '#fff';
document.getElementById("select_random").style.color = 'rgb(0,200,195)';
document.getElementById("select_random").style.background = '#fff';
document.getElementById("select_continuous").style.color = 'rgb(0,200,195)';
document.getElementById("select_continuous").style.background = '#fff';
document.getElementById("stair_option").style.display = "inline";
document.getElementById("continuous_option").style.display = "none";
reset();
}
//楼梯设置(左→右/右←左)
if(stair_mode=="l2r"){stair_l2r()}
if(stair_mode=="r2l"){stair_r2l()}
function stair_l2r(){
document.getElementById("stair_l2r").style.background = 'rgb(0,200,195)';
document.getElementById("stair_l2r").style.color = '#fff';
document.getElementById("stair_r2l").style.color = 'rgb(0,200,195)';
document.getElementById("stair_r2l").style.background = '#fff';
stair_mode = "l2r";
}
function stair_r2l(){
document.getElementById("stair_r2l").style.background = 'rgb(0,200,195)';
document.getElementById("stair_r2l").style.color = '#fff';
document.getElementById("stair_l2r").style.color = 'rgb(0,200,195)';
document.getElementById("stair_l2r").style.background = '#fff';
stair_mode = "r2l";
}
//全纵连模式
//设置默认纵连位置(单位:列)
document.getElementById("user_continuous_input").value = continuous_list;
function select_continuous(){
set_mode = 'continuous';
list_name = document.getElementById("user_continuous_input").value;
document.getElementById("select_stair").style.color = 'rgb(0,200,195)';
document.getElementById("select_stair").style.background = '#fff';
document.getElementById("select_random").style.color = 'rgb(0,200,195)';
document.getElementById("select_random").style.background = '#fff';
document.getElementById("select_continuous").style.background = 'rgb(0,200,195)';
document.getElementById("select_continuous").style.color = '#fff';
document.getElementById("stair_option").style.display = "none";
document.getElementById("continuous_option").style.display = "inline";
reset();
}
//开始游戏
function start(){
document.getElementById("alert_style").innerHTML = "#startui{animation-name:startui_out;animation-duration:0.3s;}@keyframes startui_out{0%{bottom:0px}100%{bottom:-320px}}#endui{display:none}";
setTimeout("document.getElementById('alert_style').innerHTML = '#endui{display:none}#startui{display:none}'",300);
alertbg_out();
}
//设置默认倒计时(单位:秒)
document.getElementById("user_timeout_input").value = user_timeout;
//倒计时设置(启用/禁用)
if(timeout_mode=="disabled"){disable_timeout()}
if(timeout_mode=="enabled"){enable_timeout()}
function disable_timeout(){
document.getElementById("disable_timeout").style.background = 'rgb(0,200,195)';
document.getElementById("disable_timeout").style.color = '#fff';
document.getElementById("enable_timeout").style.color = 'rgb(0,200,195)';
document.getElementById("enable_timeout").style.background = '#fff';
document.getElementById("timeout_option_button").style.background = '#fff';
document.getElementById("timeout_option_button").style.color = 'rgb(0,200,195)';
document.getElementById("user_timeout_option").style.display = "none";
user_timeout = "disabled";
reset();
}
function enable_timeout(){
document.getElementById("enable_timeout").style.background = 'rgb(0,200,195)';
document.getElementById("enable_timeout").style.color = '#fff';
document.getElementById("disable_timeout").style.color = 'rgb(0,200,195)';
document.getElementById("disable_timeout").style.background = '#fff';
document.getElementById("timeout_option_button").style.background = 'rgb(0,200,195)';
document.getElementById("timeout_option_button").style.color = '#fff';
document.getElementById("user_timeout_option").style.display = "inline";
user_timeout = document.getElementById("user_timeout_input").value
reset();
}
//设置默认机会次数(单位:次)
document.getElementById("user_chance_input").value = user_chance;
//机会设置(启用/禁用/无限)
if(chance_mode=="disabled"){disable_chance()}
if(chance_mode=="enabled"){enable_chance()}
function disable_chance(){
document.getElementById("disable_chance").style.background = 'rgb(0,200,195)';
document.getElementById("disable_chance").style.color = '#fff';
document.getElementById("enable_chance").style.color = 'rgb(0,200,195)';
document.getElementById("enable_chance").style.background = '#fff';
document.getElementById("enable_chance_infinite").style.color = 'rgb(0,200,195)';
document.getElementById("enable_chance_infinite").style.background = '#fff';
document.getElementById("chance_option_button").style.background = '#fff';
document.getElementById("chance_option_button").style.color = 'rgb(0,200,195)';
document.getElementById("user_chance_option").style.display = "none";
user_chance = "disabled";
reset();
}
function enable_chance(){
document.getElementById("enable_chance").style.background = 'rgb(0,200,195)';
document.getElementById("enable_chance").style.color = '#fff';
document.getElementById("disable_chance").style.color = 'rgb(0,200,195)';
document.getElementById("disable_chance").style.background = '#fff';
document.getElementById("enable_chance_infinite").style.color = 'rgb(0,200,195)';
document.getElementById("enable_chance_infinite").style.background = '#fff';
document.getElementById("chance_option_button").style.background = 'rgb(0,200,195)';
document.getElementById("chance_option_button").style.color = '#fff';
document.getElementById("user_chance_option").style.display = "inline";
user_chance = document.getElementById("user_chance_input").value;
reset();
}
function enable_chance_infinite(){
document.getElementById("enable_chance").style.background = '#fff';
document.getElementById("enable_chance").style.color = 'rgb(0,200,195)';
document.getElementById("disable_chance").style.color = 'rgb(0,200,195)';
document.getElementById("disable_chance").style.background = '#fff';
document.getElementById("enable_chance_infinite").style.color = '#fff';
document.getElementById("enable_chance_infinite").style.background = 'rgb(0,200,195)';
document.getElementById("chance_option_button").style.background = 'rgb(0,200,195)';
document.getElementById("chance_option_button").style.color = '#fff';
document.getElementById("user_chance_option").style.display = "none";
user_chance = "infinite";
reset();
}
//窗口背景变暗动画
function alertbg_in(){
document.getElementById("alertbg_style").innerHTML = "#alertbg{animation-name:alertbg_in;animation-duration:0.3s;}@keyframes alertbg_in{0%{opacity:0}100%{opacity:1}}";
}
function alertbg_out(){
document.getElementById("alertbg_style").innerHTML = "#alertbg{animation-name:alertbg_out;animation-duration:0.3s;}@keyframes alertbg_out{0%{opacity:1}100%{opacity:0}}";
setTimeout("document.getElementById('alertbg_style').innerHTML = '#alertbg{display:none}'",300);
}
//主题设置界面(区域一/二)
to_part2_theme_option();
to_part1_theme_option();
function to_part1_theme_option(){
document.getElementById("to_part1_background_option").style.background = 'rgb(0,200,195)';
document.getElementById("to_part1_background_option").style.color = '#fff';
document.getElementById("to_part2_background_option").style.color = 'rgb(0,200,195)';
document.getElementById("to_part2_background_option").style.background = '#fff';
document.getElementById("to_part1_click_style_option").style.background = 'rgb(0,200,195)';
document.getElementById("to_part1_click_style_option").style.color = '#fff';
document.getElementById("to_part2_click_style_option").style.color = 'rgb(0,200,195)';
document.getElementById("to_part2_click_style_option").style.background = '#fff';
document.getElementById("to_part1_sound_option").style.background = 'rgb(0,200,195)';
document.getElementById("to_part1_sound_option").style.color = '#fff';
document.getElementById("to_part2_sound_option").style.color = 'rgb(0,200,195)';
document.getElementById("to_part2_sound_option").style.background = '#fff';
theme_part_name = "part1";
document.getElementById("background_input").value = part1_background;
document.getElementById("border_input").value = part1_border;
document.getElementById("click_background_input").value = part1_click_background;
if(part1_before_click_inner_mode=="default"){click_inner_before_default()};
if(part1_before_click_inner_mode=="image"){click_inner_before_image()};
if(part1_before_click_inner_mode=="html"){click_inner_before_html()};
if(part1_after_click_inner_mode=="default"){click_inner_after_default()};
if(part1_after_click_inner_mode=="image"){click_inner_after_image()};
if(part1_after_click_inner_mode=="html"){click_inner_after_html()};
if(part1_click_sound_mode=="disabled"){click_sound_disable()};
if(part1_click_sound_mode=="default"){click_sound_default()};
if(part1_click_sound_mode=="custom"){click_sound_custom()};
}
function to_part2_theme_option(){
document.getElementById("to_part2_background_option").style.background = 'rgb(0,200,195)';
document.getElementById("to_part2_background_option").style.color = '#fff';
document.getElementById("to_part1_background_option").style.color = 'rgb(0,200,195)';
document.getElementById("to_part1_background_option").style.background = '#fff';
document.getElementById("to_part2_click_style_option").style.background = 'rgb(0,200,195)';
document.getElementById("to_part2_click_style_option").style.color = '#fff';
document.getElementById("to_part1_click_style_option").style.color = 'rgb(0,200,195)';
document.getElementById("to_part1_click_style_option").style.background = '#fff';
document.getElementById("to_part2_sound_option").style.background = 'rgb(0,200,195)';
document.getElementById("to_part2_sound_option").style.color = '#fff';
document.getElementById("to_part1_sound_option").style.color = 'rgb(0,200,195)';
document.getElementById("to_part1_sound_option").style.background = '#fff';
theme_part_name = "part2";
document.getElementById("background_input").value = part2_background;
document.getElementById("border_input").value = part2_border;
document.getElementById("click_background_input").value = part2_click_background;
if(part2_before_click_inner_mode=="default"){click_inner_before_default()};
if(part2_before_click_inner_mode=="image"){click_inner_before_image()};
if(part2_before_click_inner_mode=="html"){click_inner_before_html()};
if(part2_after_click_inner_mode=="default"){click_inner_after_default()};
if(part2_after_click_inner_mode=="image"){click_inner_after_image()};
if(part2_after_click_inner_mode=="html"){click_inner_after_html()};
if(part2_click_sound_mode=="disabled"){click_sound_disable()};
if(part2_click_sound_mode=="default"){click_sound_default()};
if(part2_click_sound_mode=="custom"){click_sound_custom()};
}
//点击前按键内容设置(默认/自定义图片/HTML)
function click_inner_before_default(){
document.getElementById("click_inner_before_default").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_before_default").style.color = '#fff';
document.getElementById("click_inner_before_image").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_image").style.background = '#fff';
document.getElementById("click_inner_before_html").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_html").style.background = '#fff';
document.getElementById("click_inner_before_default_option").style.display = "inline";
document.getElementById("click_inner_before_image_option").innerHTML = "";
document.getElementById("click_inner_before_html_option").style.display = "none";
if(theme_part_name=="part1"){
part1_before_click_inner_mode = "default";
if(part1_click_inner_before_default=="1"){
click_inner_before_default_1();
}
if(part1_click_inner_before_default=="2"){
click_inner_before_default_2();
}
}
if(theme_part_name=="part2"){
part2_before_click_inner_mode = "default";
if(part2_click_inner_before_default=="1"){
click_inner_before_default_1();
}
if(part2_click_inner_before_default=="2"){
click_inner_before_default_2();
}
}
}
function click_inner_before_default_1(){
document.getElementById("click_inner_before_default_1").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_before_default_1").style.color = '#fff';
document.getElementById("click_inner_before_default_2").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_default_2").style.background = '#fff';
if(theme_part_name=="part1"){
part1_click_inner_before_default ="1";
part1_click_inner = "<img src='Resources/click_before_default_1.png' style='height:100%'/>";
part1_reset();
}
if(theme_part_name=="part2"){
part2_click_inner_before_default ="1";
part2_click_inner = "<img src='Resources/click_before_default_1.png' style='height:100%'/>";
part2_reset();
}
}
function click_inner_before_default_2(){
document.getElementById("click_inner_before_default_2").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_before_default_2").style.color = '#fff';
document.getElementById("click_inner_before_default_1").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_default_1").style.background = '#fff';
if(theme_part_name=="part1"){
part1_click_inner_before_default ="2";
part1_click_inner = "<img src='Resources/click_before_default_2.png' style='height:100%'/>";
part1_reset();
}
if(theme_part_name=="part2"){
part2_click_inner_before_default ="2";
part2_click_inner = "<img src='Resources/click_before_default_2.png' style='height:100%'/>";
part2_reset();
}
}
function click_inner_before_image(){
document.getElementById("click_inner_before_image").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_before_image").style.color = '#fff';
document.getElementById("click_inner_before_default").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_default").style.background = '#fff';
document.getElementById("click_inner_before_html").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_html").style.background = '#fff';
document.getElementById("click_inner_before_default_option").style.display = "none";
document.getElementById("click_inner_before_html_option").style.display = "none";
if(theme_part_name=="part1"){
part1_before_click_inner_mode = "image";
}
if(theme_part_name=="part2"){
part2_before_click_inner_mode = "image";
}
if(window.FileReader){
document.getElementById("click_inner_before_image_option").innerHTML = "<p style='margin:5px'>图片大小不建议超过2M，否则游戏会卡顿甚至闪退</p><input id='click_inner_before_image_file' type='file' style='background:#eee'/>";
input_image = document.getElementById("click_inner_before_image_file");
input_image.addEventListener('change',get_image,false);
image_mode = "before";
}
else{
document.getElementById("click_inner_before_image_option").innerHTML = "<p style='margin:5px'>抱歉，您的浏览器不支持自定义图片</p>";
input.setAttribute('disabled','disabled');
}
}
function click_inner_before_html(){
document.getElementById("click_inner_before_html").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_before_html").style.color = '#fff';
document.getElementById("click_inner_before_image").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_image").style.background = '#fff';
document.getElementById("click_inner_before_default").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_before_default").style.background = '#fff';
document.getElementById("click_inner_before_default_option").style.display = "none";
document.getElementById("click_inner_before_image_option").innerHTML = "";
document.getElementById("click_inner_before_html_option").style.display = "inline";
if(theme_part_name=="part1"){
if(part1_before_click_inner_mode=="html"){
document.getElementById("click_inner_before_html_input").value = part1_click_inner;
}
else{
part1_before_click_inner_mode = "html";
document.getElementById("click_inner_before_html_input").value = "";
}
part1_click_inner = document.getElementById("click_inner_before_html_input").value;
part1_reset();
}
if(theme_part_name=="part2"){
if(part2_before_click_inner_mode=="html"){
document.getElementById("click_inner_before_html_input").value = part2_click_inner;
}
else{
part2_before_click_inner_mode = "html";
document.getElementById("click_inner_before_html_input").value = "";
}
part2_click_inner = document.getElementById("click_inner_before_html_input").value;
part2_reset();
}
}
//点击后按键内容设置(默认/自定义图片/HTML)
function click_inner_after_default(){
document.getElementById("click_inner_after_default").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_after_default").style.color = '#fff';
document.getElementById("click_inner_after_image").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_after_image").style.background = '#fff';
document.getElementById("click_inner_after_html").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_after_html").style.background = '#fff';
document.getElementById("click_inner_after_image_option").innerHTML = "";
document.getElementById("click_inner_after_html_option").style.display = "none";
if(theme_part_name=="part1"){
part1_after_click_inner_mode = "default";
part1_after_click_inner = "<img src='Resources/click_after_default.png' style='height:100%'/>";
part1_reset();
}
if(theme_part_name=="part2"){
part2_after_click_inner_mode = "default";
part2_after_click_inner = "<img src='Resources/click_after_default.png' style='height:100%'/>";
part2_reset();
}
}
function click_inner_after_image(){
document.getElementById("click_inner_after_image").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_after_image").style.color = '#fff';
document.getElementById("click_inner_after_default").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_after_default").style.background = '#fff';
document.getElementById("click_inner_after_html").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_after_html").style.background = '#fff';
document.getElementById("click_inner_after_html_option").style.display = "none";
if(theme_part_name=="part1"){
part1_after_click_inner_mode = "image";
}
if(theme_part_name=="part2"){
part2_after_click_inner_mode = "image";
}
if(window.FileReader){
document.getElementById("click_inner_after_image_option").innerHTML = "<p style='margin:5px'>图片大小不建议超过2M，否则游戏会卡顿甚至闪退</p><input id='click_inner_after_image_file' type='file' style='background:#eee'/>";
input_image = document.getElementById("click_inner_after_image_file");
input_image.addEventListener('change',get_image,false);
image_mode = "after";
}
else{
document.getElementById("click_inner_after_image_option").innerHTML = "<p style='margin:5px'>抱歉，您的浏览器不支持自定义图片</p>";
input.setAttribute('disabled','disabled');
}
}
function click_inner_after_html(){
document.getElementById("click_inner_after_html").style.background = 'rgb(0,200,195)';
document.getElementById("click_inner_after_html").style.color = '#fff';
document.getElementById("click_inner_after_image").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_after_image").style.background = '#fff';
document.getElementById("click_inner_after_default").style.color = 'rgb(0,200,195)';
document.getElementById("click_inner_after_default").style.background = '#fff';
document.getElementById("click_inner_after_image_option").innerHTML = "";
document.getElementById("click_inner_after_html_option").style.display = "inline";
if(theme_part_name=="part1"){
if(part1_after_click_inner_mode=="html"){
document.getElementById("click_inner_after_html_input").value = part1_after_click_inner;
}
else{
part1_after_click_inner_mode = "html";
document.getElementById("click_inner_after_html_input").value = "";
}
part1_after_click_inner = document.getElementById("click_inner_after_html_input").value;
part1_reset();
}
if(theme_part_name=="part2"){
if(part2_after_click_inner_mode=="html"){
document.getElementById("click_inner_after_html_input").value = part2_after_click_inner;
}
else{
part2_after_click_inner_mode = "html";
document.getElementById("click_inner_after_html_input").value = "";
}
part2_after_click_inner = document.getElementById("click_inner_after_html_input").value;
part2_reset();
}
}
//声音设置
if(sound_mode=="disabled"){disable_sound()}
if(sound_mode=="enabled"){enable_sound()}
function disable_sound(){
document.getElementById("disable_sound").style.background = 'rgb(0,200,195)';
document.getElementById("disable_sound").style.color = '#fff';
document.getElementById("enable_sound").style.color = 'rgb(0,200,195)';
document.getElementById("enable_sound").style.background = '#fff';
document.getElementById("sound_option_button").style.background = '#fff';
document.getElementById("sound_option_button").style.color = 'rgb(0,200,195)';
document.getElementById("sound_option_main").style.display = "none";
sound_mode = "disabled"
}
function enable_sound(){
document.getElementById("enable_sound").style.background = 'rgb(0,200,195)';
document.getElementById("enable_sound").style.color = '#fff';
document.getElementById("disable_sound").style.color = 'rgb(0,200,195)';
document.getElementById("disable_sound").style.background = '#fff';
document.getElementById("sound_option_button").style.background = 'rgb(0,200,195)';
document.getElementById("sound_option_button").style.color = '#fff';
document.getElementById("sound_option_main").style.display = "inline";
sound_mode = "enabled"
}
//时间结束声音设置(无/默认/自定义声音)
if(timeover_sound_mode=="disabled"){timeover_sound_disable()}
if(timeover_sound_mode=="default"){timeover_sound_default()}
if(timeover_sound_mode=="custom"){timeover_sound_custom()}
function timeover_sound_disable(){
document.getElementById("timeover_sound_disable").style.background = 'rgb(0,200,195)';
document.getElementById("timeover_sound_disable").style.color = '#fff';
document.getElementById("timeover_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("timeover_sound_default").style.background = '#fff';
document.getElementById("timeover_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("timeover_sound_custom").style.background = '#fff';
document.getElementById("timeover_sound_custom_option").innerHTML = "";
timeover_sound_mode = "disabled";
}
function timeover_sound_default(){
document.getElementById("timeover_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("timeover_sound_disable").style.background = '#fff';
document.getElementById("timeover_sound_default").style.background = 'rgb(0,200,195)';
document.getElementById("timeover_sound_default").style.color = '#fff';
document.getElementById("timeover_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("timeover_sound_custom").style.background = '#fff';
document.getElementById("timeover_sound_custom_option").innerHTML = "";
timeover_sound_mode = "default";
timeover_sound = "Resources/timeout_end.mp3";
}
function timeover_sound_custom(){
document.getElementById("timeover_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("timeover_sound_disable").style.background = '#fff';
document.getElementById("timeover_sound_custom").style.background = 'rgb(0,200,195)';
document.getElementById("timeover_sound_custom").style.color = '#fff';
document.getElementById("timeover_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("timeover_sound_default").style.background = '#fff';
timeover_sound_mode = "custom";
if(window.FileReader){
document.getElementById("timeover_sound_custom_option").innerHTML = "<p style='margin:5px'>音频大小不建议超过2M，否则游戏会卡顿甚至闪退</p><input id='timeover_sound_file' type='file' style='background:#eee'/>";
input_audio = document.getElementById("timeover_sound_file");
input_audio.addEventListener('change',get_audio,false);
audio_mode = "timeover";
}
else{
document.getElementById("timeover_sound_custom_option").innerHTML = "<p style='margin:5px'>抱歉，您的浏览器不支持自定义声音</p>";
}
}
//点击错误声音设置(无/默认/自定义声音)
if(error_sound_mode=="disabled"){error_sound_disable()}
if(error_sound_mode=="default"){error_sound_default()}
if(error_sound_mode=="custom"){error_sound_custom()}
function error_sound_disable(){
document.getElementById("error_sound_disable").style.background = 'rgb(0,200,195)';
document.getElementById("error_sound_disable").style.color = '#fff';
document.getElementById("error_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("error_sound_default").style.background = '#fff';
document.getElementById("error_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("error_sound_custom").style.background = '#fff';
document.getElementById("error_sound_custom_option").innerHTML = "";
error_sound_mode = "disabled";
}
function error_sound_default(){
document.getElementById("error_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("error_sound_disable").style.background = '#fff';
document.getElementById("error_sound_default").style.background = 'rgb(0,200,195)';
document.getElementById("error_sound_default").style.color = '#fff';
document.getElementById("error_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("error_sound_custom").style.background = '#fff';
document.getElementById("error_sound_custom_option").innerHTML = "";
error_sound_mode = "default";
error_sound = "Resources/click_error.mp3";
}
function error_sound_custom(){
document.getElementById("error_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("error_sound_disable").style.background = '#fff';
document.getElementById("error_sound_custom").style.background = 'rgb(0,200,195)';
document.getElementById("error_sound_custom").style.color = '#fff';
document.getElementById("error_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("error_sound_default").style.background = '#fff';
error_sound_mode = "custom";
if(window.FileReader){
document.getElementById("error_sound_custom_option").innerHTML = "<p style='margin:5px'>音频大小不建议超过2M，否则游戏会卡顿甚至闪退</p><input id='error_sound_file' type='file' style='background:#eee'/>";
input_audio = document.getElementById("error_sound_file");
input_audio.addEventListener('change',get_audio,false);
audio_mode = "error";
}
else{
document.getElementById("error_sound_custom_option").innerHTML = "<p style='margin:5px'>抱歉，您的浏览器不支持自定义声音</p>";
}
}
//有机会时点击错误声音设置(无/默认/自定义声音)
if(error_chance_sound_mode=="disabled"){error_chance_sound_disable()}
if(error_chance_sound_mode=="default"){error_chance_sound_default()}
if(error_chance_sound_mode=="custom"){error_chance_sound_custom()}
function error_chance_sound_disable(){
document.getElementById("error_chance_sound_disable").style.background = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_disable").style.color = '#fff';
document.getElementById("error_chance_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_default").style.background = '#fff';
document.getElementById("error_chance_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_custom").style.background = '#fff';
document.getElementById("error_chance_sound_custom_option").innerHTML = "";
error_chance_sound_mode = "disabled";
}
function error_chance_sound_default(){
document.getElementById("error_chance_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_disable").style.background = '#fff';
document.getElementById("error_chance_sound_default").style.background = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_default").style.color = '#fff';
document.getElementById("error_chance_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_custom").style.background = '#fff';
document.getElementById("error_chance_sound_custom_option").innerHTML = "";
error_chance_sound_mode = "default";
error_chance_sound = "Resources/click_error_with_chance.mp3";
}
function error_chance_sound_custom(){
document.getElementById("error_chance_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_disable").style.background = '#fff';
document.getElementById("error_chance_sound_custom").style.background = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_custom").style.color = '#fff';
document.getElementById("error_chance_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("error_chance_sound_default").style.background = '#fff';
error_chance_sound_mode = "custom";
if(window.FileReader){
document.getElementById("error_chance_sound_custom_option").innerHTML = "<p style='margin:5px'>音频大小不建议超过2M，否则游戏会卡顿甚至闪退</p><input id='error_chance_sound_file' type='file' style='background:#eee'/>";
input_audio = document.getElementById("error_chance_sound_file");
input_audio.addEventListener('change',get_audio,false);
audio_mode = "error_chance";
}
else{
document.getElementById("error_chance_sound_custom_option").innerHTML = "<p style='margin:5px'>抱歉，您的浏览器不支持自定义声音</p>";
}
}
//按键点击声音设置(无/默认/自定义声音)
function click_sound_disable(){
document.getElementById("click_sound_disable").style.background = 'rgb(0,200,195)';
document.getElementById("click_sound_disable").style.color = '#fff';
document.getElementById("click_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_default").style.background = '#fff';
document.getElementById("click_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_custom").style.background = '#fff';
document.getElementById("click_sound_default_option").style.display = "none";
document.getElementById("click_sound_custom_option").innerHTML = "";
if(theme_part_name=="part1"){
part1_click_sound_mode = "disabled";
}
if(theme_part_name=="part2"){
part2_click_sound_mode = "disabled";
}
}
function click_sound_default(){
document.getElementById("click_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_disable").style.background = '#fff';
document.getElementById("click_sound_default").style.background = 'rgb(0,200,195)';
document.getElementById("click_sound_default").style.color = '#fff';
document.getElementById("click_sound_custom").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_custom").style.background = '#fff';
document.getElementById("click_sound_default_option").style.display = "inline";
document.getElementById("click_sound_custom_option").innerHTML = "";
if(theme_part_name=="part1"){
part1_click_sound_mode = "default";
if(part1_click_sound_default=="1"){
click_sound_default_1();
}
if(part1_click_sound_default=="2"){
click_sound_default_2();
}
}
if(theme_part_name=="part2"){
part2_click_sound_mode = "default";
if(part2_click_sound_default=="1"){
click_sound_default_1();
}
if(part2_click_sound_default=="2"){
click_sound_default_2();
}
}
}
function click_sound_custom(){
document.getElementById("click_sound_disable").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_disable").style.background = '#fff';
document.getElementById("click_sound_custom").style.background = 'rgb(0,200,195)';
document.getElementById("click_sound_custom").style.color = '#fff';
document.getElementById("click_sound_default").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_default").style.background = '#fff';
document.getElementById("click_sound_default_option").style.display = "none";
if(window.FileReader){
document.getElementById("click_sound_custom_option").innerHTML = "<p style='margin:5px'>音频大小不建议超过2M，否则游戏会卡顿甚至闪退</p><input id='click_sound_file' type='file' style='background:#eee'/>";
input_audio = document.getElementById("click_sound_file");
input_audio.addEventListener('change',get_audio,false);
if(theme_part_name=="part1"){
part1_click_sound_mode = "custom";
audio_mode = "part1";
}
if(theme_part_name=="part2"){
part2_click_sound_mode = "custom";
audio_mode = "part2";
}
}
else{
document.getElementById("click_sound_custom_option").innerHTML = "<p style='margin:5px'>抱歉，您的浏览器不支持自定义声音</p>";
}
}
function click_sound_default_1(){
document.getElementById("click_sound_default_1").style.background = 'rgb(0,200,195)';
document.getElementById("click_sound_default_1").style.color = '#fff';
document.getElementById("click_sound_default_2").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_default_2").style.background = '#fff';
if(theme_part_name=="part1"){
part1_click_sound_default = "1";
part1_click_sound = "Resources/click_sound_default_1.mp3";
}
if(theme_part_name=="part2"){
part2_click_sound_default = "1";
part2_click_sound = "Resources/click_sound_default_1.mp3";
}
}
function click_sound_default_2(){
document.getElementById("click_sound_default_2").style.background = 'rgb(0,200,195)';
document.getElementById("click_sound_default_2").style.color = '#fff';
document.getElementById("click_sound_default_1").style.color = 'rgb(0,200,195)';
document.getElementById("click_sound_default_1").style.background = '#fff';
if(theme_part_name=="part1"){
part1_click_sound_default ="2";
part1_click_sound = "Resources/click_sound_default_2.mp3";
}
if(theme_part_name=="part2"){
part2_click_sound_default ="2";
part2_click_sound = "Resources/click_sound_default_2.mp3";
}
}
//声音播放
function play_error_sound(){
if(sound_mode=="enabled"){
if(error_sound_mode=="disabled"){}else{
var audio = document.createElement("audio");
audio.src = error_sound;
audio.play();
}
}
}
function play_error_chance_sound(){
if(sound_mode=="enabled"){
if(error_chance_sound_mode=="disabled"){}else{
var audio = document.createElement("audio");
audio.src = error_chance_sound;
audio.play();
}
}
}
function play_timeover_sound(){
if(sound_mode=="enabled"){
if(timeover_sound_mode=="disabled"){}else{
var audio = document.createElement("audio");
audio.src = timeover_sound;
audio.play();
}
}
}
function play_part1_click_sound(){
if(sound_mode=="enabled"){
if(part1_click_sound_mode=="disabled"){}else{
var audio = document.createElement("audio");
audio.src = part1_click_sound;
audio.play();
}
}
}
function play_part2_click_sound(){
if(sound_mode=="enabled"){
if(part2_click_sound_mode=="disabled"){}else{
var audio = document.createElement("audio");
audio.src = part2_click_sound;
audio.play();
}
}
}
//FileReader功能(用于自定义声音和图片)
function get_image(){
var file = input_image.files[0];
if(!/image\/\w+/.test(file.type)){
alert("请确保文件为图像类型");
}
else{
var reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = function(e){
if(theme_part_name=="part1"){
if(image_mode=="before"){
part1_click_inner = "<img src='" + this.result + "' style='height:100%'/>";
part1_reset();
}
if(image_mode=="after"){
part1_after_click_inner = "<img src='" + this.result + "' style='height:100%'/>";
part1_reset();
}
}
if(theme_part_name=="part2"){
if(image_mode=="before"){
part2_click_inner = "<img src='" + this.result + "' style='height:100%'/>";
part2_reset();
}
if(image_mode=="after"){
part2_after_click_inner = "<img src='" + this.result + "' style='height:100%'/>";
part2_reset();
}
}
}
}
}
function get_audio(){
var file = input_audio.files[0];
if(!/audio\/\w+/.test(file.type)){
alert("请确保文件为音频类型");
}
else{
var reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = function(e){
if(audio_mode=="timeover"){
timeover_sound = this.result;
play_timeover_sound();
}
if(audio_mode=="error"){
error_sound = this.result;
play_error_sound();
}
if(audio_mode=="error_chance"){
error_chance_sound = this.result;
play_error_chance_sound();
}
if(audio_mode=="part1"){
part1_click_sound = this.result;
play_part1_click_sound();
}
if(audio_mode=="part2"){
part2_click_sound = this.result;
play_part2_click_sound();
}
}
}
}
//游戏(重新)加载部分
function reset(){
document.getElementById("score").innerHTML = "<span id='count'></span><span id='timeout'></span><span id='chance'></span>";
//设置时间
timeout = user_timeout;
timeout_plus = 0;
if(user_timeout=="disabled"){
document.getElementById("timeout").innerHTML = " 时间: " + timeout_plus;
}
else{
document.getElementById("timeout").innerHTML = " 倒计时: " + timeout;
}
//设置机会
chance_plus = 0;
if(user_chance=="disabled"){
chance = 0;
document.getElementById("chance").innerHTML = "";
}
if(user_chance>=0){
chance = user_chance;
document.getElementById("chance").innerHTML = " 机会: " + chance;
}
if(user_chance=="infinite"){
chance = user_chance;
document.getElementById("chance").innerHTML = " 无限机会";
}
//设置统计点击次数
cnt = 0;
document.getElementById("count").innerHTML = "次数: " + cnt;
//设置界面主题
document.getElementById("part1_table").style.background = part1_border;
document.getElementById("part2_table").style.background = part2_border;
document.getElementById("title").innerHTML = document.getElementById("user_title_input").value;
//载入游戏
part1_fullheight = 348;
part2_fullheight = 348;
document.getElementById("masker").style.bottom = "70px";
document.getElementById("switch_animation").innerHTML = "#part2_table{bottom:348px;}#part1_table{bottom:0px;}";
document.getElementById("end_animation").innerHTML = "";
part1_reset();
part2_reset();
}
//重新设置一区
function part1_reset(){
part_name = "1";
line_name = "1";
if(set_mode=="stair"){if(stair_mode=="r2l"){list_name = "1";}if(stair_mode=="l2r"){list_name = "5";}}
part_wipe();
part_set();
}
//重新设置二区
function part2_reset(){
part_name = "2";
line_name = "1";
if(set_mode=="stair"){if(stair_mode=="r2l"){list_name = "1";}if(stair_mode=="l2r"){list_name = "5";}}
part_wipe();
part_set();
}
//清除原先的按键排列
function part_wipe(){
var part = document.getElementsByClassName("part" + part_name);
for (var i=0;i<part.length;i++){
part[i].onclick = function onclick(event) { get_this = this;errorclick() };
if(part_name==1){part[i].style.background = part1_background;}
else if(part_name==2){part[i].style.background = part2_background;}
part[i].innerHTML = "";
}
}
//设置新的按键排列
function part_set(){
if(part_name==1){
var part_click = function onclick(event) { this.innerHTML = "<div style='width:calc(20% - 2px);overflow:hidden;height:68px;text-align:center;position:absolute;margin:-34px -1px'>" + part1_after_click_inner + "</div>";part1_click() };
var part_click_inner = "<div class='clickinner' style='width:calc(20% - 2px);overflow:hidden;height:68px;text-align:center;position:absolute;margin:-34px -1px'>" + part1_click_inner + "</div>";
var part_click_background = part1_click_background;
}
if(part_name==2){
var part_click = function onclick(event) { this.innerHTML = "<div style='width:calc(20% - 2px);overflow:hidden;height:68px;text-align:center;position:absolute;margin:-34px -1px'>" + part2_after_click_inner + "</div>";part2_click() };
var part_click_inner = "<div class='clickinner' style='width:calc(20% - 2px);overflow:hidden;height:68px;text-align:center;position:absolute;margin:-34px -1px'>" + part2_click_inner + "</div>";
var part_click_background = part2_click_background;
}
if(line_name<=5){
//随机模式
if(set_mode=="random"){
var part_random = Math.random()*5;
if(part_random>=4){list_name = 5;}
else if(part_random>=3){list_name = 4;}
else if(part_random>=2){list_name = 3;}
else if(part_random>=1){list_name = 2;}
else{list_name = 1;}
}
if(list_name<=5){
document.getElementById("part" + part_name + "_" + line_name + "_" + list_name).onclick = part_click;
document.getElementById("part" + part_name + "_" + line_name + "_" + list_name).innerHTML = part_click_inner;
document.getElementById("part" + part_name + "_" + line_name + "_" + list_name).style.background = part_click_background;
}
//楼梯模式
if(set_mode=="stair"){
if(stair_mode=="r2l"){
list_name++;
}
if(stair_mode=="l2r"){
list_name = list_name - 1;
}
}
line_name++;
part_set();
}
}
//游戏操作部分
//一区按键点击后
function part1_click(){
click();
play_part1_click_sound();
document.getElementById("main").style.background = part1_background;
var random1 = "falla" + animation_cnt;
var random2 = "fallb" + animation_cnt;
document.getElementById("switch_animation").innerHTML = "#part1_table{bottom:calc(" + part1_fullheight + "px - 418px);animation-name:" + random1 +";animation-duration:0.1s;}@keyframes " + random1 +"{0%{bottom:calc(" + part1_fullheight + "px - 348px)}100%{bottom:calc(" + part1_fullheight + "px - 418px)}}#part2_table{bottom:calc(" + part1_fullheight + "px - 70px);animation-name:" + random2 +";animation-duration:0.1s;}@keyframes " + random2 +"{0%{bottom:" + part1_fullheight + "px}100%{bottom:calc(" + part1_fullheight + "px - 70px)}}";
part1_fullheight = part1_fullheight - 70;
if(part1_fullheight<=0){
setTimeout("part1_turn();",100);
}
}
//将一区移至顶部并重新设置
function part1_turn(){
part1_fullheight = 348;
document.getElementById("switch_animation").innerHTML = "#part1_table{bottom:348px;}#part2_table{bottom:0px;}";
part1_reset();
}
//二区按键点击后
function part2_click(){
click();
play_part2_click_sound();
document.getElementById("main").style.background = part2_background;
var random1 = "falla" + animation_cnt;
var random2 = "fallb" + animation_cnt;
document.getElementById("switch_animation").innerHTML = "#part1_table{bottom:calc(" + part2_fullheight + "px - 70px);animation-name:" + random2 +";animation-duration:0.1s;}@keyframes " + random1 +"{0%{bottom:calc(" + part2_fullheight + "px - 348px)}100%{bottom:calc(" + part2_fullheight + "px - 418px)}}#part2_table{bottom:calc(" + part2_fullheight + "px - 418px);animation-name:" + random1 +";animation-duration:0.1s;}@keyframes " + random2 +"{0%{bottom:" + part2_fullheight + "px}100%{bottom:calc(" + part2_fullheight + "px - 70px)}}";
part2_fullheight = part2_fullheight - 70;
if(part2_fullheight<=0){
setTimeout("part2_turn();",100);
}
}
//将二区移至顶部并重新设置
function part2_turn(){
part2_fullheight = 348;
document.getElementById("switch_animation").innerHTML = "#part2_table{bottom:348px;}#part1_table{bottom:0px;}";
part2_reset();
}
var click_mode_cnt = "a";
//按键点击后反应
function click(){
cnt++;
if(cnt==1){
setTimeout ("starttimeout()",1000);
}
document.getElementById("count").innerHTML = "次数: " + cnt;
animation_cnt++;
}
//点击错误
function errorclick(){
if(chance<=0){
document.getElementById("masker").style.bottom = "0px";
play_error_sound();
document.getElementById("score").innerHTML = "点错啦!";
get_this.style.background = '#ff0000';
setTimeout("if(get_this.className=='part1'){get_this.style.background = part1_background}if(get_this.className=='part2'){get_this.style.background = part2_background}",100);
setTimeout("get_this.style.background = '#ff0000'",200);
setTimeout("if(get_this.className=='part1'){get_this.style.background = part1_background}if(get_this.className=='part2'){get_this.style.background = part2_background}",300);
setTimeout("get_this.style.background = '#ff0000'",400);
setTimeout("if(get_this.className=='part1'){get_this.style.background = part1_background}if(get_this.className=='part2'){get_this.style.background = part2_background}",500);
setTimeout("get_this.style.background = '#ff0000'",600);
setTimeout("end()",1000);
}
else{
play_error_chance_sound();
get_this.style.background = '#ffaaaa';
setTimeout("if(get_this.className=='part1'){get_this.style.background = part1_background}if(get_this.className=='part2'){get_this.style.background = part2_background}",150);
setTimeout("get_this.style.background = '#ffaaaa'",300);
setTimeout("if(get_this.className=='part1'){get_this.style.background = part1_background}if(get_this.className=='part2'){get_this.style.background = part2_background}",450);
setTimeout("get_this.style.background = '#ffaaaa'",600);
if(user_chance=="infinite"){
document.getElementById("chance").innerHTML = " 无限机会";
}
else{
chance = chance - 1;
document.getElementById("chance").innerHTML = " 机会: " + chance;
if(chance<=0){
document.getElementById("chance").innerHTML = " 机会用完";
}
}
chance_plus++;
}
}
//游戏计时部分
function starttimeout(){
timeout_plus++;
//倒计时禁用情况下
if(user_timeout=="disabled"){
document.getElementById("timeout").innerHTML = " 时间: " + timeout_plus;
setTimeout ("starttimeout()",1000);
}
//倒计时启用情况下
else{
timeout = timeout - 1;
if(timeout==0){
document.getElementById("masker").style.bottom = "0px";
play_timeover_sound();
document.getElementById("score").innerHTML = "时间到!";
document.getElementById("end_animation").innerHTML = "#main{animation-name:oa;animation-duration:1s;}@keyframes oa{0%{opacity:1;}12%{opacity:0;}25%{opacity:1;}32%{opacity:0;}50%{opacity:1;}62%{opacity:0;}75%{opacity:1;}100%{opacity:1;}}";
setTimeout("end()",1000);
}
else if(timeout>=1){
document.getElementById("timeout").innerHTML = " 倒计时: " + timeout;
setTimeout ("starttimeout()",1000);
}
}
}
//游戏结束部分
//弹出窗口显示成绩
function end(){
document.getElementById("alert_style").innerHTML = "#endui{animation-name:endui_in;animation-duration:0.3s;}@keyframes endui_in{0%{top:-350px}100%{top:-20px}}#startui{display:none}";
alertbg_in();
if(timeout_plus>=1){
if(chance_plus>=1){
chance_score = "<p>使用了" + chance_plus + "次机会</p>";
}
else{
chance_score = "<p>没有使用机会</p>";
}
//得分评语，变量cnt为点击次数，timeout_plus是游戏所使用的时间，cnt/timeout_plus可以得出平均每秒点击次数(CPS)
if(cnt/timeout_plus>=20){endui_say = "您";}
else if(cnt/timeout_plus>=15){endui_say = "刑啊";}
else if(cnt/timeout_plus>=7){endui_say = "好家伙";}
else if(cnt/timeout_plus>=3){endui_say = "还能再练一下，没事的";}
else{endui_say = "---蔡---";}
document.getElementById("endui_timeout").innerHTML = "<p style='margin:5px;font-size:15px;color:rgb(0,200,195)'>" + endui_say + "</p><p>您在 " + timeout_plus + " 秒内点击了 " + cnt + " 次</p><p>平均每秒点击次数(CPS)：" + cnt / timeout_plus + "</p>" + chance_score;
}
else{
document.getElementById("endui_timeout").innerHTML = "<p>您的操作时间不足 1 秒，不能获取成绩</p>";
}
}
//重新开始
function restart(){
document.getElementById("alert_style").innerHTML = "#endui{animation-name:endui_out;animation-duration:0.3s;}@keyframes endui_out{0%{top:-20px}100%{top:-350px}}#startui{display:none}";
setTimeout("document.getElementById('alert_style').innerHTML = '#endui{display:none}#startui{display:none}'",300);
alertbg_out();
reset();
}
//返回到起始页
function tostartui(){
document.getElementById("alert_style").innerHTML = "#endui{animation-name:endui_out;animation-duration:0.3s;}@keyframes endui_out{0%{top:-20px}100%{top:-350px}}#startui{display:none}";
setTimeout("loadstartui()",300);
reset();
}