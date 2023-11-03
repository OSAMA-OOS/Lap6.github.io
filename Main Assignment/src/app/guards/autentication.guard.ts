import { CanActivateFn } from '@angular/router';
import { AccountService } from '../Services/account/account.service';
import { inject } from '@angular/core';

export const autenticationGuard: CanActivateFn = (route, state) => {
  var result = inject(AccountService).isAuthenticated;
  return result;
};
