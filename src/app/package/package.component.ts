import { Component, OnInit } from '@angular/core';
import { PackagelistService } from './packagelist.service';
import { Package } from '../add-package/package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packages: Package[];

  constructor(private pService: PackagelistService) { }

  ngOnInit() {
    this.pService.getData().subscribe((data: Package[]) => {
      this.packages = data;
    });
  }

}
