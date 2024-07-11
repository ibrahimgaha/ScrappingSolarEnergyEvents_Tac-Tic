from bs4 import BeautifulSoup as bs
from urllib.request import urlopen
from .models import Event  
from django.http import JsonResponse

def scrape_data(request):
    URL = "https://www.solarpowereurope.org/events"
    client = urlopen(URL)
    Html = client.read()
    client.close()

    soup = bs(Html, 'lxml')
    containers = soup.find_all("div", {"class": "events-list__row"})
    data=[]
    for i in containers:
        E_title = i.find_all("h3", {"class": "events-list__title"})
        Event_title = E_title[0].text.strip()

        E_location = i.find_all("p", {"class": "events-list__location"})
        Event_location = E_location[0].text.strip()

        E_date = i.find_all("div", {"class": "events-list__date"})  
        Event_date = E_date[0].text.strip()

        E_Description = i.find_all("div", {"class": "events-list__text"})  
        Event_Description = E_Description[0].text.strip()

        # Now, find the image URL within the current container 'i'
        image = i.find('div', class_='events-list__image') 
        style_attr = image.get('style')

        start_index = style_attr.find('url("') + len('url("')
        end_index = style_attr.find('")', start_index)
        image_url = style_attr[start_index:end_index]
        image_url=image_url[17:-1]
        
       
       # if not Event.objects.filter(title=Event_title).exists():
            # Create a new Event model instance and save it to the database
        event = Event(
            title=Event_title,
            location=Event_location,
            date=Event_date,
            description=Event_Description,
            image_url=image_url
        )
        event.save()

        event_data = {
            'title': Event_title,
            'location': Event_location,
            'date': Event_date,
            'description': Event_Description,
            'image_url': image_url
        }

        data.append(event_data)  # Append event data to the list

    return JsonResponse({'events': data})
            
            
          

    



