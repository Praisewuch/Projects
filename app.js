const axios = require('axios')
const {writeFile, writeFileSync, write} = require('fs');
var argv = require('minimist')(process.argv.slice(2));
const date = new Date()
let dayArr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]


let Weather_data;

const options = {
  method: 'GET',
  url: `https://open-weather13.p.rapidapi.com/city/${argv.city}/${argv.lang}`,
  headers: {
    'x-rapidapi-key': '42067d72famsh7269ab1886c162fp1ebb8fjsnba83544f6f48',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};

try {
	let weather = async() => {
        const response = await axios.request(options);
        let {data} = response;
        if(data.length > 120){
            data = 'sorry out of order wait for next month'
        }

        const dat = new Uint8Array(Buffer.from(report));

        writeFile(`./CSV report/${argv.output}`, dat, (err) => {
          if (err) throw err;
          console.log('The Weather has been saved to CSV report!');
        }); 
        
    }
   
    weather()
    
} catch (error) {
	console.error(error);
}

