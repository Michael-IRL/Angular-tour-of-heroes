import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-form-response',
  templateUrl: './form-response.component.html',
  styleUrls: ['./form-response.component.less'],
})
export class FormResponseComponent implements OnInit {
  @Output() editClicked = new EventEmitter();

  @Input() hero?: Hero;

  constructor() {}

  ngOnInit(): void {}

  onEditClick(): void {
    console.log('edit clicked');
    this.editClicked.emit();
  }
}
