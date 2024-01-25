import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCasasComponent } from './nav-casas.component';

describe('NavCasasComponent', () => {
  let component: NavCasasComponent;
  let fixture: ComponentFixture<NavCasasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavCasasComponent]
    });
    fixture = TestBed.createComponent(NavCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
