import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicRepresentationComponent } from './arabic-representation.component';

describe('ArabicRepresentationComponent', () => {
  let component: ArabicRepresentationComponent;
  let fixture: ComponentFixture<ArabicRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArabicRepresentationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct text representation for the number', () => {
    const result = component.textRepresentation(32);
    expect(result).toEqual('فقط أثنان و ثلاثون جنيها مصريا لا غير');
  });

  it('should return the correct grammar representation for the number', () => {
    let result = component.textRepresentation(32);
    expect(result).toContain('جنيها مصريا');

    result = component.textRepresentation(20);
    expect(result).toContain('جنيها مصريا');

    result = component.textRepresentation(1000);
    expect(result).toContain('جنيه مصري');
  });
});
