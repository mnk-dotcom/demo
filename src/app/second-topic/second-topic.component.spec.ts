import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTopicComponent } from './second-topic.component';

describe('SecondTopicComponent', () => {
  let component: SecondTopicComponent;
  let fixture: ComponentFixture<SecondTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
