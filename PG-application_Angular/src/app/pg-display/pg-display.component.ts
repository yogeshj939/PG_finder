import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PG } from '../pg';
import { PgServiceService } from '../pg-service.service';
 
@Component({
  selector: 'app-pg-display',
  templateUrl: './pg-display.component.html',
  styleUrls: ['./pg-display.component.css']
})
export class PgDisplayComponent implements OnInit {

  pgs :  any = []

  constructor(private router: Router, private pgService : PgServiceService) {

  }

  ngOnInit() {
    this.pgService.getPg()
      .subscribe( data => {
        this.pgs = data;
        console.log(data)
      });
  };

  deletePg(pg: PG): void {
    this.pgService.deletePg(pg)
      .subscribe( data => {
        this.pgs = this.pgs.filter(u => u !== pg);
      })
  };

}
