import { Pipe, PipeTransform } from '@angular/core';
import { clock } from './dto';

@Pipe({
    name: 'selectfilter',
    pure: false
})
export class Selectfilter implements PipeTransform {
    
    transform(clocks: clock[], filter: any): any {
        if (!clocks || !filter || filter == 0) {
            return clocks;
        }
   
        return clocks.filter(clock => clock.cityId == filter);
    }
}