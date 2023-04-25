import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingAnimeComponent } from './ongoing-anime.component';

describe('OngoingAnimeComponent', () => {
  let component: OngoingAnimeComponent;
  let fixture: ComponentFixture<OngoingAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
