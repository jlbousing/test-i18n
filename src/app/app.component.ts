import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-i18n';

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      const locale = this.router.url.split('/')[1];
      console.log(locale);
      if (locale) {
        this.translateService.setDefaultLang(locale);
        this.translateService.use(locale);
        this.translateService.getTranslation(locale)
          .subscribe((response: any) => console.log(response));
          
      }
    });
  }
}