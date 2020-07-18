import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTopicComponent } from './first-topic.component';

describe('FirstTopicComponent', () => {
  let component: FirstTopicComponent;
  let fixture: ComponentFixture<FirstTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
