import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSubFormComponent } from './name-sub-form.component';

describe('NameSubFormComponent', () => {
  let component: NameSubFormComponent;
  let fixture: ComponentFixture<NameSubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameSubFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameSubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
