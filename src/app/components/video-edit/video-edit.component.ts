import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Video } from 'src/app/models/video';
import { UserService } from 'src/app/services/user.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: '../video-new/video-new.component.html',
  styleUrls: ['./video-edit.component.css'],
  providers: [UserService, VideoService]
})
export class VideoEditComponent implements OnInit {
  public pageTitle: string;
  public identity;
  public token;
  public video: Video;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _videoService: VideoService
  ) {
    this.pageTitle = 'Modificar video favorito';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.video = new Video(1, this.identity.sub, '', '', '', '', null, null);
    this.getVideo();
  }

  getVideo() {
    this._route.params.subscribe(params => {
      var id = +params['id'];

      this._videoService.getVideo(this.token, id).subscribe(
        response => {
          console.log(response);
          
          if(response.status == 'success') {
            this.video = response.data;
          } else {
            this._router.navigate(['/inicio']);
          }
        },
        error => {
          console.log(error);
          this.status = 'error';
        }
      );
    });
  }

  onSubmit(form) {
    this._videoService.update(this.token, this.video).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this._router.navigate(['/inicio']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

}
