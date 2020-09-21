import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon, circle } from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 16,
    center: latLng(2.919090, 101.688625),
  };
  layers = [
    //circle([ 2.919090, 101.688625], { radius: 50 }),
    // polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
   marker([2.919090, 101.688625], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/map-marker-512.png",
      }),
    }),
    
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
