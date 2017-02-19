import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let term = args.toLocaleLowerCase();
    if(!value){
      return null
    }
    else {
      return value.filter(user =>
          user.name.toLocaleLowerCase().indexOf(term) != -1
      )
    }
  }

}
