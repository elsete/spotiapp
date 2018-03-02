import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    let noimage = 'assets/img/noimage.png';

    return imagenes && imagenes.length > 0 ? imagenes[1].url : noimage;
  }

}
