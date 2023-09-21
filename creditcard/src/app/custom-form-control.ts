import { FormControl } from '@angular/forms';

export class CustomFormControl extends FormControl {
  override setValue(
    value: string,
    options?:
      | {
          onlySelf?: boolean | undefined;
          emitEvent?: boolean | undefined;
          emitModelToViewChange?: boolean | undefined;
          emitViewToModelChange?: boolean | undefined;
        }
      | undefined
  ): void {
    options = { ...options, emitModelToViewChange: true };

    super.setValue(value, options);
  }
}
