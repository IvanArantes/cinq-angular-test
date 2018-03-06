import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() titulo: String;
  @Input() body: String;
  @Output() confirmEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    this.confirmEvent.emit(true);
  }

}
