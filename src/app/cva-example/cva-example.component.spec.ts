import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaExampleComponent } from './cva-example.component';

describe('CvaExampleComponent', () => {
  let component: CvaExampleComponent;
  let fixture: ComponentFixture<CvaExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
