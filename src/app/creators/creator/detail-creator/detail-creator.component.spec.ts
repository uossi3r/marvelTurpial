import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCreatorComponent } from './detail-creator.component';

describe('DetailCreatorComponent', () => {
  let component: DetailCreatorComponent;
  let fixture: ComponentFixture<DetailCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
