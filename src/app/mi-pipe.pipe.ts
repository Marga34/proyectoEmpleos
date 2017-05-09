import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
  pure: false
})
export class MiPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0){
      return value;
    }
    var resultArray = [];
    for (var item of value){
      if (item.nombre.match('^.*' + args + '.*$')){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
