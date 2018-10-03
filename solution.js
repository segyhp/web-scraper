const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const writeStream = fs.createWriteStream('post.json')

//write header

writeStream.write(`Image link \n`)

let imageArr = []


request('https://www.bankmega.com/promolainnya.php', (error, response, html)=> {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html)

        const promoLain = $('#promolain');

        // console.log(promoLain.html());
        // console.log(promoLain.text());

        // const output = promoLain.find('a').html();
    
        // const output = promoLain.children('li').html();
        // const output = promoLain.children('li').next().html();
        // const output = promoLain.children('li').parent().html();

        // $('#promolain li a img').each((i, el) => {
        //     const item = $(el).html();
        //     const link = $(el).attr('src')

        //     // console.log(item)
        //     console.log(link)
        // })

        // $('#subcatpromo div img').each((i, el) => {
        //     const item = $(el).html();
        //     const link = $(el).attr('title')

        //     // console.log(item)
        //     console.log(link)
        // })   

        $('#subcatpromo div').each((i, el)=> {
            // const link = $(el).find('.bg1').html();
            // const link = $(el).find('.bg1').html().replace(/\s\s+/g, '');

            let url ='https://www.bankmega.com/'
            const img = $(el).find('img').attr('src')

            let images = {
                img : url+img
            }

            imageArr.push(images)


            //Write Headers

        })
        
        writeStream.write(`${JSON.stringify(imageArr)}\n`)


        console.log("Scraping Done..")

    }
}
)