import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carousel } from './carousel.component';


describe('CarouselComponent', () => {
  let component: Carousel;
  let fixture: ComponentFixture<Carousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carousel]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
