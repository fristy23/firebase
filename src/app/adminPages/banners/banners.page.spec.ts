import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannersPage } from './banners.page';

describe('BannersPage', () => {
  let component: BannersPage;
  let fixture: ComponentFixture<BannersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BannersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
