import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { provideMockStore } from '@ngrx/store/testing';

import { CommerceTableComponent } from './commerce-table.component';
import {
  commerceFeatureKey,
  initialState,
} from '../../store/reducers/commerce.reducer';

describe('CommerceTableComponent', () => {
  let component: CommerceTableComponent;
  let fixture: ComponentFixture<CommerceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommerceTableComponent],
      imports: [CommonModule, MatButtonModule, MatTableModule],
      providers: [
        provideMockStore({
          initialState: {
            [commerceFeatureKey]: initialState,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceTableComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
