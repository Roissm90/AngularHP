import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const checkuserGuard = () => {

    const router = inject(Router);

    return (!localStorage.getItem('authToken') ? true : router.navigate(['/miarea']))
}