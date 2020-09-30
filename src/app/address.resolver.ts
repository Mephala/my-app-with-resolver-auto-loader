import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IAdress} from './model/IAdress';
import {Observable} from 'rxjs';
import {ClientService} from './client.service';

@Injectable()
export class AddressResolver implements Resolve<IAdress> {

  constructor(private clientService: ClientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAdress> | Promise<IAdress> | IAdress {
    return this.clientService.getAddress();
  }

}
