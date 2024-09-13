import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialNetworks } from '../interfaces/networks.interface';

@Injectable({
  providedIn: 'root'
})
export class NetworksService {

  cargada = false;
  dataNetworks: SocialNetworks[] = [];

  constructor( private http: HttpClient ) {
    this.getNetworksData();
  }

  private getNetworksData() {
    this.http.get<SocialNetworks[]>('https://portfolio-web-bd37a-default-rtdb.firebaseio.com/networks.json')
      .subscribe( (response: SocialNetworks[])=> {
        this.cargada = true;
        this.dataNetworks = response;
      })
  }

}
