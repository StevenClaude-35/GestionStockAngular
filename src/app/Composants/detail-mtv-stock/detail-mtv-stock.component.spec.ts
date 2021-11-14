import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMtvStockComponent } from './detail-mtv-stock.component';

describe('DetailMtvStockComponent', () => {
  let component: DetailMtvStockComponent;
  let fixture: ComponentFixture<DetailMtvStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMtvStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMtvStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
