import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: any = {};
  categoryNames: string[] = [];
  allData: any = {};
  selectedCategoryName = '';
  sources = ['travel.html', 'tele.html', 'automobile.html', 'merch.html'];
  offerIndex = -1;
  categoryIndex = 0;
  srcFile = this.sources[0];
  display: Boolean = false;
  currentOfferToDisplay: any = {};
  currentUrl: any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  //    configUrl = 'assets/config.json';

  //  getConfig() {
  //    return this.http.get(this.configUrl);
  //  }

  ngOnInit() {
    this.sanitizeUrl('../../assets/Offers/' + this.srcFile);
    // get the data
    this.http.get('../../assets/Offers/data/data.json')
      .subscribe(
        (result: any) => {

          this.allData = result;
          console.log(`this.allData : ${this.allData}`);


          //  selectedCategoryName = result.discounts
          console.log(this.allData.discounts);
          result.discounts.forEach(element => {
            // console.log(element.options);
            // console.log(element.CategoryName);
            this.categoryNames.push(element.CategoryName);
            if (element.CategoryName === 'Travel') {
              // console.log(element.options);
              this.offers = element.options;
              this.offerIndex = 0;
            }
          });
          console.log(this.offers);

        });
  }

  changeCategory(category) {

    let currentOffersInCategory = {};
    this.allData.discounts.forEach((element, index) => {
      if (element.CategoryName === category) {
        currentOffersInCategory = element.options;
        this.offerIndex = 0;
        this.categoryIndex = index;
        console.log(this.categoryIndex);

      }
    });

    this.offers = currentOffersInCategory;
    this.srcFile = this.sources[this.categoryIndex];

    console.log(this.srcFile);
    this.sanitizeUrl('../../assets/Offers/' + this.srcFile);

    //  _render()
  }

  sanitizeUrl(url) {
    // url = url.replace('html', this.srcFile);
    console.log('is running?', url);
    // if (url !== this.currentUrl) {
      this.currentUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // }
  }

  @HostListener('window:message', ['$event'])
  onMessage(e) {
    // if (e.origin != "*") {
    //   return false;
    // }
    if (e.data.for === 'user') {
      console.log('here i am');
      console.log(e.data.data);
      let data = e.data.data;
      data = data.replace('hc_', '');
      // console.log(data);

      this.showDeal(data);


    }
  }

  showDeal(data) {
    this.currentOfferToDisplay = {};
    this.offers.forEach((element, index) => {
      if (element.Name === data) {
        this.currentOfferToDisplay = element;
        this.offerIndex = index;
      }
    });

    this.display = true;
  }

  hide() {
    this.display = false;
  }

}
