import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAnimeComponent } from './popular-anime.component';

describe('PopularAnimeComponent', () => {
  let component: PopularAnimeComponent;
  let fixture: ComponentFixture<PopularAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
