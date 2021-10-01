import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UserApiService } from "../../core/services/user-api.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserOutput } from "../../core/models/outputs/userOutput";

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit, AfterViewInit {
  @ViewChild('tutorForm', { static: false }) tutorForm!: NgForm;
  tutorData: UserOutput;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'topics', 'languages', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isEditMode = false;
  isFiltering = false;

  constructor(private userApi: UserApiService, private router: Router) {
    this.tutorData = {} as UserOutput;
  }

  ngOnInit(): void {
    this.getAllTutors();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.isFiltering = !!filterValue;
  }

  getAllTutors(): void {
    this.userApi.getAllUsers().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  navigateToTutor(userId: number): void {
    this.router.navigate([`/users/${userId}`])
      .then(() => console.log('Navigated to Tutor'));
  }

  refresh(): void {
    console.log('about to reload');
    this.getAllTutors();
  }

}
