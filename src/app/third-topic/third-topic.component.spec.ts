import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTopicComponent } from './third-topic.component';

describe('ThirdTopicComponent', () => {
  let component: ThirdTopicComponent;
  let fixture: ComponentFixture<ThirdTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
