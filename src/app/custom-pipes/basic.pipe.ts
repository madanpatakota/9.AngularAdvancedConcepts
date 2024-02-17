import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basicPipe',
})
export class BasicPipe implements PipeTransform {

    /*By default unkonw data type attched by angular while adding the pipe to the parameter. You can change based on your work after that*/
  // Case 1 : Normal substring
  // transform(value: string , args? : string[]): string {
  //   const maxCharacters = 20;
  //   return value = value.substring(0, maxCharacters);
  // }

  //  Case 2 :
  // In case if you want attach the ... charcters based on the maxCharcters variable
  transform(value: string, args?: string): string {
    const maxCharacters = 20;
    if (args === '1') {
      return (value = value.substring(0, maxCharacters))+".";
    } else {
      return (value = value.concat(' He is Angular Developer'));
    }
  }
}
