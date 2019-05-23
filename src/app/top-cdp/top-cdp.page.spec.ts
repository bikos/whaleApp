import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCdpPage } from './top-cdp.page';

describe('TopCdpPage', () => {
  let component: TopCdpPage;
  let fixture: ComponentFixture<TopCdpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCdpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCdpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
