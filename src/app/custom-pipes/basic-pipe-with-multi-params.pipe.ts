import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basicPipeWithMultiParams'
})
export class BasicPipeWithMultiParamsPipe implements PipeTransform {

  /*By default unkonw data type attched by angular while adding the pipe to the parameter. You can change based on your work after that */
  transform(value: string, ...args: any[]): string {

    const maxCharacters  = 20;

    if (args[0] === "3" && args[1].length > maxCharacters){
      return value = value.substring(0, maxCharacters).concat(' ...more');
    }
    else{
      return value;
    }
  }

}
