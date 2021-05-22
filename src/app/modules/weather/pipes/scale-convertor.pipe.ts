import { Pipe, PipeTransform } from '@angular/core';
import { TempScales } from '../enums/temp-scales.enum';

@Pipe({
  name: 'scaleConvertor',
})
export class ScaleConvertorPipe implements PipeTransform {
  transform(value: number, unit: TempScales) {
    if (value) {
      if (unit === TempScales.celsius) {
        const temperature = (value - 32) / 1.8;
        return temperature.toFixed();
      } else if (unit === TempScales.fahrenheit) {
        return value.toFixed();
      }
    }
    return value;
  }
}
