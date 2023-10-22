import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertneworderComponent } from './insertneworder.component';

describe('InsertneworderComponent', () => {
  let component: InsertneworderComponent;
  let fixture: ComponentFixture<InsertneworderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertneworderComponent]
    });
    fixture = TestBed.createComponent(InsertneworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
