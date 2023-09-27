import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  startQuiz() {
    this.router.navigate(['/question']);
    console.log("Baba")
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }

}
