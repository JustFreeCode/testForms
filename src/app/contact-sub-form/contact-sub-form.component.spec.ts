import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSubFormComponent } from './contact-sub-form.component';

describe('ContactSubFormComponent', () => {
  let component: ContactSubFormComponent;
  let fixture: ComponentFixture<ContactSubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSubFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
