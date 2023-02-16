function displayNum(num){
    result.value=result.value+num
}
function evaluateExpr(){
    expr=result.value
    output=eval(expr)
    result.value=output


}
function allClear(){
    result.value=''
}
function backSpace(){
    result.value=result.value.slice(0,-1)
}