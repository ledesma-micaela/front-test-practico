import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemCondition'
})
export class ItemConditionPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'new':
        return 'Nuevo';
      case 'used':
        return 'Usado';
      default:
        return value;
    }
  }
}
