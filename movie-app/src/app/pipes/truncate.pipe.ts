import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.length > 17
      ? value.slice(0, 17) + '...'.split('\n').join(' ')
      : value.split('\n').join(' ');
  }
}
