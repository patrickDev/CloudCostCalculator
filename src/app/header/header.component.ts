import { Component, OnInit } from '@angular/core';
import { AWSUtilsService } from '../services/AWS-utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // public allRegions = ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2', 'af-south-1',
  // 'ap-east-1', 'ap-south-1', 'ap-northeast-2', 'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1', 
  // 'ca-central-1', 'eu-central-1', 'eu-west-1', 'eu-west-2', 'eu-south-1', 'eu-west-3', 'eu-north-1',
  // 'me-south-1', 'sa-east-1'];

  // public currentRegion:string;

  constructor() { }

  ngOnInit(): void {
  }
}
