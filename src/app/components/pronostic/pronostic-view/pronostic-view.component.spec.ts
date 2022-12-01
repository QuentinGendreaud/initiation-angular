import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { Match } from 'src/app/interfaces/match.model';
import { User } from 'src/app/interfaces/user.model';
import { MatchService } from 'src/shared/services/match.service';
import { UserService } from 'src/shared/services/user.service';
import { PronosticComponent } from '../pronostic/pronostic.component';

import { PronosticViewComponent } from './pronostic-view.component';

const mockUser: User = {
  id: 12345,
  activation: true,
  firstname: 'mock firstName',
  habilitation: 1,
  lastname: 'mock lastName',
  login: 'root',
  password: 'rootgetUser'
}

const mockMatchValue: Match[] = [
  {
    id: 1,
    scoreTeamA: 0,
    scoreTeamB: 0,
    startDate: new Date("2022-11-21T17:24:06.082Z"),
    teamAId: 1,
    teamBid: 2,
    pronostics: [],
    teamA: {
      flagUrl: 'franceFlag',
      id: 1,
      name: 'France'
    },
    teamB: {
      flagUrl: 'brasilFlag',
      id: 1,
      name: 'Brasil'
    }
  }
]

fdescribe('PronosticViewComponent', () => {
  let component: PronosticViewComponent;
  let fixture: ComponentFixture<PronosticViewComponent>;
  let mockUserService: any = {};
  let mockMatchService: any = {};

  beforeEach(async () => {
    // Mock services behaviours
    // Mock User service
    mockUserService = jasmine.createSpyObj(['getUser']);
    (mockUserService.getUser as jasmine.Spy).and.returnValues(mockUser)

    // Mock Match service
    mockMatchService = jasmine.createSpyObj(['getUsersPronostics']);
    (mockMatchService.getUsersPronostics as jasmine.Spy).and.returnValues(of(mockMatchValue));
    
    await TestBed.configureTestingModule({
      declarations: [ PronosticViewComponent, PronosticComponent ],
      imports: [ MatCardModule ],
      providers: [
        { provide: UserService, useValue: mockUserService},
        { provide: MatchService, useValue: mockMatchService},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronosticViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should check ngOnInit behaviour', () => {
    it('with a connected user', () => {
      expect(mockUserService.getUser).toHaveBeenCalled();
      expect(mockMatchService.getUsersPronostics).toHaveBeenCalledWith(12345);
    });
    
    it('with no connected user', () => {
      // Override user spy
      (mockUserService.getUser as jasmine.Spy).and.returnValue(undefined);
      (mockUserService.getUser as jasmine.Spy).calls.reset();
      (mockMatchService.getUsersPronostics as jasmine.Spy).calls.reset();
      component.ngOnInit();

      expect(mockUserService.getUser).toHaveBeenCalledTimes(1);
      expect(mockMatchService.getUsersPronostics).not.toHaveBeenCalled();
    });
  });
});
