import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() titulo: String;
  @Input() body: String;
  @Input() openModal: boolean;
  @Output() confirmEvent = new EventEmitter<boolean>();
  @Output() deniedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    this.confirmEvent.emit(true);
  }

  deny() {
    this.deniedEvent.emit(false);
  }

}
