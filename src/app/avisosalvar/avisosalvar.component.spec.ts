import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosalvarComponent } from './avisosalvar.component';

describe('AvisosalvarComponent', () => {
  let component: AvisosalvarComponent;
  let fixture: ComponentFixture<AvisosalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisosalvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
