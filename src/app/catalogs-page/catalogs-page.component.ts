import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/dta.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DropdownService } from '../shared/dropdown.service';

@Component({
  selector: 'catalogs-page',
  templateUrl: './catalogs-page.component.html',
  styleUrls: ['./catalogs-page.component.css']
})
export class CatalogsPageComponent implements OnInit, OnDestroy{

  catalogData: {catalog: string, state: string, school: string};

  subscription: Subscription;

  ngOnInit(): void {
    this.catalogData = {
      catalog: this.dta.catalogs[this.route.snapshot.params["catalog"]],
      state: this.dta.getStates()[this.route.snapshot.params["state"]],
      school: this.dta.getSchools(this.dta.getStates()[this.route.snapshot.params["state"]])[this.route.snapshot.params["school"]]
    };
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.catalogData.catalog = this.dta.catalogs[params["catalog"]],
      this.catalogData.state = this.dta.getStates()[params["state"]],
      this.catalogData.school = this.dta.getSchools(this.dta.getStates()[params["state"]])[params["school"]]
    })

    this.ddService.pageChecker.emit(true);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.ddService.pageChecker.emit(false);

  }

  constructor(private dta: DataService, private route: ActivatedRoute, private ddService: DropdownService){}
}
