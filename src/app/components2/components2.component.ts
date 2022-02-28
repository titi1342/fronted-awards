import { Component, OnInit, Directive, Input } from '@angular/core';
import { SimpleSmoothScrollService, ISimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
@Component({
  selector: 'app-components2',
  templateUrl: './components2.component.html',
  styleUrls: ['./components2.component.css']
})
export class Components2Component implements OnInit {
 

  
@Directive({
  selector: '[appContenteditableModel]'
 })

  showFlag: boolean = false;
  selectedImageIndex: number = -1;
  currentIndex: number | undefined;

  @Input()
  appContenteditableModel: string | undefined;

  constructor(private smooth: SimpleSmoothScrollService) { }

  showLightbox(index: number) {
    this.selectedImageIndex = index;
    this.showFlag = true;
}

closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
}

imageObject: Array<object> = [{
  image: 'assets/video/video_thumbnail.jpg',
}, {
  image: 'assets/video/video_thumbnail.jpg', 
} 
];
  ngOnInit(): void {
    this.smooth.smoothScrollToAnchor();
  }

  goTop(){
    this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
  }

}
