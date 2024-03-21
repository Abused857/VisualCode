import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";


@Injectable()
export class LoginGuardian implements CanActivate
{


    constructor(private router:Router, private loginService:LoginService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      

        if(this.loginService.estaLogueado())
        {
            return true;
        }
        else
        {
            this.router.navigate(['login']);
            return false;
        }


    }
    
}