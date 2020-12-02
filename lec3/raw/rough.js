// npm install request=>. npm playstore => local machine 
// console.log("hello");
// use => require
// include import require 
// /logic => implementation => libraray => function 
let request=require("request");
// npm install cheerio 
let cheerio=require("cheerio");
// preinstalled
let xlsx= require("xlsx");
let fs=require("fs");
let path=require("path");
//  input => url , fn
// AllMatch URL 
request("https://www.espncricinfo.com/series/_/id/8048/season/2020/indian-premier-league",MainMatchCb)
function MainMatchCb(err,res,html){
    let sTool= cheerio.load(html);
    let allmatchPageUrl=  sTool("a[data-hover='View All Results']").attr("href");
    let fUrl="https://www.espncricinfo.com"+allmatchPageUrl;
    AllMatchPage(fUrl);
}
function AllMatchPage(fUrl){
    request (fUrl,getAMUrl);
    function getAMUrl(err,resp,html){
        // console.log(html);
     let sTool= cheerio.load(html);
      let allmatchUrlElem=  sTool("a[data-hover='Scorecard']");
      for(let i=0;i<allmatchUrlElem.length;i++){
      let href=    sTool(allmatchUrlElem[i]).attr("href");
     let fUrl="https://www.espncricinfo.com"+href;
     findDataofAMatch(fUrl);
      }
    }
}

function findDataofAMatch(url){
    request(url,whenDataArrive);
    function whenDataArrive(err,resp,html){
        console.log(html);
    }
}