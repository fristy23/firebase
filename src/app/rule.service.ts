import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private rules: Rule[] = [];

  constructor() {
    // Initialize rules
    this.rules = [
      { id: 1, name: 'Rule 1', description: 'Description 1' },
      { id: 2, name: 'Rule 2', description: 'Description 2' },
      { id: 3, name: 'Rule 3', description: 'Description 3' }
      // Add more rules as needed
    ];
  }

  getRules(): Rule[] {
    return this.rules;
  }

  getRuleById(id: number): Rule | undefined {
    return this.rules.find(rule => rule.id === id);
  }
}

interface Rule {
  id: number;
  name: string;
  description: string;
}
