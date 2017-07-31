import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ChannelCard } from 'app/models/channel-card';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    let self = this;
    this.http.get('/assets/data/data.json').subscribe(
      (data) => { self.parseData(data.json()) },
      (err) => { }
    );
  }

  parseData(json: any) {
    if (json && json['cards']) {
      let cards: any[] = json['cards'];
      cards.forEach((item) => {
        if (item['template'] === 'channels') {
          let res = this.processChannelCard(item['collection']);
          console.log(res);
        }
      })
    }
  }

  processSummaryCard(colletion: any[]) {

  }

  processSummaryPage() {

  }

  processChannelCard(collection: any[]) {
    let bullets: any = {};
    let donut: any = {};

    if (Object.prototype.toString.call(collection) === '[object Array]') {
      collection.forEach((item, index) => {

        let data: any = item['data'];
        if (data) {
          for (let param in data) {
            let day: any[] = Object.keys(data[param]) || [];
            if (data[param][day[0]]) {
              let dataObj: any[] = Object.keys(data[param][day[0]]) || [];
              dataObj.forEach(d => {
                if (index === 0) {
                  donut[d] = data[param][day[0]][d]
                } else if (index === 1){
                  if (bullets[d]) {
                    bullets[d][param] = [data[param][day[0]][d]];
                  } else {
                    bullets[d] = {};
                    bullets[d][param] = [data[param][day[0]][d]];
                  }
                }
              })
            }
          }
        }

      })

    }
    console.log(bullets, donut);
    debugger;
    return {'bullets': bullets, 'donut': donut};
    //let card: ChannelCard = new ChannelCard(bullets, donut);
    //return card;
  }

  processChannelPage() {

  }

}
