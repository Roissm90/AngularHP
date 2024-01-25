import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaritaComponent } from './varita.component';

describe('VaritaComponent', () => {
  let component: VaritaComponent;
  let fixture: ComponentFixture<VaritaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaritaComponent]
    });
    fixture = TestBed.createComponent(VaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
