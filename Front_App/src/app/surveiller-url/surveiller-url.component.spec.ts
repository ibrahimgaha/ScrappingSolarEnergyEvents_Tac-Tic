import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillerUrlComponent } from './surveiller-url.component';

describe('SurveillerUrlComponent', () => {
  let component: SurveillerUrlComponent;
  let fixture: ComponentFixture<SurveillerUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveillerUrlComponent]
    });
    fixture = TestBed.createComponent(SurveillerUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
