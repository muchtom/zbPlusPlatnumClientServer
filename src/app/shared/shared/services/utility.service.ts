import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FieldOptionData } from '../models/from-forms';
import { IField } from '../models/forms';

export class UtilityService {
  public static fieldOptionsMapper(dataAsync: Observable<any[]>, name?: string, value?: string):
    Observable<FieldOptionData[]> {
    return dataAsync.pipe(map(data => this.dataOptionsMapper(data, name, value)));
  }

  public static dataOptionsMapper(content: any[], name?: string, value?: string): FieldOptionData[] {
    return content.map(function(data) {
      if (!isNaN(+data)) data = data.toString();
      return { name: name ? data[name] : data, value: value ? data[value] : data };
    });
  }

 

  public static getOrEmpty(name: string, obj: any): any {
    if (obj && obj[name]) return obj[name];
    return {};
  }
}


