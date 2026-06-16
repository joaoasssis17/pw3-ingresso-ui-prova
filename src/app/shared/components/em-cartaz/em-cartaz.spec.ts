import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmCartaz } from './em-cartaz';

describe('EmCartaz', () => {
  let component: EmCartaz;
  let fixture: ComponentFixture<EmCartaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmCartaz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmCartaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
