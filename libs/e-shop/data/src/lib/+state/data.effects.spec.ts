import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as EShopDataActions from './data.actions';
import { EShopDataEffects } from './data.effects';

describe('EShopDataEffects', () => {
  let actions: Observable<Action>;
  let effects: EShopDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        EShopDataEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(EShopDataEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: EShopDataActions.init() });

      const expected = hot('-a-|', {
        a: EShopDataActions.loadEShopDataSuccess({ eShopData: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
