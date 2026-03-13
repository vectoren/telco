import { Component } from '@angular/core';
import { COMPANY_INFO } from '../../../core/company-data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  company = COMPANY_INFO;
  currentYear = new Date().getFullYear();
}
