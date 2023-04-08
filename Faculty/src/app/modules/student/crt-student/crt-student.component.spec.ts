import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtStudentComponent } from './crt-student.component';

describe('CrtStudentComponent', () => {
  let component: CrtStudentComponent;
  let fixture: ComponentFixture<CrtStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrtStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
