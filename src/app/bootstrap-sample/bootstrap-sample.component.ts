import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bootstrap-sample',
  templateUrl: './bootstrap-sample.component.html',
  styleUrls: ['./bootstrap-sample.component.scss']
})
export class BootstrapSampleComponent {

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
