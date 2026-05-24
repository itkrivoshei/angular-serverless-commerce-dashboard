import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CommerceTableComponent } from './commerce-table.component';
import { commerceFeatureKey, initialState } from '../../store/reducers/commerce.reducer';

describe('CommerceTableComponent', () => {
  let component: CommerceTableComponent;
  let fixture: ComponentFixture<CommerceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommerceTableComponent],
      providers: [
        provideMockStore({
          initialState: {
            [commerceFeatureKey]: initialState,
          },
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceTableComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
