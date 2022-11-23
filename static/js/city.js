
function ChangeCountry()
{
var selectedItem = document.PostForm.CountryCodeShow.selectedIndex;
var selectedTextblank= ""
var selectedText = document.PostForm.CountryCodeShow.options[selectedItem].text;
var selectedValue = document.PostForm.CountryCodeShow.options[selectedItem].value;
var i;
var isNew = true;


if (selectedValue == "AFGH      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KABUL','KBL',false,false);
	
}

if (selectedValue == "ALB       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TIRANA','TIA',false,false);
	
}

if (selectedValue == "ALGR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ALGIERS','ALG',false,false);
	
}

if (selectedValue == "ANGL      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LUANDA','LUA',false,false);
	
}

if (selectedValue == "ARG       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BUENOS AIRES','BNS',false,false);
	
}

if (selectedValue == "ARM       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('YEREVAN','YRV',false,false);
	
}

if (selectedValue == "ASTL      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MELBOURNE','MLB',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('PERTH','PRT',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('SYDNEY','SYD',false,false);
	
}

if (selectedValue == "AUST      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('VIENNA','VNN',false,false);
	
}

if (selectedValue == "AZR       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BAKU','BKU',false,false);
	
}

if (selectedValue == "BAMA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('NASSAU','NSS',false,false);
	
}

if (selectedValue == "BAHR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MANAMA','MNA',false,false);
	
}

if (selectedValue == "BANG      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DHAKA','DHK',false,false);
	
}

if (selectedValue == "BRDO      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BRIDGETOWN','BG2',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('','BGN',false,false);
	
}

if (selectedValue == "BYS")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MINSK','MSK',false,false);
	
}

if (selectedValue == "BELG      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BRUSSELS','BRS',false,false);
	
}

if (selectedValue == "BLZ       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BELIZE','BLZ',false,false);
	
}

if (selectedValue == "BENN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('COTONOU','COT',false,false);
	
}

if (selectedValue == "BERM      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('HAMILTON','HML',false,false);
	
}

if (selectedValue == "BOL       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LA PAZ','LPZ',false,false);
	
}

if (selectedValue == "BIH       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SARAJEVO','SAR',false,false);
	
}

if (selectedValue == "BOT       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('GABORONE','GAB',false,false);
	
}

if (selectedValue == "BRZL")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PORTO ALEGRE','PTA',false,false);
	
}

if (selectedValue == "BRZL      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BRASILIA','BRA',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('RECIFE','RCF',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('RIO DE JANEIRO','RDJ',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('SAO PAULO','SPL',false,false);
	
}

if (selectedValue == "BRNI      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BANDAR SERI BEGAWAN','BSB',false,false);
	
}

if (selectedValue == "BULG      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SOFIA','SOF',false,false);
	
}

if (selectedValue == "BURK      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('OUAGADOUGOU','OUG',false,false);
	
}

if (selectedValue == "BURM")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('RANGOON','RNG',false,false);
	
}

if (selectedValue == "BRND      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BUJUMBURA','BUJ',false,false);
	
}

if (selectedValue == "CAVI      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PRAIA','PIA',false,false);
	
}

if (selectedValue == "CBDA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PHNOM PENH','PHP',false,false);
	
}

if (selectedValue == "CMRN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('YAOUNDE','YDE',false,false);
	
}

if (selectedValue == "CAN")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CALGARY','CLG',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('HALIFAX','HLF',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('MONTREAL','MTL',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('OTTAWA','OTT',false,false);
	
	document.PostForm.PostCodeShow.options[5] = new Option('QUEBEC CITY','QBC',false,false);
	
	document.PostForm.PostCodeShow.options[6] = new Option('TORONTO','TRT',false,false);
	
	document.PostForm.PostCodeShow.options[7] = new Option('VANCOUVER','VAC',false,false);
	
}

if (selectedValue == "CHAD")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('NDJAMENA','NDJ',false,false);
	
}

if (selectedValue == "CHIL      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SANTIAGO','SNT',false,false);
	
}

if (selectedValue == "CHIN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BEIJING','BEJ',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('GUANGZHOU','GUZ',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('SHANGHAI','SHG',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('SHENYANG','SNY',false,false);
	
}

if (selectedValue == "COL       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('','BGT',false,false);
	
}

if (selectedValue == "CONB      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BRAZZAVILLE','BRZ',false,false);
	
}

if (selectedValue == "COD       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KINSHASA','KIN',false,false);
	
}

if (selectedValue == "CSTR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SAN JOSE','SNJ',false,false);
	
}

if (selectedValue == "IVCO      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ABIDJAN','ABJ',false,false);
	
}

if (selectedValue == "HRV       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ZAGREB','ZGB',false,false);
	
}

if (selectedValue == "CUBA")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('HAVANA','HAV',false,false);
	
}

if (selectedValue == "CUR")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CURACAO','CRC',false,false);
	
}

if (selectedValue == "CYPR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('NICOSIA','NCS',false,false);
	
}

if (selectedValue == "CZEC      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PRAGUE','PRG',false,false);
	
}

if (selectedValue == "DEN       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('COPENHAGEN','CPN',false,false);
	
}

if (selectedValue == "DOMR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SANTO DOMINGO','SDO',false,false);
	
}

if (selectedValue == "ECUA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('GUAYAQUIL','GYQ',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('QUITO','QTO',false,false);
	
}

if (selectedValue == "EGYP      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CAIRO','CRO',false,false);
	
}

if (selectedValue == "ELSL      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('','SNS',false,false);
	
}

if (selectedValue == "EGN       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MALABO','MBO',false,false);
	
}

if (selectedValue == "ERI       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ASMARA','ASM',false,false);
	
}

if (selectedValue == "EST")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TALLINN','TAL',false,false);
	
}

if (selectedValue == "SZLD      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MBABANE','MBA',false,false);
	
}

if (selectedValue == "ETH       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ADDIS ABABA','ADD',false,false);
	
}

if (selectedValue == "FSM")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KOLONIA','KOL',false,false);
	
}

if (selectedValue == "FIN")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('HELSINKI','HLS',false,false);
	
}

if (selectedValue == "FRAN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MARSEILLE','MRL',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('PARIS','PRS',false,false);
	
}

if (selectedValue == "GABN")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LIBREVILLE','LIB',false,false);
	
}

if (selectedValue == "GRZ       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TBILISI','TBL',false,false);
	
}

if (selectedValue == "GER       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BERLIN','BRL',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('FRANKFURT','FRN',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('MUNICH','MUN',false,false);
	
}

if (selectedValue == "GHAN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ACCRA','ACC',false,false);
	
}

if (selectedValue == "GRBR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('EDINBURGH','EDN',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('LONDON','LND',false,false);
	
}

if (selectedValue == "GRC       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ATHENS','ATH',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('THESSALONIKI','TES',false,false);
	
}

if (selectedValue == "GREN")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ST GEORGES','SGE',false,false);
	
}

if (selectedValue == "GUAT      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('GUATEMALA CITY','GTM',false,false);
	
}

if (selectedValue == "GNEA")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CONAKRY','CRY',false,false);
	
}

if (selectedValue == "GUY       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('GEORGETOWN','GEO',false,false);
	
}

if (selectedValue == "HAT       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PORT AU PRINCE','PTP',false,false);
	
}

if (selectedValue == "HOND      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TEGUCIGALPA','TGG',false,false);
	
}

if (selectedValue == "HNK       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('HONG KONG','HNK',false,false);
	
}

if (selectedValue == "HUNG      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BUDAPEST','BDP',false,false);
	
}

if (selectedValue == "ICLD      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('REYKJAVIK','RKJ',false,false);
	
}

if (selectedValue == "IND       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CHENNAI ( MADRAS)','MDR',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('HYDERABAD','HYD',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('KOLKATA (CALCUTTA)','CLC',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('MUMBAI (BOMBAY)','BMB',false,false);
	
	document.PostForm.PostCodeShow.options[5] = new Option('NEW DELHI','NWD',false,false);
	
}

if (selectedValue == "IDSA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('JAKARTA','JAK',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('SURABAYA','SRB',false,false);
	
}

if (selectedValue == "IRAQ      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ERBIL','ERB',false,false);
	
}

if (selectedValue == "IRE       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DUBLIN','DBL',false,false);
	
}

if (selectedValue == "ISRL      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TEL AVIV','TLV',false,false);
	
}

if (selectedValue == "ITLY      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('FLORENCE','FLR',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('MILAN','MLN',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('NAPLES','NPL',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('ROME','RME',false,false);
	
}

if (selectedValue == "JAM       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('Kingston, Jamaica','KNG',false,false);
	
}

if (selectedValue == "JPN")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('FUKUOKA','FKK',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('SAPPORO','SPP',false,false);
	
}

if (selectedValue == "JPN       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('NAHA','NHA',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('OSAKA/KOBE','KBO',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('TOKYO','TKY',false,false);
	
}

if (selectedValue == "JRSM      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('JERUSALEM','JRS',false,false);
	
}

if (selectedValue == "JORD      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('AMMAN','AMM',false,false);
	
}

if (selectedValue == "KAZ       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ALMATY','ATA',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('NUR-SULTAN','AST',false,false);
	
}

if (selectedValue == "KENY      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('NAIROBI','NRB',false,false);
	
}

if (selectedValue == "KSV")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PRISTINA','PRI',false,false);
	
}

if (selectedValue == "KUWT      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KUWAIT','KWT',false,false);
	
}

if (selectedValue == "KGZ       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BISHKEK','BKK',false,false);
	
}

if (selectedValue == "LAOS      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('VIENTIANE','VNT',false,false);
	
}

if (selectedValue == "LATV      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('RIGA','RGA',false,false);
	
}

if (selectedValue == "LEBN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BEIRUT','BRT',false,false);
	
}

if (selectedValue == "LES       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MASERU','MAS',false,false);
	
}

if (selectedValue == "LIBR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MONROVIA','MRV',false,false);
	
}

if (selectedValue == "LBYA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TRIPOLI','TRP',false,false);
	
}

if (selectedValue == "LITH      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('VILNIUS','VIL',false,false);
	
}

if (selectedValue == "LXM       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LUXEMBOURG','LXM',false,false);
	
}

if (selectedValue == "MADG      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ANTANANARIVO','ANT',false,false);
	
}

if (selectedValue == "MALW      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LILONGWE','LIL',false,false);
	
}

if (selectedValue == "MLAS      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KUALA LUMPUR','KLL',false,false);
	
}

if (selectedValue == "MALI      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BAMAKO','BAM',false,false);
	
}

if (selectedValue == "MLTA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('VALLETTA','VLL',false,false);
	
}

if (selectedValue == "MAUR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('NOUAKCHOTT','NUK',false,false);
	
}

if (selectedValue == "MRTS      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PORT LOUIS','PTL',false,false);
	
}

if (selectedValue == "MEX       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CIUDAD JUAREZ','CDJ',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('GUADALAJARA','GDL',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('HERMOSILLO','HER',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('MATAMOROS','MTM',false,false);
	
	document.PostForm.PostCodeShow.options[5] = new Option('MERIDA','MER',false,false);
	
	document.PostForm.PostCodeShow.options[6] = new Option('MEXICO CITY','MEX',false,false);
	
	document.PostForm.PostCodeShow.options[7] = new Option('MONTERREY','MTR',false,false);
	
	document.PostForm.PostCodeShow.options[8] = new Option('NOGALES','NGL',false,false);
	
	document.PostForm.PostCodeShow.options[9] = new Option('NUEVO LAREDO','NVL',false,false);
	
	document.PostForm.PostCodeShow.options[10] = new Option('TIJUANA','TJN',false,false);
	
}

if (selectedValue == "MLD       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CHISINAU','CHS',false,false);
	
}

if (selectedValue == "MONG      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ULAANBAATAR','ULN',false,false);
	
}

if (selectedValue == "MTG       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PODGORICA','POD',false,false);
	
}

if (selectedValue == "MORO      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CASABLANCA','CSB',false,false);
	
}

if (selectedValue == "MOZ       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MAPUTO','MAP',false,false);
	
}

if (selectedValue == "NAMB      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('WINDHOEK','WHK',false,false);
	
}

if (selectedValue == "NEP       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KATHMANDU','KDU',false,false);
	
}

if (selectedValue == "NETH      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('AMSTERDAM','AMS',false,false);
	
}

if (selectedValue == "NZLD      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('AUCKLAND','ACK',false,false);
	
}

if (selectedValue == "NIC       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MANAGUA','MNG',false,false);
	
}

if (selectedValue == "NIR       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('NIAMEY','NMY',false,false);
	
}

if (selectedValue == "NRA       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ABUJA','ABU',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('LAGOS','LGS',false,false);
	
}

if (selectedValue == "MKD       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SKOPJE','SKO',false,false);
	
}

if (selectedValue == "NIRE      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BELFAST','BLF',false,false);
	
}

if (selectedValue == "NORW      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('OSLO','OSL',false,false);
	
}

if (selectedValue == "OMAN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MUSCAT','MST',false,false);
	
}

if (selectedValue == "PKST      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ISLAMABAD','ISL',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('KARACHI','KRC',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('LAHORE','LHR',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('PESHAWAR','PSH',false,false);
	
}

if (selectedValue == "PAN       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PANAMA CITY','PNM',false,false);
	
}

if (selectedValue == "PNG       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PORT MORESBY','PTM',false,false);
	
}

if (selectedValue == "PARA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ASUNCION','ASN',false,false);
	
}

if (selectedValue == "PERU      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LIMA','LMA',false,false);
	
}

if (selectedValue == "PHIL      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MANILA ACS Appointment','MNL',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('MN2 U.S. CEBU Consular Agency','MN2',false,false);
	
}

if (selectedValue == "POL       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KRAKOW','KRK',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('','WRW',false,false);
	
}

if (selectedValue == "PORT")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PONTA DELGADA','PTD',false,false);
	
}

if (selectedValue == "PORT      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LISBON','LSB',false,false);
	
}

if (selectedValue == "QTAR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DOHA','DOH',false,false);
	
}

if (selectedValue == "KOR       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SE2 USCIS Appointment','SE2',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('SEOUL ACS Appointment','SEO',false,false);
	
}

if (selectedValue == "PALA")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KOROR','KOR',false,false);
	
}

if (selectedValue == "RMI       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MAJURO','MAJ',false,false);
	
}

if (selectedValue == "ROM       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BUCHAREST','BCH',false,false);
	
}

if (selectedValue == "RUS       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MOSCOW','MOS',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('ST PETERSBURG','SPT',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('VLADIVOSTOK','VLA',false,false);
	
	document.PostForm.PostCodeShow.options[4] = new Option('YEKATERINBURG','YEK',false,false);
	
}

if (selectedValue == "RWND      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KIGALI','KGL',false,false);
	
}

if (selectedValue == "WSAM      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('APIA','APA',false,false);
	
}

if (selectedValue == "SARB      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DHAHRAN','DHR',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('JEDDAH','JDD',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('RIYADH','RID',false,false);
	
}

if (selectedValue == "SENG      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DAKAR','DKR',false,false);
	
}

if (selectedValue == "SRB       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BELGRADE','BLG',false,false);
	
}

if (selectedValue == "SLEO      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('FREETOWN','FTN',false,false);
	
}

if (selectedValue == "SING      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SINGAPORE','SGP',false,false);
	
}

if (selectedValue == "SVK       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BRATISLAVA','BTS',false,false);
	
}

if (selectedValue == "SVN       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('LJUBLJANA','LJU',false,false);
	
}

if (selectedValue == "SAFR      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CAPE TOWN','CPT',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('DURBAN','DRB',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('JOHANNESBURG','JHN',false,false);
	
}

if (selectedValue == "SSDN")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('JUBA','JBA',false,false);
	
}

if (selectedValue == "SPN       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BARCELONA','BRC',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('MADRID','MDD',false,false);
	
}

if (selectedValue == "SRL       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('COLOMBO','CLM',false,false);
	
}

if (selectedValue == "SUDA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KHARTOUM','KHT',false,false);
	
}

if (selectedValue == "SURM      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PARAMARIBO','PRM',false,false);
	
}

if (selectedValue == "SWDN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('STOCKHOLM','STK',false,false);
	
}

if (selectedValue == "SWTZ      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BERN','BEN',false,false);
	
}

if (selectedValue == "SYR       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DAMASCUS','DMS',false,false);
	
}

if (selectedValue == "TWAN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KAOHSIUNG','KAO',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('TAIPEI','TAI',false,false);
	
}

if (selectedValue == "TJK       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DUSHANBE','DHB',false,false);
	
}

if (selectedValue == "TAZN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('DAR ES SALAAM','DRS',false,false);
	
}

if (selectedValue == "THAI      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BANGKOK','BNK',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('CHIANG MAI','CHN',false,false);
	
}

if (selectedValue == "GAM       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('BANJUL','BAN',false,false);
	
}

if (selectedValue == "TOGO      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('Lome - U.S. Citizen Services','LOM',false,false);
	
}

if (selectedValue == "TRIN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('PORT OF SPAIN','PTS',false,false);
	
}

if (selectedValue == "TNSA      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TUNIS','TNS',false,false);
	
}

if (selectedValue == "TRKY      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ADANA','ADA',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('ANKARA','ANK',false,false);
	
	document.PostForm.PostCodeShow.options[3] = new Option('ISTANBUL','IST',false,false);
	
}

if (selectedValue == "TKM")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ASHGABAT','AKD',false,false);
	
}

if (selectedValue == "UGAN      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KAMPALA','KMP',false,false);
	
}

if (selectedValue == "UKR       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('KYIV','KEV',false,false);
	
}

if (selectedValue == "UAE       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('ABU DHABI','ABD',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('DUBAI','DUB',false,false);
	
}

if (selectedValue == "URU       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('MONTEVIDEO','MTV',false,false);
	
}

if (selectedValue == "UZB       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('TASHKENT','THT',false,false);
	
}

if (selectedValue == "VENZ      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('CARACAS','CRS',false,false);
	
}

if (selectedValue == "VTNM      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('HANOI','HAN',false,false);
	
	document.PostForm.PostCodeShow.options[2] = new Option('HO CHI MINH CITY','HCM',false,false);
	
}

if (selectedValue == "YEM       ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);	
	document.PostForm.PostCodeShow.options[1] = new Option('SANAA','SAA',false,false);
	
}

if (selectedValue == "ZAMB      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
	document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);
	
	document.PostForm.PostCodeShow.options[1] = new Option('LUSAKA','LUS',false,false);
	
}

if (selectedValue == "ZIMB      ")
{
for (var q=document.PostForm.PostCodeShow.options.length;q>=0;q--)
	document.PostForm.PostCodeShow.options[q]=null;
	document.PostForm.PostCodeShow.options[0] = new Option(' أختر المدينة ','NON',false,false);
	
	document.PostForm.PostCodeShow.options[1] = new Option('HARARE','HRE',false,false);
	
}

document.PostForm.PostCodeShow.focus();
}

function validForm()
	{
		//alert(document.PostForm.CountryCodeShow.value);
		//alert(document.PostForm.PostCodeShow.value);
		if(document.PostForm.CountryCodeShow.value == "NON")
			{
				alert("لا يمكن تنفيذ الفحص بدون أختيار الدولة .");
				document.PostForm.CountryCodeShow.focus();
				return false;
			}
		if(document.PostForm.PostCodeShow.value == "NON")
			{
				alert("لا يمكن تنفيذ الفحص بدون أختيار المدينة .");
				document.PostForm.PostCodeShow.focus();
				return false;
			}

		return false;
	}