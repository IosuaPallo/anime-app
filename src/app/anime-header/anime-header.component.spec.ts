import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeHeaderComponent } from './anime-header.component';

describe('AnimeHeaderComponent', () => {
  let component: AnimeHeaderComponent;
  let fixture: ComponentFixture<AnimeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
