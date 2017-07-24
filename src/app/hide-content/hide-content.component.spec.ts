import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideContentComponent } from './hide-content.component';

describe('HideContentComponent', () => {
  let component: HideContentComponent;
  let fixture: ComponentFixture<HideContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
