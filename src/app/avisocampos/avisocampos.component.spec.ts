import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisocamposComponent } from './avisocampos.component';

describe('AvisocamposComponent', () => {
  let component: AvisocamposComponent;
  let fixture: ComponentFixture<AvisocamposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisocamposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisocamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
