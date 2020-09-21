import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  imgLogo = 'assets/img/logo/ST.png'
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
