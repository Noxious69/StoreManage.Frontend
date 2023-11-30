import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptylistComponent } from './emptylist.component';

describe('EmptylistComponent', () => {
  let component: EmptylistComponent;
  let fixture: ComponentFixture<EmptylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptylistComponent]
    });
    fixture = TestBed.createComponent(EmptylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
