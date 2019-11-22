import { Component, OnInit } from '@angular/core';
import {data} from '../aircraftData';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {IAircraftApi} from '../interfaces/dataInterface';
import {faUserCog, faArrowsAltH, faArrowsAltV} from '@fortawesome/free-solid-svg-icons';
import {DetailsDialogComponent} from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.scss']
})
export class AircraftListComponent implements OnInit {

  constructor( private dialog: MatDialog) { }
    data: IAircraftApi[];
    faUserCog = faUserCog;
    faArrowAltH = faArrowsAltH;
    faArrowAltV = faArrowsAltV;

    openDialog(aircraft: IAircraftApi) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.data = aircraft;
      this.dialog.open(DetailsDialogComponent, dialogConfig);
    }
  ngOnInit() {
    this.data = data;
  }

}
