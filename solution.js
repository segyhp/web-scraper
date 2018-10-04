//Initate library
const fs = require('fs')
const cheerio = require('cheerio')
const chalk = require ('chalk')
const puppeteer = require('puppeteer')

//Initate constant
const promoTypeArr  = ["kartu kredit", "ebanking", "simpanan", "others"]
const promoCategoryArr = ["travel", "lifestyle", "fnb", "gadget_entertainment", "dailyneeds", "others_promo"]
const url = 'https://www.bankmega.com/promolainnya.php'
const url_root = "https://www.bankmega.com/"
const outputFile = 'solution.json';

let resultCount = 0;
let dataToStored = []
let type = []
let category = [];        
   
console.log(chalk.yellow.bgBlue(`\n  Scraping of ${chalk.underline.bold(url)} initiated...\n`))



const scrape = async() => {
    try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    var myDoc = await page.evaluate(() => document.body.innerHTML);
    var $ = cheerio.load(myDoc);
    let pageNum = (await page.$$('#contentpromolain2 > div:nth-child(2) > div > table > tbody > tr > td')).length;   


let scrapePage = async() => {
    category = [];
    //Scrap each page
    for (let j = 0; j < pageNum - 2; j++) {
        console.log(chalk.yellow.bgBlue(`\n  Scraping page  ${(j+1)}...\n`))
        myDoc = await page.evaluate(() => document.body.innerHTML);
        $ = cheerio.load(myDoc)
        await page.click(`#contentpromolain2 > div:nth-child(2) > div > table > tbody > tr > td:nth-child(${pageNum}) > a`)
        await page.waitFor(250);
        $('#promolain li').map((i, el) => { 

            link = url_root + $(el).find('a').attr('href')
            title = $(el).find('img').attr('title')
            img = url_root + $(el).find('img').attr('src')
            
            category.push({
                id: resultCount + 1, link, title, img
            })
       
            resultCount++

        })

     

    }
      
}
//Initate scrap for the first time
console.log(chalk.yellow.bgBlue(`\n  Scraping type  ${promoTypeArr[0]}...\n`))
console.log(chalk.yellow.bgBlue(`\n  Scraping category  ${promoCategoryArr[0]}...\n`))

await scrapePage()
type.push({
     [promoCategoryArr[0]]: category
 })
 dataToStored.push({
     [promoTypeArr[0]]: type
 })
 
// Scraping only for the type of 'kartu kredit' because it consists lists of category
for (let  i =  1 ; i  < promoCategoryArr.length; i++){
    
    console.log(chalk.yellow.bgBlue(`\n  Scraping category  ${promoCategoryArr[i]}...\n`))
    await page.click(`#${promoCategoryArr[(i)]}`)
    await page.waitFor(250);
    pageNum = (await page.$$('#contentpromolain2 > div:nth-child(2) > div > table > tbody > tr > td')).length;
    await page.waitFor(250);
    await scrapePage();

     type.push({
         [promoCategoryArr[i]]: category
     })
}

// //Scraping the rests of types
for (let  i =  1 ; i  <promoTypeArr.length ; i++){
    console.log(chalk.yellow.bgBlue(`\n  Scraping type  ${promoTypeArr[i]}...\n`))
        await page.click(`#${promoTypeArr[i]}`)
        await page.waitFor(250);
        await resultCount++
        pageNum = (await page.$$('#contentpromolain2 > div:nth-child(2) > div > table > tbody > tr > td')).length;
        await page.waitFor(250);

        type = [];
        await scrapePage();
           type.push({
               ["Not Available"]: category
           })
          dataToStored.push({
              [promoTypeArr[i]]: type
          })


    }
    

    //export data to JSON.file
    exportResults(dataToStored)
    //Total data parsed
    console.log(chalk.yellow.bgBlue(`\n  Total count of data scraped :  ${resultCount}\n`))
    console.log(chalk.yellow.bgBlue(`\n  Program closed`))
    
    //Stop the program
    browser.close();

    }

    catch(err) {
        console.log(err)
        browser.close();

    }
   
}
//Call method scrap to run entire program
scrape();
//method to return data that scraped as JSON data
const exportResults = (parsedResults) => {
    fs.writeFile(outputFile, JSON.stringify(parsedResults, null, 4), (err) => {
        if (err) {
            console.log(err)
        }

        console.log(chalk.yellow.bgBlue(`\n ${chalk.underline.bold(resultCount)} Results exported successfully to ${chalk.underline.bold(outputFile)}\n`))
    })
}

