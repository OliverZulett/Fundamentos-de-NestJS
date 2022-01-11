import { ConsoleLogger, Injectable, Scope } from "@nestjs/common";

@Injectable({
  scope: Scope.TRANSIENT,
})
export class MyCustomLog extends ConsoleLogger {
  myCustomLog() {
    this.log('SOY UN LOG PERSONALIZADO');
  }
}
