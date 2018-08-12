import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: any = {};
  allData: any = [
      {
        'departmentName' : 'T&O',
        'groups' : [
            {
              'name' : 'GP1',
              'tags' : ['machine learning', 'inheritence'],
              'memberCount' : 23
            },
            {
              'name' : 'GP2',
              'tags' : ['network security'],
              'memberCount' : 56
            }
        ]
      },
      {
        'departmentName' : 'Capital MArkets',
        'groups' : [
            {
              'name' : 'GP3',
              'tags' : ['CPA'],
              'memberCount' : 200
            }
        ]
      }
    ];
  departments: string[] = [];
  currentDepartment: any = {};
  selectedCategoryName = '';
  offerIndex = -1;
  categoryIndex = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      // get the data
      // this.http.get('')
      //     .subscribe(
      //         (result: any) => {
      //             this.allData = result;
      //             console.log(this.allData);
      //         });

      this.allData.forEach(element => {
        this.departments.push(element.departmentName);
        if (element.departmentName === 'T&O') {
          this.currentDepartment = element;
        }
      });
  }

  changeDepartment(departmentName) {
      this.allData.forEach(element => {
          if (element.departmentName == departmentName) {
              this.currentDepartment = element;
          }
      });
  }




}
