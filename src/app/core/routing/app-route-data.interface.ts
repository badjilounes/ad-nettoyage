import { Data } from '@angular/router';

export interface AppRouteData extends Data {
  order?: number;
  menu?: boolean;
  title?: string;
}
