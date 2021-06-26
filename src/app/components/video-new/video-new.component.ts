import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-new',
  templateUrl: './video-new.component.html',
  styleUrls: ['./video-new.component.css']
})
export class VideoNewComponent implements OnInit {
  public pageTitle: string;

  constructor() {
    this.pageTitle = 'Guardar nuevo video favorito';
   }

  ngOnInit(): void {
  }

}
