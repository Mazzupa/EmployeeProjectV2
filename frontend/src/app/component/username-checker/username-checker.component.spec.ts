import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameCheckerComponent } from './username-checker.component';

describe('UsernameCheckerComponent', () => {
  let component: UsernameCheckerComponent;
  let fixture: ComponentFixture<UsernameCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
