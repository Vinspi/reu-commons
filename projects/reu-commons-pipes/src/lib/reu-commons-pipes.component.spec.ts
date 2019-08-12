import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuCommonsPipesComponent } from './reu-commons-pipes.component';

describe('ReuCommonsPipesComponent', () => {
  let component: ReuCommonsPipesComponent;
  let fixture: ComponentFixture<ReuCommonsPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuCommonsPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuCommonsPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
