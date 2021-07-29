import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTruncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit = 25,
    completeWords = true,
    ellipsis = '...'
  ): string {
    if (!value) {
      return '';
    }

    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }

    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}
