    
function ValidateEmpty(id,errorid,errormsg){
    var refToControl = document.getElementById(id);
    var refToErrorControl = document.getElementById(errorid);

    if(refToControl.value ==""){
        refToErrorControl.innerText = errormsg;
    }
    else{
        refToErrorControl.innerText = "";
        console.log(refToControl.value);
    }
}

function ValidateGender(inputName,errorid,erromsg){
    var refToControl = document.getElementsByName(inputName);
    var refToErrorControl = document.getElementById(errorid);

    var selectGender = false;

    for(var i=0;i<refToControl.length;i++){
        if(refToControl[i].checked){
            selectGender = true;
            break;
        }
    }
    if(!selectGender){
        refToErrorControl.innerText = erromsg;
    }
    else{
        refToErrorControl.innerText = "";
    }
}

function Clear(controlId)
{
   var refToControlId= document.getElementById(controlId);
   if(!(refToControlId.value==""))
    refToControlId.value="";
}

function ClearGender(controlId){

    var refToControlId= document.getElementsByName(controlId);
    for(var i=0;i<refToControlId.length;i++){
        if(refToControlId[i].checked){
            refToControlId[i].checked=false;
            console.log(refToControlId[i].checked);
        }
    }
}