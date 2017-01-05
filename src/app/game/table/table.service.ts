import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Table } from './models/Table'


@Injectable()
export class TableService {

  constructor(private af: AngularFire) { }

  deleteTable(id: string, table: Table): void {
    const tableRef = this.af.database.object('/games/' + id);
    tableRef.remove();
  }

  getTable(id: string): Table {
    var table: Table;
    const tableRef = this.af.database.list('/games/' + id);
    tableRef
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          table = snapshot.val();
        });
      })
    return table;
  }

  putTable(id: string, table: Table): void {
    const tableRef = this.af.database.object('/games/' + id);
    tableRef.set(table);
  }

  updateTable(id: string, table: Table): void {
    const tableRef = this.af.database.object('/games/' + id);
    tableRef.update(table);
  }


}
