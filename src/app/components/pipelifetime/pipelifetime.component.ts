import { Component, OnInit, Input } from '@angular/core';

import { PipeLifetime } from '../../types/types';

@Component({
  selector: 'app-pipelifetime',
  templateUrl: './pipelifetime.component.html',
  styleUrls: ['./pipelifetime.component.css']
})
export class PipeLifetimeComponent implements OnInit {

  @Input() pipe: PipeLifetime

  constructor() { }

  ngOnInit(): void { }

}
