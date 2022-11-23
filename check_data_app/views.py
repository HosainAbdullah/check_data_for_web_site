from django.shortcuts import render , redirect , HttpResponse
import requests
import bs4 as bs
from .send_email import sendEmail
import time
# Create your views here.



def Home(request):
    if request.method == 'POST':
        country = request.POST.get('country' , '')
        city = request.POST.get('city' , '')
        checkWeb(country=country ,city=city)
        print(country)
        print(city)
    return render(request , 'home.html',)
    
def checkWeb(country , city):
        try:
            session = requests.Session()
            urlPageOne = "https://evisaforms.state.gov/Instructions/ACSSchedulingSystem.asp"
            urlPageTwe = "https://evisaforms.state.gov/acs/default.asp"
            urlPageThere = "https://evisaforms.state.gov/acs/make_default.asp"
            urlPageFore = "https://evisaforms.state.gov/acs/make_check_validate.asp"

            responsePageOne = session.get(urlPageOne)
            contentPageOne = bs.BeautifulSoup(responsePageOne.text , 'html.parser')
            tokenValue = contentPageOne.find('input' , {"name":"CSRFToken"}).get('value')
            print(tokenValue)
            
            parameterUrlTow = {'CSRFToken':tokenValue , 'PostCode':city , 'CountryCode':country , 'CountryCodeShow':'' , 'PostCodeShow':'', 'Submit':'Submit'}
            responsePageTwo = session.get(urlPageTwe , params=parameterUrlTow)
            print(responsePageTwo.url)
            print(responsePageTwo.status_code)
            
            parameterUrlThere = {'pc':city,'CSRFToken':tokenValue}
            responsePageThere = session.get(urlPageThere , params=parameterUrlThere)
            print(responsePageThere.url)
            print(responsePageThere.status_code)
            
            parameterUrlFore = {'pc':city}
            parameterUrlForeData = {'chkservice':'AA' , 'chkbox01':'on' , 'CSRFToken':tokenValue , 'hidtypechkcnt':3 ,'myTypeCount':3}
            responsePageFore = session.post(urlPageFore , params=parameterUrlFore , data=parameterUrlForeData)
            print(responsePageFore.url)
            print(responsePageFore.status_code)
            
            url = 'https://evisaforms.state.gov/acs/make_calendar.asp'
            par = {'type':1 , 'servicetype':'AA' , 'pc':city,'CSRFToken':tokenValue}
            response= session.get(url , params=par)
            soup = bs.BeautifulSoup(response.text , 'html.parser')
            
            listTd = soup.find_all("td" , class_="formfield" , bgcolor="#ffffc0") # #ADD9F4
            countAvailable = 0

            for td in listTd:
                    countAvailable = countAvailable + 1

            if listTd:
                    print("The list is not empty")
                    sendEmail(countAvailable)
                    print(countAvailable)
            else:
                    print("the list empty")

            
        except Exception as e:
            print(e)
    
