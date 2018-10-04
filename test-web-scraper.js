// // / let imageArr = []


// // request('https://www.bankmega.com/promolainnya.php', (error, response, html)=> {
// //     if(!error && response.statusCode == 200){
// //         const $ = cheerio.load(html)

// //         const promoLain = $('#promolain');

// //         // console.log(promoLain.html());
// //         // console.log(promoLain.text());

// //         // const output = promoLain.find('a').html();
    
// //         // const output = promoLain.children('li').html();
// //         // const output = promoLain.children('li').next().html();
// //         // const output = promoLain.children('li').parent().html();

// //         // $('#promolain li a img').each((i, el) => {
// //         //     const item = $(el).html();
// //         //     const link = $(el).attr('src')

// //         //     // console.log(item)
// //         //     console.log(link)
// //         // })

// //         // $('#subcatpromo div img').each((i, el) => {
// //         //     const item = $(el).html();
// //         //     const link = $(el).attr('title')

// //         //     // console.log(item)
// //         //     console.log(link)
// //         // })   

// //         $('#subcatpromo div').each((i, el)=> {
// //             // const link = $(el).find('.bg1').html();
// //             // const link = $(el).find('.bg1').html().replace(/\s\s+/g, '');

// //             let url ='https://www.bankmega.com/'
// //             const img = $(el).find('img').attr('src')

// //             let images = {
// //                 img : url+img
// //             }

// //             imageArr.push(images)


// //             //Write Headers

// //         })
        
// //         writeStream.write(`${JSON.stringify(imageArr)}\n`)


// //         console.log("Scraping Done..")

// //     }
// // }
// // )

// // console.log(chalk.yellow.bgBlue(`\n  Scraping of ${chalk.underline.bold(url)} initiated...\n`))

// // const getWebsiteContent = async (url) => {
// //     try {
// //         const response = await axios.get(url)
// //         const $ = cheerio.load(response.data)

// //     $('#contentpromolain2').each((i,el) => {

// //         const link = $(el).is(":visible"); 

// //         console.log(link)
// //     })



// // }
// //     catch (err) {
// //         console.error(err)
// //     }
// // }


// // getWebsiteContent(url)

// // const getWebsiteContent = async (url) => {
// //     try {
// //         const response = await axios.get(url)
// //         const $ = cheerio.load(response.data)

// //     $('#subcatpromo div').map((i, el)=> {
// //         const count = resultCount++
// //         const img = $(el).find('img').attr('src')
// //         const imgId = $(el).find('img').attr('id')

// //         const metaData = {
// //             image : 'https://www.bankmega.com/' + img,
// //             id : imgId
// //         }

// //         parsedResults.push(metaData)


// //     })

// //     exportResults(parsedResults)


// // }
// //     catch (err) {
// //         console.error(error)
// //     }
// // }




// // getWebsiteContent(url)
// // $('#contentpromolain2 > div:nth-child(1)').each((i,el) => {

// //     const link = $(el).find('div:nth-child(2)').html()

// //     console.log( "hai link ", link )
// // })


// //  let promoType = (await page.$$('#contentpromolain2 > div:nth-child(1) > div:nth-child(2) >  div')).length;
// //  let promoCategory = (await page.$$('#subcatpromo >  div')).length


// var obj = [
//     hello : {
//         test:'sad'
//     }
// ]


// obj.push("sad")

// console.log(obj["hello"]["test"])