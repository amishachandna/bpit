//ci=> request
//npm install request
let request=require("request");
let ch=require("cheerio");
let fs=require("fs");
request(
    'https://www.espncricinfo.com/series/8048/scorecard/1237178/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-indian-premier-league-2020-21'
    
, url);
function url(err,response,html){
    console.log(err);
   // console.log(html);
    //fs.writeFileSync("index.html",html);
    console.log("recieved files");
    let sTool=ch.load(html);
    //let output=STool("div.summary");
   // console.log(output.html());
   // console.log(output.text());
   //let inningsarr=STool("div.card.content-block.match-scorecard-table");
   //let fullhtml="<table>"
   //for(let i=0; i<2;i++){
       //let tablebatsman= 
       //STool(inningsarr[i]).find("table.table.batsman");
       //fullhtml+= STool(tablebatsman).html();
       //fullhtml+="<table>";
   //}
   //fs.writeFileSync("innings.html",fullhtml);
   //let resultelm=sTool("div.desc.text-truncate");
   //console.log(resultelm.text());
   let tableelm= sTool("div.card.content-block.match-scorecard-table");
console.log(tableelm.length);
let revinninghtml="";
for(let i=0;i<2;i++){
    let cinning=sTool(tableelm[i]).html()
    revinninghtml+=cinning;

}
fs.writeFileSync("revinning.html",revinninghtml);

}



