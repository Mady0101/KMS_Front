import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeyFormComponent } from './add-key-form.component';

describe('AddKeyFormComponent', () => {
  let component: AddKeyFormComponent;
  let fixture: ComponentFixture<AddKeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKeyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
