let request=require("request");
let cheerio=require("cheerio");
let xlsx= require("xlsx");
let fs=require("fs");
let path=require("path");
request("https://www.imdb.com/chart/boxoffice/?ref_=hm_cht_sm",main)
function main(err,res,html){
    let sTool= cheerio.load(html);
let TopBoxOfficeurl= sTool(".chart.full-width").find("a");
for(let i = 0;i<TopBoxOfficeurl.length;i++){
    //console.log(sTool(TopBoxOfficeurl[i]).text())
let href=    sTool(TopBoxOfficeurl[i]).attr("href");
      
     console.log(sTool(TopBoxOfficeurl[i]).html())
     findDataOfAMovie(href)
}
}
function findDataOfAMovie(url){
    request(url,whenDataArrive);
    function whenDataArrive(err,resp,html){
        console.log("recieved html");
        let sTool= cheerio.load(html);
     
        let title =$('div[class="title_wrapper"]>h1').text().trim();
        let rating =$('div[classs="ratingValue"]>strong > span').text()
        let summary=$('div[class="summary_text"]').text().trim()
    processMovie(title,rating,summary);

    function rocessMovie(title,rating,summary){
        let dirPath=title;
let  pMovieStats={
    Title:title,
    Rating:rating,
    Summary:summary,
}
if (fs.existsSync(dirPath)) {
    // file check 
// console.log("Folder exist")
}else{
    // create folder 
    // create file
    // add data
    fs.mkdirSync(dirPath);
}
let MovieFilePath= path.join(dirPath,title+".xlsx");
let pData=[];
if(fs.existsSync(playerFilePath)){
    
 pData=excelReader(playerFilePath,title);
 pData.push(pMovieStats);
}else{
// create file
console.log("File of player",MovieFilePath,"created");
pData=[pMvieStats];
}
excelWriter(movieFilePath,pData,title);

}

// if => file exist=> append : create ,add data

//=>   check if player's excel file exist or not
// exist=> data append
// create new new file and add data





function excelReader(filePath,title){
    if(!fs.existsSync(filePath)){
        return null;
    }else{
        let wt= xlsx.readFile(filePath);
        let excelData= wt.Sheets[title];
        let ans= xlsx.utils.sheet_to_json(excelData);
    return ans;
    }
}
function excelWriter(filePath,json,title){
    let newWB= xlsx.utils.book_new();
    let newWS= xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB,newWS,title);
    xlsx.writeFile(newWB,filePath);
}

    }
    }
