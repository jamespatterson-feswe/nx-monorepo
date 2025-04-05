import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
  });

  it('should render title', () => {
    expect(app).toBeTruthy();
  });
});
