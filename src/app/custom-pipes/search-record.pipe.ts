import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRecord'
})
export class SearchRecordPipe implements PipeTransform {
  transform(records: any[], searchTerm: string): any[] {
    if (!searchTerm) return records;
    return records.filter(record =>
      record.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
