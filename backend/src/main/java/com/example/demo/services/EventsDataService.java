package com.example.demo.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.dto.EventsDataDto;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;

@Component("eventsDataService")
public class EventsDataService {
    public List<EventsDataDto> retrieveEventsData() {

        List<EventsDataDto> eventsData = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://todoindie.com/conciertos/almeria/").get();
            Element table = webPage.getElementById("pt-cv-view-a2b2022sg8").getElementsByTag("div").get(0);

            List<Element> divs = table.getElementsByClass("pt-cv-content-item");

            for (Element div : divs) {
                String image = div.getElementsByTag("img").get(0).attr("data-cvpsrc");
                String url = div.getElementsByTag("h4").get(0).getElementsByTag("a").attr("href");
                String event = div.getElementsByTag("h4").get(0).getElementsByTag("a").text();
                
                eventsData.add(new EventsDataDto(image, event, url));
            }
            return eventsData;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
