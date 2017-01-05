import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Table } from './Table'

@Injectable()
export class TableService {

  constructor(private af: AngularFire) { }

  //Table CRUD
  deleteTable(id: string, table: Table): void {
    const tableRef = this.af.database.object('/games/' + id);
    tableRef.remove();
  }

  getTable(id: string): any {
    return this.af.database.object('/games/' + id);
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
