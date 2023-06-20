function point(){
var T=parseFloat(document.getElementById("math").value);
var V=parseFloat(document.getElementById("lituratule").value);
var A=parseFloat(document.getElementById("english").value);
T *=2;
V *=2;
var totalscore=T + V + A;
var result="";
if(totalscore>=42.5){
    result="Đỗ Kim Liên và Chu Văn An";
} else if(totalscore>=40){
    result="Đỗ Kim Liên";
}else{
    result="Không đỗ";
}
document.getElementById("result").innerHTML = "Kết quả: " + result;
}