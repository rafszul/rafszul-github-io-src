import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubnavComponent } from './header-subnav.component';

describe('HeaderSubnavComponent', () => {
  let component: HeaderSubnavComponent;
  let fixture: ComponentFixture<HeaderSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
