import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFrameComponent } from './anime-frame.component';

describe('AnimeFrameComponent', () => {
  let component: AnimeFrameComponent;
  let fixture: ComponentFixture<AnimeFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
