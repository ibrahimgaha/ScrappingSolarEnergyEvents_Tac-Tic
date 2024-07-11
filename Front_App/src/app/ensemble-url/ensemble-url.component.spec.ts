import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsembleUrlComponent } from './ensemble-url.component';

describe('EnsembleUrlComponent', () => {
  let component: EnsembleUrlComponent;
  let fixture: ComponentFixture<EnsembleUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnsembleUrlComponent]
    });
    fixture = TestBed.createComponent(EnsembleUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
