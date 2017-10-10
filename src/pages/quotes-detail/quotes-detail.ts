import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/*
  Generated class for the QuotesDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
// @IonicPage()
@Component({
  selector: 'page-quotes-detail',
  providers: [GoogleAnalytics],
  templateUrl: 'quotes-detail.html'
})
export class QuotesDetailPage {

  quoteDetail: {quote:'', author:''};

  constructor(private navCtrl: NavController,private sharingVar: SocialSharing, private navParams: NavParams, private googleAnalytics:GoogleAnalytics) {
    this.quoteDetail = navParams.get('quote');
    this.googleAnalytics.trackView("Quotes Detail");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetailPage');
  }

  twitterShare(){
    console.log("in twitter share");
    let quote: string = this.quoteDetail.quote;
    this.sharingVar.shareViaTwitter(quote.substring(0,110)+"..",null /*Image*/,"http://ionicframework.com/img/homepage/ionicview-icon_2x.png")
    .then((data )=>{
        alert("Success "+data);
        let quoteAuthor: string = this.quoteDetail.author;
        this.googleAnalytics.trackEvent("Quotes", "Share", quoteAuthor, 1);
      },

      (err)=>{
         alert("failed "+err)
      })
  }


}
