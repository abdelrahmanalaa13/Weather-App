import { Pipe, PipeTransform } from '@angular/core';
import { TempScales } from '../enums/temp-scales.enum';

@Pipe({
  name: 'scaleConvertor',
})
export class ScaleConvertorPipe implements PipeTransform {
  /**
   * to convert the temp from/to celsius or fahrenheit
   * @param value is the parsed temp
   * @param unit fahrenheit or celsius
   * @returns the nearest converted temp
   */
  transform(value: number, unit: TempScales) {
    if (value) {
      let temperature;
      if (unit === TempScales.celsius) {
        temperature = (value - 32) / 1.8;
      } else if (unit === TempScales.fahrenheit) {
        temperature = value;
      }
      return temperature.toFixed();
    }
  }
}
