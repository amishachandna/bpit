//npm install request
//import request => js file
let req=require("request");
req("https://www.google.com", requestkans);
function requestkans(err,resp,html){
    console.log(err);
    console.log(html);
    if(err){
        console.log("some error", err);
    }
    else{
        //data->scrap
        console.log(html);
    }
}