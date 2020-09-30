import { Component, OnInit } from '@angular/core';
import {IAdress} from '../model/IAdress';
import {ClientService} from '../client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  addresses: IAdress;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.addresses = this.route.snapshot.data.addresses;
  }

}
