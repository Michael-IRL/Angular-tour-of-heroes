import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PowersService {
  constructor(private messageService: MessageService) {}

  powers: string[] = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
    'Dark',
    'Fire',
    'Light',
    'Magnetism',
    'Speed',
    'Smart',
    'Lava',
    'Wind',
  ];

  getPowers(): Observable<string[]> {
    this.messageService.add('retrieve powers');
    return of(this.powers);
  }
}
