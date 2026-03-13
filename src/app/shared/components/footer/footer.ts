import { Component } from '@angular/core';
import { COMPANY_INFO } from '../../../core/company-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  company = COMPANY_INFO;
  currentYear = new Date().getFullYear();
}
