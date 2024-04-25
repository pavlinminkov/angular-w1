import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-paragraph',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toggle-paragraph.component.html',
  styleUrl: './toggle-paragraph.component.css',
})
export class ToggleParagraphComponent {
  @Input() firstParagraph!: string;
  @Input() secondParagraph!: string;
  showSecondParagraph = false;
}
