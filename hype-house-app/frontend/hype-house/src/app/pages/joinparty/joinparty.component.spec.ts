import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinpartyComponent } from './joinparty.component';

describe('JoinpartyComponent', () => {
  let component: JoinpartyComponent;
  let fixture: ComponentFixture<JoinpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinpartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
