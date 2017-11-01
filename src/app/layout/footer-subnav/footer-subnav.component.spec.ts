import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSubnavComponent } from './footer-subnav.component';

describe('FooterSubnavComponent', () => {
  let component: FooterSubnavComponent;
  let fixture: ComponentFixture<FooterSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
