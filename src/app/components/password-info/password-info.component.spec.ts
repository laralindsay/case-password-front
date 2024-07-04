import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInfoComponent } from './password-info.component';

describe('PasswordInfoComponent', () => {
  let component: PasswordInfoComponent;
  let fixture: ComponentFixture<PasswordInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
