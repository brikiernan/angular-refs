import { HttpInterceptorFn } from '@angular/common/http';

export const authHttpInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ withCredentials: true });
  return next(req);
  // Interact with event types
  //   .pipe(
  //   filter((val) => val.type === HttpEventType.Response),
  //   tap((val) => console.log(val))
  // );
};
