import {Component, OnInit} from '@angular/core';
import {IAdress} from '../model/IAdress';
import {ClientService} from '../client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  addresses: IAdress;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.addresses = this.route.snapshot.data.addresses;
  }

}
