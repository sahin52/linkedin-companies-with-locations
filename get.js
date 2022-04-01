function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
var hrefs = []
const findElementByXpath = getElementByXpath
console.log( getElementByXpath("//html[1]/body[1]/div[1]") );

const tiklaSirkete=()=>{
	var x = '/html/body/div[6]/div[3]/div[3]/div[2]/div/section[2]/div/div/div[1]/div/div[1]/div/div[2]/div[1]/span[1]/span[1]/a'
	findElementByXpath(x).click()
	return x
}
const tiklaSirkete2=()=>{
	var x = '/html/body/div[5]/div[3]/div[3]/div[2]/div/section[2]/div/div/div[1]/div/div[1]/div/div[2]/div[1]/span[1]/span[1]/a'
	findElementByXpath(x).click()
	return x
}
const getBasvuru=(i)=>'/html/body/div[6]/div[3]/div[3]/div[2]/div/section[1]/div/div/ul/li['+i+']/div/div'

const geri = ()=>history.back()

const konum = ()=>findElementByXpath('/html/body/div[6]/div[3]/div/div[2]/div/div[2]/main/div[1]/section/div/div[2]/div[1]/div[1]/div[2]/div/div/div[2]/div[1]').innerHTML.trim()

const isim = ()=>findElementByXpath(
'/html/body/div[6]/div[3]/div/div[2]/div/div[2]/main/div[1]/section/div/div[2]/div[1]/div[1]/div[2]/div/h1/span')
.innerHTML.trim()

//*[@id="ember3475"]/div[2]/div[1]/div[1]/div[2]/div/h1/span
const litikla = (i)=>findElementByXpath(getBasvuru(i)).click()

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

async function sayfadakiIlanlariKaydet(){
	var isimsAndKonums =[]
	
	for(var i=1;i<26;i++){
	try{
		console.log("1--")
		console.log("i "+i)
		await(1)
		litikla(i)
		console.log("2--")
		console.log("i "+i)
		await sleep(2)
		console.log("3--")
		console.log("i "+i)
		var href = ''
		try{
		 	var x = '/html/body/div[6]/div[3]/div[3]/div[2]/div/section[2]/div/div/div[1]/div/div[1]/div/div[2]/div[1]/span[1]/span[1]/a'
		 	href = findElementByXpath(x).href
		 	if(hrefs.includes(href)){
		 		continue;
		 	}
		 	hrefs.push(href)
			tiklaSirkete()
		}catch(e){
			var x = '/html/body/div[5]/div[3]/div[3]/div[2]/div/section[2]/div/div/div[1]/div/div[1]/div/div[2]/div[1]/span[1]/span[1]/a'
		 	href = findElementByXpath(x).href
		 	if(hrefs.includes(href)){
		 		continue;
		 	}
		 	hrefs.push(href)
			tiklaSirkete2()
		}
		
		console.log("4--")
		console.log("i "+i)
		await sleep(5)
		console.log("5--")
		console.log("i "+i)
		isimsAndKonums.push({
		href:href,
			isim:isim(),
			konum:konum()
		})
		console.log("6--")
		console.log("i "+i)
		history.back()
		console.log("7--")
		console.log("i "+i)
		await sleep(5)
		console.log(JSON.stringify(isimsAndKonums))
	}catch(e){
		console.log(e)
	}
	}
	console.log(isimsAndKonums)
	console.log(JSON.stringify(isimsAndKonums))
	return isimsAndKonums
}
const xTikla=(xpath)=>{findElementByXpath(xpath).click()}

function sayfayaTikla(i){
	if(i>9 && i<34) i=7;
	else if(i==34)i=4;
	else if(i==35)i=5;
	else if(i==36)i=6;
	else if(i==37)i=7;
	else if(i==38)i=8;
	else if(i==39)i=9;
	else if(i==40)i=10;


	findElementByXpath(
'/html/body/div[6]/div[3]/div[3]/div[2]/div/section[1]/div/div/section/div/ul/li['+i+']/button').click()
}

const main2 = async (hangiSayfaSonraGeliyor)=>{
	var result = []
	
	for(var j=hangiSayfaSonraGeliyor;j<40;j++){
		result.push(await sayfadakiIlanlariKaydet())
		console.log(JSON.stringify(result))

		sayfayaTikla(j)
		await sleep(3)
	}
	console.log(JSON.stringify(result))
}
main2(8)
